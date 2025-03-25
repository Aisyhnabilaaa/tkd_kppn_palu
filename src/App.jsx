import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";

import SultengPage from "./pages/SultengPage";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar tetap di atas untuk semua halaman */}
      
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/pages/Sulawesi Tengah" element={<SultengPage />} />
      </Routes>
      
      <Footer /> {/* Footer tetap di bawah untuk semua halaman */}
    </Router>
  );
}

export default App;
