import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlokasiPage = () => {
  const currentYear = new Date().getFullYear();
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    tahun: currentYear,
    daerah: '',
    dbh: '',
    dau: '',
    dakFisik: '',
    dakNonfisik: '',
    danaDesa: '',
    infis: ''
  });

  // Helper untuk parsing string ke number
  const parseNumber = (value) => {
    if (typeof value !== 'string') return value;
    const clean = value.replace(/,/g, '.');
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
  };

  // Fetch data chart berdasarkan tahun
  const fetchChart = async (year) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/alokasi/grafik?tahun=${year}`,
        { headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY } }
      );

      const parsedData = res.data.map(item => ({
        ...item,
        dbh: parseNumber(item.dbh),
        dau: parseNumber(item.dau),
        dakFisik: parseNumber(item.dakFisik),
        dakNonfisik: parseNumber(item.dakNonfisik),
        danaDesa: parseNumber(item.danaDesa),
        infis: parseNumber(item.infis),
        total: parseNumber(item.total)
      }));

      setData(parsedData);
    } catch (err) {
      console.error('Gagal ambil data chart', err);
    }
  };

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Submit form dan refresh chart
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:3000/api/alokasi/create',
        {
          ...form,
          tahun: parseInt(form.tahun),
          dbh: parseNumber(form.dbh),
          dau: parseNumber(form.dau),
          dakFisik: parseNumber(form.dakFisik),
          dakNonfisik: parseNumber(form.dakNonfisik),
          danaDesa: parseNumber(form.danaDesa),
          infis: parseNumber(form.infis)
        },
        { headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY } }
      );

      alert('Data berhasil dikirim');
      fetchChart(form.tahun);
    } catch (err) {
      console.error('Gagal mengirim data', err);
      alert('Gagal mengirim data');
    }
  };

  // Fetch chart saat komponen mount atau tahun berubah
  useEffect(() => {
    fetchChart(form.tahun);
  }, [form.tahun]);

  const labelMap = {
    tahun: 'Tahun Anggaran',
    daerah: 'Nama Daerah',
    dbh: 'Dana Bagi Hasil (DBH)',
    dau: 'Dana Alokasi Umum (DAU)',
    dakFisik: 'DAK Fisik',
    dakNonfisik: 'DAK Nonfisik',
    danaDesa: 'Dana Desa',
    infis: 'Insentif Fiskal (InFis)'
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-4 space-y-8 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center">Input & Grafik Alokasi TKD</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.keys(form).map(key => (
            <div key={key} className="flex flex-col">
              <label className="mb-1 font-medium">{labelMap[key]}</label>
              <input
                type={key === 'tahun' ? 'number' : 'text'}
                step={key === 'tahun' ? undefined : 'any'}
                name={key}
                value={form[key]}
                onChange={handleChange}
                required
                className="border p-2 rounded"
              />
            </div>
          ))}
          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Simpan Data
          </button>
        </form>

        {/* Chart placeholder, misal Recharts akan di sini */}
      </div>
    </div>
  );
};

export default AlokasiPage;
