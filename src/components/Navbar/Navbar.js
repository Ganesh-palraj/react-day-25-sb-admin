import React from "react";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import "../../App.css";
import "./Navbar.css";

import { AiOutlineSearch } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Badges from "../Badges/Badges.js";

// import { Input } from "reactstrap";
// import Navbar from "react-bootstrap/Navbar";

// import Button from "react-bootstrap/Button";

// import { BiBell } from "react-icons/bi";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Navigation() {
  return (
    <>
      <div className="navbar shadow">
        
          <span className="item-1">
            <Form>
              <InputGroup>
                <Form.Control
                  placeholder="Search for..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1">
                  <AiOutlineSearch />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </span>
          <span className="item-2 badges">
          
              <Badges />
            
          </span>
        
      </div>
    </>
  );
}

export default Navigation;
