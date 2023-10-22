import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import { FaFileAlt } from "react-icons/fa";
import "../../App.css";
import './Badges.css'

function Badges() {
  return (
    <span >
      <ul className=" navbar-nav">

        {/* first nav-item */}

        <li
          className="notification"
          style={{ color: "#D1D3E2" }}
        >
          <Dropdown className="noarrow">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              style={{
                color: "black",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              <a className="nav-link" href="www.google.com">
                <span className="mail" style={{ color: "#D1D3E2" }}>
                  <BiBell />
                  <sup>
                    <span className="badge badge-danger badge-counter">3+</span>
                  </sup>
                </span>
              </a>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ fontSize: "12px" }}>
              <Dropdown.Header>
                <h6>ALERTS CENTER</h6>
              </Dropdown.Header>
              <Dropdown.Item
                className="d-flex align-items-center"
                href="#/action-1"
              >
                <div ClassName="mr-3">
                  <div ClassName="icon-circle bg-primary">
                  <FaFileAlt />
                    
                  </div>
                </div>
                <div>
                  <div ClassName="small text-gray-500">December 12, 2019</div>
                  <span ClassName="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </Dropdown.Item>

              <hr />

              <Dropdown.Item
                className="d-flex align-items-center"
                href="#/action-1"
              >
                <div ClassName="mr-3">
                  <div ClassName="icon-circle bg-primary">
                    <i ClassName="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </Dropdown.Item>

              <hr />

              <Dropdown.Item
                className="d-flex align-items-center"
                href="#/action-1"
              >
                <div ClassName="mr-3">
                  <div ClassName="icon-circle bg-primary">
                    
                    <i ClassName="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </Dropdown.Item>

              <hr />
              <a class="dropdown-item text-center small text-gray-500" href="www.google.com">Show All Alerts</a>
            </Dropdown.Menu>
          </Dropdown>
        </li>

       {/* second nav-item */}

        <li
          className="notification"
          style={{ color: "#D1D3E2" }}
        >
          <Dropdown className="noarrow">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              style={{
                color: "black",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              <a className="nav-link" href="www.google.com">
                <span className="mail" style={{ color: "#D1D3E2" }}>
                  <AiOutlineMail />
                  <sup>
                    <span className="badge badge-danger badge-counter">7</span>
                  </sup>
                </span>
              </a>
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Activity Log</Dropdown.Item>
              <hr />
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>

       {/* third nav-item */}

        <li
          className="notification"
          style={{ color: "#D1D3E2" }}
        >
          <Dropdown className="noarrow">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              style={{
                color: "black",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              <a className="nav-link" href="www.google.com">
                <span ClassName="mr-2 d-none d-lg-inline text-gray-600 small">
                  Douglas McGee
                </span>
                <img
                  className="img-profile rounded-circle no-arrow"
                  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
                  alt="username"
                  style={{ width: "25px" }}
                ></img>
              </a>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ fontSize: "10px" }}>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Activity Log</Dropdown.Item>
              <hr />
              <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </span>
  );
}

export default Badges;
