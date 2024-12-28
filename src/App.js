import React, { useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Views from "./views";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // function openNav() {
  //   document.getElementById("mySidepanel").style.width = "100%";
  // }

  /* Set the width of the sidebar to 0 (hide it) */
  // function closeNav() {
  //   document.getElementById("mySidepanel").style.width = "0";
  // }

  const route = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  window.onscroll = () => {
    const navbar = document.getElementById("nav123");
    if (window.scrollY > 80) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <ToastContainer />

      <Layout>
        <Routes>
          <Route path="/*" element={<Views />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
