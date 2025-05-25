import { useEffect, useState } from 'react';
import axios from 'axios';
import RealisasiChart from '../features/anggaran/components/RealisasiChart';

const AnggaranPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://charttkd-production.up.railway.app/tkd/efisiensi') // ganti dengan API kamu
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <RealisasiChart data={data} />
    </div>
  );
};

export default AnggaranPage;
