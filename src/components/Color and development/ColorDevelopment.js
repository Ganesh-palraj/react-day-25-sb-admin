import React from 'react';
import AllColors from './AllColors';
import Development from './Development';
import Row from "react-bootstrap/Row";
import "../../App.css";


const ColorDevelopment = () => {
  return (
    <div>
        <Row>
      <div className="col-lg-6 mb-4">
        <AllColors/>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card projects-card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div className="card-body">
            <Development />
          </div>
        </div>
      </div>
    </Row>
    </div>
  )
}

export default ColorDevelopment