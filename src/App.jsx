import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router"; // Importa desde react-router-dom, no 'react-router'
import "./index.css";
import Shop from "./pages/Shop";
import Lenis from "@studio-freight/lenis";
import NotFound from "./pages/NotFound";
import PcId from "./pages/PcID"
import ShopCategories from "./pages/ShopCategories";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pc/:id" element={<PcId/>}/>
        <Route path="categories/:categoria" element={<ShopCategories/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
