import "../../App.css";


import Dropdown from "react-bootstrap/Dropdown";

function Utilities() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        id="dropdown-basic"
        style={{ color: "white", fontSize: "12px", textDecoration: "none" }}
      >
        Utilities
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ fontSize: "10px" }}>
        <Dropdown.Header style={{ fontSize: "10px" }}>Custom Utilities</Dropdown.Header>
        <Dropdown.Item href="#/action-1">Colors</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Borders</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Animations</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Other</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Utilities;
