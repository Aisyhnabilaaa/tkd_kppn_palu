// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// const RealisasiChart = ({ data }) => {
//   return (
//     <div className="bg-white p-4 rounded-xl shadow-md">
//       <h2 className="text-xl font-semibold mb- text-center">Realisasi</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data} 
//         margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
//           <XAxis dataKey="jenis_tkd" />
          
//           {/* Y Axis untuk Pagu */}
//           <YAxis
//           yAxisId="left"
//           tickFormatter={(value) =>
//           new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR",
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(value)
//   }
// />

          
//           {/* Y Axis untuk Realisasi */}
//           <YAxis 
//   yAxisId="right" 
//   orientation="right" 
//   tickFormatter={(value) => `${value}%`} 
//   domain={[0, 'dataMax + 10']} // biar grafiknya fleksibel sesuai data
// />


//           <Tooltip />
//           <Legend />
          
//           {/* Bar untuk Pagu */}
//           <Bar yAxisId="left" dataKey="pagu" fill="#8884d8" name="Pagu (Rp)" />
          
//           {/* Bar untuk Realisasi */}
//           <Bar yAxisId="right" dataKey="persentase" fill="#82ca9d" name="Realisasi (%)" />

//           {/* Bar untuk sisa pagu */}
//           <Bar yAxisId="left" dataKey="sisa_pagu" fill="#ffcc00" name="Sisa Pagu (Rp)" />

//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default RealisasiChart;


import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RealisasiChart = ({ data, isMobile }) => {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  // Hitung nilai maksimum persentase dari data
  const maxPersentase = Math.ceil(
    Math.max(...data.map((item) => item.persentase ?? 0)) / 5
  ) * 5;

  const ticks = Array.from({ length: maxPersentase / 5 + 1 }, (_, i) => i * 5);

  if (isMobile) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-center">Realisasi</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="realisasi"
              nameKey="jenis_tkd"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-center">Realisasi</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
        >
          <XAxis dataKey="jenis_tkd" />
          <YAxis
            yAxisId="left"
            tickFormatter={(value) =>
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(value)
            }
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            domain={[0, maxPersentase]} 
            ticks={ticks}
            tickFormatter={(value) => `${value}%`} 
          />
          <Tooltip
            formatter={(value, name) => {
              if (name.includes("Pagu")) {
                return [`Rp ${value.toLocaleString("id-ID")}`, name];
              }
              if (name.includes("Realisasi")) {
                return [`${value.toFixed(2)}%`, name];
              }
              return [value, name];
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="pagu" fill="#8884d8" name="Pagu (Rp)" />
          <Bar yAxisId="right" dataKey="persentase" fill="#82ca9d" name="Realisasi (%)" />
          <Bar yAxisId="left" dataKey="sisa_pagu" fill="#ffcc00" name="Sisa Pagu (Rp)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealisasiChart;
