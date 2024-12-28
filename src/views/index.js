import React from "react";
import Home from "../components/layout/Home";
import About from "../components/about";
import { Routes, Route, HashRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import WhySyncd from "../components/WhySyncd";
import Industries from "../components/Industries";

import Hiring from "../components/Hiring";
import Roles from "../components/Roles";
import Blog from "../components/blogs";

import Faq from "../components/faq";
import BlogsDetials from "../components/blogs/BlogDetail";
import SubIndustries from "../components/sub-Industries";
import SecurityCompliance from "../components/SecurityCompliance";
import Privacy from "../components/SecurityCompliance/Privacy-Policy";
import ISO from "../components/SecurityCompliance/27001";
import Aica from "../components/SecurityCompliance/aicpa's-soc";
import Gdpr from "../components/SecurityCompliance/GDPR";
import Ccpa from "../components/SecurityCompliance/CCPA-do-not-share";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/why-syncd" element={<WhySyncd />} />
      <Route path="/services" element={<Industries />} />
      <Route path="/hiring" element={<Hiring />} />
      <Route path="/roles/:url" element={<Roles />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/services/:url" element={<SubIndustries />} />
      <Route path="/blogs/:url" element={<BlogsDetials />} />
      <Route path="security-and-compliance" element={<SecurityCompliance />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/iso-27001" element={<ISO />} />
      <Route path="/soc-compliant" element={<Aica />} />
      <Route path="/gdpr-compliant" element={<Gdpr />} />
      <Route path="/ccpa-compliant" element={<Ccpa />} />
    </Routes>
  );
};

export default Views;
