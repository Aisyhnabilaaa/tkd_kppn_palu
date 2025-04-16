// src/pages/AdminTKDTable.jsx
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";


const ADMIN_API_KEY = import.meta.env.VITE_ADMIN_API_KEY;

const AdminTKDTable = () => {
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [tahun, setTahun] = useState("");
  const [daerah, setDaerah] = useState("");
  const [efisiensiData, setEfisiensiData] = useState([]);
  const [realisasiData, setRealisasiData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData = useCallback(async () => {
    try {
      if (!tahun || !daerah) return;

      const [efisiensiRes, realisasiRes] = await Promise.all([
        axios.get(`http://localhost:3000/tkd/efisiensi?tahun=${tahun}&daerah=${daerah}`),
        axios.get(`http://localhost:3000/tkd/realisasi?tahun=${tahun}&daerah=${daerah}`),
      ]);

      setEfisiensiData(efisiensiRes.data);
      setRealisasiData(realisasiRes.data);
    } catch (err) {
      console.error("Gagal fetch data:", err);
      setMessage("❌ Gagal memuat data");
    }
  }, [tahun, daerah]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAccessSubmit = (e) => {
    e.preventDefault();
    if (apiKeyInput === ADMIN_API_KEY) {
      setHasAccess(true);
    } else {
      setMessage("❌ Kode akses salah!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      {!hasAccess ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-center mb-4">Masukkan Kode Akses Admin</h2>
          <form onSubmit={handleAccessSubmit} className="space-y-4">
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="Kode Akses"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Masuk
            </button>
            {message && <p className="text-red-600 text-center">{message}</p>}
          </form>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">Data Anggaran TKD</h2>

          {/* Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
            <select
              value={daerah}
              onChange={(e) => setDaerah(e.target.value)}
              className="p-2 border rounded-md"
              required
            >
              <option value="">Pilih Daerah</option>
              <option value="Sulawesi Tengah">Sulawesi Tengah</option>
              <option value="Kota Palu">Kota Palu</option>
              <option value="Parigi Moutong">Parigi Moutong</option>
              <option value="Kabupaten Sigi">Kabupaten Sigi</option>
              <option value="Kabupaten Donggala">Kabupaten Donggala</option>
            </select>

            <input
              type="number"
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              placeholder="Tahun"
              className="p-2 border rounded-md"
              required
            />
          </div>

          {/* Tabel Efisiensi */}
          <div className="overflow-auto mb-10 bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Tabel Efisiensi</h3>
            <table className="w-full border border-black text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-black p-2">Jenis TKD</th>
                  <th className="border border-black p-2">Semula</th>
                  <th className="border border-black p-2">Menjadi</th>
                  <th className="border border-black p-2">Pencadangan</th>
                  <th className="border border-black p-2">Pagu</th>
                  <th className="border border-black p-2">Efisiensi (%)</th>
                  <th className="border border-black p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {efisiensiData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-black p-2">{item.jenis_tkd}</td>
                    <td className="border border-black p-2">{item.semula.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.menjadi.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.pencadangan.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.pagu.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.efisiensi}%</td>
                    <td className="border border-black p-2">
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mx-2">
                        HAPUS
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded ">
                        EDIT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tabel Realisasi */}
          <div className="overflow-auto bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Tabel Realisasi</h3>
            <table className="w-full border border-black text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-black p-2">Jenis TKD</th>
                  <th className="border border-black p-2">Pagu</th>
                  <th className="border border-black p-2">Realisasi</th>
                  <th className="border border-black p-2">Sisa Pagu</th>
                  <th className="border border-black p-2">Persentase (%)</th>
                  <th className="border border-black p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {realisasiData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-black p-2">{item.jenis_tkd}</td>
                    <td className="border border-black p-2">{item.pagu.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.realisasi.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.sisa_pagu.toLocaleString("id-ID")}</td>
                    <td className="border border-black p-2">{item.persentase}%</td>
                    <td className="border border-black p-2">
                      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mx-2">
                        HAPUS
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded ">
                        EDIT
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminTKDTable;
