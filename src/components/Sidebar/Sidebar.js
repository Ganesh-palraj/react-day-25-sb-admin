import "../../App.css";
import './Sidebar.css';

import {
  FaLaughWink,
  FaTachometerAlt,
  FaCog,
  FaWrench,
  FaFolder,
  FaChartArea,
  FaTable,
} from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import React from "react";
import { useState } from "react";
import Componentdropdown from "./Component";
import Utilities from "./Utilities";
import Pages from "./Pages";

import { Button } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="sidebar align-items-center justify-content-center"
      style={{ width: isOpen ? "200px" : "100px" }}
    >
      <ul>
        <li className="heading">
          {isOpen ? (
            <>
              <span id="laugh-icon rotate-n-15" className="laugh-icon">
                <FaLaughWink />
              </span>
              <h6>
                SB ADMIN <sup>2</sup>
              </h6>
            </>
          ) : (
            <div>
              <FaLaughWink size={"30px"} />
            </div>
          )}
        </li>
        <hr />

        <li className="nav-items">
          <a className="nav-link" href="index.html">
            <span className="nav-icon dashboard-icon">
              <FaTachometerAlt />
            </span>
          </a>
          <span>Dashboard</span>
        </li>
        <hr />
        <p>INTERFACE</p>
        <li className="nav-items">
          <a className="nav-link" href="index.html">
            <span className="nav-icon" >
              <FaCog />
            </span>
          </a>
          <span>
            <Componentdropdown />
          </span>
        </li>
        <li className="nav-items">
          <a className="nav-link" href="index.html">
            <span className="nav-icon">
              <FaWrench />
            </span>
          </a>
          <span>
            <Utilities />
          </span>
        </li>
        <hr />
        <p>ADDONS</p>
        <li className="nav-items">
          <a className="nav-link" href="index.html">
            <span className="nav-icon">
              <FaFolder />
            </span>
          </a>
          <span>
            <Pages />
          </span>
        </li>
        <li className="nav-items">
          <a className="nav-link" href="index.html">
            <span className="nav-icon">
              <FaChartArea />
            </span>
          </a>
          <span>
            <Button
              variant="link"
              id="dropdown-basic"
              style={{
                color: "white",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              Charts
            </Button>
          </span>
        </li>
        <li className="nav-items">
          <a className="nav-link" href="index.html">
            <span>
              <FaTable />
            </span>
          </a>
          <span>
            <Button
              variant="link"
              id="dropdown-basic"
              style={{
                color: "white",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              Tables
            </Button>
          </span>
        </li>
        <hr />
        <div className=" toggler-icon text-center ">
          <Button
            className="rounded-circle border-50"
            id="sidebarToggle"
            onClick={toggle}
          >
            {isOpen ? <IoIosArrowDropleft /> : <IoIosArrowDropright />}
          </Button>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
