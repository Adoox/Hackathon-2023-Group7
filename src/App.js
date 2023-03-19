import React, { useEffect } from "react";
import "./App.css";
import MoneyMagic from "./components/MoneyMagic";
import Crypto from "./components/Crypto";
import CryptoDetail from "./components/CryptoDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <div>
    //   <div className="img-box">
    //     <img src={logo} alt="My logo" />
    //   </div>
    //   <div>
    //     <p className="title">MONEY MAGIC</p>
    //   </div>

    //   <MoneyMagic />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoneyMagic />}></Route>
        <Route path="crypto" element={<Crypto />} />
        <Route path="crypto/:symbol" element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
