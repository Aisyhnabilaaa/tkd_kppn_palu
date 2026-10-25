import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

// Data grafik realisasi & efisiensi untuk satu daerah, plus pilihan tahunnya.
export function useTkdData(daerah) {
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 5 }, (_, i) =>
    String(currentYear - 3 + i)
  );
  const [tahun, setTahun] = useState(String(currentYear));
  const [realisasiData, setRealisasiData] = useState([]);
  const [efisiensiData, setEfisiensiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resRealisasi = await axios.get(
          `${API_URL}/tkd/realisasi?daerah=${daerah}&tahun=${tahun}`
        );
        const resEfisiensi = await axios.get(
          `${API_URL}/tkd/efisiensi?daerah=${daerah}&tahun=${tahun}`
        );

        const cleaned = resRealisasi.data.map((item) => ({
          ...item,
          pagu: Number(item.pagu),
          realisasi: Number(item.realisasi),
          persentase: Number(item.persentase),
          sisa_pagu: Number(item.sisa_pagu),
        }));

        setRealisasiData(cleaned);
        setEfisiensiData(resEfisiensi.data);
      } catch (err) {
        console.error("Gagal fetch data:", err);
      }
    };

    fetchData();
  }, [daerah, tahun]);

  return { tahun, setTahun, yearOptions, realisasiData, efisiensiData };
}
