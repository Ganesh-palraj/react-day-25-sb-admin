import React from "react";
import AllLineCharts from "./AllLineCharts";
import Piechart from "./Piechart";

function TotalCharts() {
  return (
    <div className="row mt-2 charts-row">
      <div className="col-xl-8 col-lg-5">
        <div className="card Chart-card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Earnings overview
            </h6>
          </div>
          <div className="card-body line-chart">
            <AllLineCharts />
          </div>
        </div>
      </div>

      <div className="col-xl-8 col-lg-4">
        <div className="card Chart-card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Earnings overview
            </h6>
          </div>
          <div className="card-body line-chart">
              <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalCharts;
