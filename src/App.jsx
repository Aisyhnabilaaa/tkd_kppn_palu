import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";


import PaluPage from "./pages/PaluPage";
import DonggalaPage from "./pages/DonggalaPage";
import SigiPage from "./pages/SigiPage";
import ParimoPage from "./pages/ParimoPage";
import SultengPage from "./pages/SultengPage";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar tetap di atas untuk semua halaman */}
      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Sulawesi Tengah" element={<SultengPage />} />
        <Route path="/Kota Palu" element={<PaluPage />} />
        <Route path="/Donggala" element={<DonggalaPage />} />
        <Route path="/Sigi" element={<SigiPage />} />
        <Route path="/Parigi Moutong" element={<ParimoPage />} />

      </Routes>
      
      <Footer /> {/* Footer tetap di bawah untuk semua halaman */}
    </Router>
  );
}

export default App;
