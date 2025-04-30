import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AlokasiPage = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        tahun: '',
        daerah: '',
        dbh: '',
        dau: '',
        dakFisik: '',
        dakNonfisik: '',
        danaDesa: '',
        infis: ''
    });

    const fetchChart = async () => {
        try {
            const res = await axios.get(
                'http://localhost:3000/api/alokasi/grafik?tahun=2024',
                {
                    headers: {
                        'x-api-key': import.meta.env.VITE_ADMIN_API_KEY,
                    },
                }
            );
            const parseNumber = (value) => {
                const clean = value.replace(',', '.');
                const parsed = parseFloat(clean);
                return isNaN(parsed) ? 0 : parsed;
            };


            setData(res.data);
        } catch (err) {
            console.error('Gagal ambil data chart', err);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:3000/api/alokasi/create',
                form,
                {
                    headers: {
                        'x-api-key': import.meta.env.VITE_ADMIN_API_KEY,
                    },
                }
            );

            alert('Data berhasil dikirim');
            fetchChart(); // refresh chart
        } catch (err) {
            console.error(err);
            alert('Gagal mengirim data');
        }
    };

    useEffect(() => {
        fetchChart();
    }, []);

    return (
        <div className="p-4 space-y-8">
            <h1 className="text-xl font-bold">Input Alokasi TKD</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-w-2xl">
                {Object.keys(form).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="capitalize">{key}</label>
                        <input
                            type={key === 'tahun' || key === 'daerah' ? 'text' : 'number'}
                            name={key}
                            value={form[key]}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded"
                        />
                    </div>
                ))}
                <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Simpan Data
                </button>
            </form>

            <h2 className="text-xl font-bold mt-8">Grafik Alokasi TKD (2024)</h2>
            <BarChart
                width={1000}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="daerah" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#1d4ed8" name="Total Alokasi" />
            </BarChart>
        </div>
    );
};

export default AlokasiPage;
