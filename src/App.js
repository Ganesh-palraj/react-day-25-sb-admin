import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Navigation from "./components/Navbar/Navbar.js";
import ColorDevelopment from "./components/Color and development/ColorDevelopment";
import PageHeading from "./components/Pageheading/PageHeading.js";
import Earnings from "./components/Earnings/Earnings";
import TotalCharts from "./components/TotalCharts";
import Projects from "./components/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="container Fluid main-container">
        <Navigation />
        <PageHeading />
        <Earnings />
        <TotalCharts />
        <Projects />
        <ColorDevelopment />
        <Footer />
      </div>
    </div>
  );
}

export default App;
