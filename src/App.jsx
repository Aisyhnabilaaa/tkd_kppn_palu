import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";


import PaluPage from "./pages/PaluPage";
import DonggalaPage from "./pages/DonggalaPage";
import SigiPage from "./pages/SigiPage";
import ParimoPage from "./pages/ParimoPage";
import SultengPage from "./pages/SultengPage";
import SultengChartPage from "./pages/SultengChartPage";
import PaluChartPage from "./pages/PaluChartPage";
import FormInputTKD from "./pages/FormInputTKD";
import DongalaChartPage from "./pages/DonggalaChartPage";
import ParimoChartPage from "./pages/ParimoChartPage";
import SigiChartPage from "./pages/SigiChartPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar tetap di atas untuk semua halaman */}
      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Sulteng" element={<SultengPage />} />
        <Route path="/Palu" element={<PaluPage />} />
        <Route path="/Donggala" element={<DonggalaPage />} />
        <Route path="/DonggalaChart" element={<DongalaChartPage />} />
        <Route path="/Sigi" element={<SigiPage />} />
        <Route path="/SigiChart" element={<SigiChartPage />} />
        <Route path="/ParigiMoutong" element={<ParimoPage />} />
        <Route path="/ParigiMoutongChart" element={<ParimoChartPage />} />
        <Route path="/Sultengcharts" element={<SultengChartPage />} />
        <Route path="/Palucharts" element={<PaluChartPage />} />
        <Route path="/input" element={<FormInputTKD />} />
        <Route path="/table" element={<TablePage />} />

      </Routes>
      
      <Footer /> {/* Footer tetap di bawah untuk semua halaman */}
    </Router>
  );
}

export default App;
