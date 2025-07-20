import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import HostingerAccountPanel from "./pages/Profile";
import Websites from "./pages/Websites";
import Domains from "./pages/Domains";
import DomainPortfolio from "./pages/Domains/DomainPortfolio";
import NewDomain from "./pages/Domains/NewDomain";
import TransferDomain from "./pages/Domains/TransferDomain";
import Emails from "./pages/Emails";
import VPS from "./pages/VPS";
import Account from "./pages/Account";
import Horizons from "./pages/Horizons";
import Billing from "./pages/Billing";
import PaymentHistory from "./pages/billing/PaymentHistory";
import PaymentMethods from "./pages/billing/PaymentMethods";
import Subscriptions from "./pages/billing/Subscriptions";
import Marketplace from "./pages/Marketplace";
import DomainsMarket from "./pages/marketplace/DomainsMarket";
import Tools from "./pages/marketplace/Tools";
import EmailsMarket from "./pages/marketplace/EmailsMarket";
import Hosting from "./pages/marketplace/Hosting";
import Products from "./pages/marketplace/Products";
import Services from "./pages/marketplace/Services";
import Other from "./pages/marketplace/Other";

const App = () => {
  return (
    <BrowserRouter basename="/whmcs_api_wraper/public/app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<HostingerAccountPanel />} />
          <Route path="websites" element={<Websites />} />
          <Route path="domains" element={<Domains />}>
            <Route path="portfolio" element={<DomainPortfolio />} />
            <Route path="new" element={<NewDomain />} />
            <Route path="transfers" element={<TransferDomain />} />
          </Route>
          <Route path="horizons" element={<Horizons />} />
          <Route path="emails" element={<Emails />} />
          <Route path="vps" element={<VPS />} />
          <Route path="billing" element={<Billing />}>
            <Route path="history" element={<PaymentHistory />} />
            <Route path="methods" element={<PaymentMethods />} />
            <Route path="subscriptions" element={<Subscriptions />} />
          </Route>
          <Route path="marketplace" element={<Marketplace />}>
            <Route path="domains" element={<DomainsMarket />} />
            <Route path="emails" element={<EmailsMarket />} />
            <Route path="products" element={<Products />} />
            <Route path="hosting" element={<Hosting />} />
            <Route path="other" element={<Other />} />
            <Route path="services" element={<Services />} />
            <Route path="tools" element={<Tools />} />
          </Route>
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
