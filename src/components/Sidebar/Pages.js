import "../../App.css";
import './Sidebar.css';


import Dropdown from "react-bootstrap/Dropdown";

function Pages() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
      >
        Pages
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ fontSize: "10px" }}>
        <Dropdown.Header style={{ fontSize: "10px" }}>LOGIN SCREENS</Dropdown.Header>
        <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Forgot password</Dropdown.Item>
        <Dropdown.Header style={{ fontSize: "10px" }}>OTHER PAGES</Dropdown.Header>
        <Dropdown.Item href="#/action-2">404 Page</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Blank Page</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Other</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Pages;
