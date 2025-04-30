import { useState } from "react";
import axios from "axios";

const FormAlokasi = () => {
  const [form, setForm] = useState({
    pemda: "",
    dbh: "",
    dau: "",
    dakFisik: "",
    dakNonfisik: "",
    danaDesa: "",
    infis: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/alokasi", form);
      alert("Data berhasil ditambahkan!");
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan data.");
    }
  };

  const total = (
    parseFloat(form.dbh || 0) +
    parseFloat(form.dau || 0) +
    parseFloat(form.dakFisik || 0) +
    parseFloat(form.dakNonfisik || 0) +
    parseFloat(form.danaDesa || 0) +
    parseFloat(form.infis || 0)
  ).toFixed(2);


  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Form Input Alokasi TKD</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {["pemda", "dbh", "dau", "dakFisik", "dakNonfisik", "danaDesa", "infis"].map((key) => (
          <div key={key}>
            <label className="block capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={form[key]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-2 py-1 rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Simpan
        </button>
      </form>
      <p className="font-semibold mt-2">Total: Rp {total}</p>

    </div>
  );
};

export default FormAlokasi;
