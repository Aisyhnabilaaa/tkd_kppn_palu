import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import axios from "axios";

const AlokasiChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/alokasi") // Sesuaikan dengan URL backend Anda
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="pemda" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="dbh" stackId="a" fill="#8884d8" />
          <Bar dataKey="dau" stackId="a" fill="#82ca9d" />
          <Bar dataKey="dakFisik" stackId="a" fill="#ffc658" />
          <Bar dataKey="dakNonfisik" stackId="a" fill="#ff8042" />
          <Bar dataKey="danaDesa" stackId="a" fill="#8dd1e1" />
          <Bar dataKey="infis" stackId="a" fill="#d0ed57" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AlokasiChart;