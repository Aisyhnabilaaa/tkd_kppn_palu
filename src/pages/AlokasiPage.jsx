import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AlokasiPage = () => {
  const currentYear = new Date().getFullYear();
  const [tahun, setTahun] = useState(String(currentYear));
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

  const yearOptions = Array.from({ length: 5 }, (_, i) => String(currentYear - 3 + i));

  const parseNumber = (value) => {
    if (typeof value !== 'string') return value;
    const clean = value.replace(/,/g, '.');
    const parsed = parseFloat(clean);
    return isNaN(parsed) ? 0 : parsed;
  };

  const fetchChart = async (year) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/alokasi/grafik?tahun=${year}`, {
        headers: { 'x-api-key': import.meta.env.VITE_ADMIN_API_KEY }
      });

      const order = [
        "Provinsi Sulawesi Tengah",
        "Kota Palu",
        "Kabupaten Sigi",
        "Kabupaten Donggala",
        "Kabupaten Parigi Moutong"
      ];

      const parsedData = res.data.map(item => ({
        ...item,
        dbh: parseNumber(item.dbh),
        dau: parseNumber(item.dau),
        dakFisik: parseNumber(item.dakFisik),
        dakNonfisik: parseNumber(item.dakNonfisik),
        danaDesa: parseNumber(item.danaDesa),
        infis: parseNumber(item.infis),
        total: parseNumber(item.total)
      })).sort((a, b) => order.indexOf(a.daerah) - order.indexOf(b.daerah));

      setData(parsedData);
    } catch (err) {
      console.error('Gagal ambil data chart', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

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
      fetchChart(tahun);
    } catch (err) {
      console.error('Gagal mengirim data', err);
      alert('Gagal mengirim data');
    }
  };

  useEffect(() => {
    fetchChart(tahun);
  }, [tahun]);

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

  const LegendItem = ({ color, label }) => (
    <div className="flex items-center mr-4 mb-2">
      <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: color }}></div>
      <span className="text-sm">{label}</span>
    </div>
  );


  return (
    <div className="flex items-center justify-center">
      <div className="space-y-8 w-full max-w-full">
        <h1 className="text-2xl font-bold text-center">Input & Grafik Alokasi TKD</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.keys(form).map(key => (
            <div key={key} className="flex flex-col">
              <label className="mb-1 font-medium">{labelMap[key]}</label>
              {key === 'daerah' ? (
                <select
                  name="daerah"
                  value={form.daerah}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded"
                >
                  <option value="">Pilih Daerah</option>
                  <option value="Provinsi Sulawesi Tengah">Provinsi Sulawesi Tengah</option>
                  <option value="Kota Palu">Kota Palu</option>
                  <option value="Kabupaten Sigi">Kabupaten Sigi</option>
                  <option value="Kabupaten Donggala">Kabupaten Donggala</option>
                  <option value="Kabupaten Parigi Moutong">Kabupaten Parigi Moutong</option>
                </select>
              ) : (
                <input
                  type={key === 'tahun' ? 'number' : 'text'}
                  step={key === 'tahun' ? undefined : 'any'}
                  name={key}
                  value={form[key]}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Simpan Data
          </button>
        </form>

        {/* Dropdown Tahun */}
        <div className="flex justify-end px-6 mt-6">
          <select
            className="border rounded px-3 py-2 text-sm"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
          >
            {yearOptions.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Chart Section */}
        <div className="mb-8 px-4">
          <h1 className="font-bold text-2xl md:text-3xl text-amber-400 p-6 text-center drop-shadow-lg">
            Pencadangan Alokasi TKD <span className="text-blue-900">Lingkup KPPN Palu</span>
          </h1>
          <p className="text-center text-gray-700 mb-4">Data Tahun: <strong>{tahun}</strong></p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((daerahData, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-4">
                <h2 className="text-lg font-bold text-center mb-2 text-blue-800">{daerahData.daerah}</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[daerahData]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="daerah" hide />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="dbh" fill="#f97316" name="DBH" />
                    <Bar dataKey="dau" fill="#00A808" name="DAU" />
                    <Bar dataKey="dakFisik" fill="#3b82f6" name="DAK Fisik" />
                    <Bar dataKey="dakNonfisik" fill="#7F0088" name="DAK Nonfisik" />
                    <Bar dataKey="danaDesa" fill="#eab308" name="Dana Desa" />
                    <Bar dataKey="infis" fill="#ec4899" name="INFIS" />
                    <Bar dataKey="total" fill="#1d4ed8" name="Total Alokasi" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-6">
            <LegendItem color="#f97316" label="DBH" />
            <LegendItem color="#00A808" label="DAU" />
            <LegendItem color="#3b82f6" label="DAK Fisik" />
            <LegendItem color="#7F0088" label="DAK Nonfisik" />
            <LegendItem color="#eab308" label="Dana Desa" />
            <LegendItem color="#ec4899" label="INFIS" />
            <LegendItem color="#1d4ed8" label="Total Alokasi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlokasiPage;
