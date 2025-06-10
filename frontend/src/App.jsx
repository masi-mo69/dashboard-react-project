import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import React from "react";
import Domains from "./pages/Domains";
import Emails from "./pages/Emails";
import VPS from "./pages/VPS";
import Websites from "./pages/Websites";
import Account from "./pages/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/domains" element={<Domains />}/>
          <Route path="/emails" element={<Emails />}/>
          <Route path="/vps" element={<VPS />}/>
          <Route path="/websites" element={<Websites />}/>
          <Route path="/account" element={<Account />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
