import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import "../App.css";
import Illustrations from "./Illustrations/Illustrations";

function Projects() {
  const ProjectData = [
    {
      Id: 1,
      name: "Server Migration",
      color: "danger",
      percentage: "20",
    },
    {
      Id: 2,
      name: "Sales Tracking",
      color: "warning",
      percentage: "40",
    },
    {
      Id: 3,
      name: "Customer Database",
      color: "primary",
      percentage: "60",
    },
    {
      Id: 4,
      name: "Payout Details",
      color: "info",
      percentage: "80",
    },
    {
      Id: 5,
      name: "Account Setup",
      color: "success",
      percentage: "100",
    },
  ];

  return (
    <Row>
      <div className="col-lg-6 mb-4">
        <div className="card projects-card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
          </div>
          <div className="card-body">
            {ProjectData.map((data) => (
              <>
                <div className="row project-heading">
                  <span>
                    <div>{data.name}</div>
                    <div>{data.percentage}</div>
                  </span>
                </div>
                <div className="row">
                  <ProgressBar now={data.percentage} variant={data.color} />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card projects-card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
          </div>
          <div className="card-body">
            <Illustrations />
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Projects;
