import "../../App.css";
import './Sidebar.css';

import Dropdown from "react-bootstrap/Dropdown";

function Componentdropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
      >
        Components
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ fontSize: "10px" }}>
        <Dropdown.Header style={{ fontSize: "10px" }}>Custom Components</Dropdown.Header>
        <Dropdown.Item href="#/action-1">Buttons</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cards</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Componentdropdown;
