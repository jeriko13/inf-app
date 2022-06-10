import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { API_URL } from './config/config'

import Beranda from "./screens/Beranda";
import Portfolio from './screens/Portfolio';
import Services from './screens/Services';
import About from './screens/About';
// import Index from "screens/Index.js";
import Informasi from './screens/Informasi';
// import Informasi2 from './screens/Informasi2';
// import Kegiatan from './screens/Kegiatan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda/>} />
        <Route path="/informasi" element={<Informasi/>} />
        {/* <Route path="/kegiatan" element={<Kegiatan/>} /> */}
        {/* <Route path="/informasi2" element={<Informasi2/>} /> */}
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/informasi/:id" element={<Informasi/>} />
        
        {/*Not found routes */}
        <Route from="*" element={<Beranda/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


