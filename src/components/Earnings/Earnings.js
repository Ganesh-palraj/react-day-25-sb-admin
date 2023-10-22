import React from "react";
import { FaCalendar } from "react-icons/fa";
// import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import '../../App.css';
import './Earnings.css';

function Earnings() {
  const EarningsData = [
    {
      Title: "EARNINGS (MONTHLY)",
      Amount: "40,000",
      Icon: <FaCalendar />,
      color:'#4e73df',
      Id: "1",
    },
    {
      Title: "EARNINGS (ANNUAL)",
      Amount: "215,000",
      Icon: <FaCalendar />,
      color:'#1CC88A',
      Id: "2",
    },
    {
      Title: "TASKS",
      Amount: "50%",
      Icon: <FaCalendar />,
      color:'#42BDCF',
      Id: "3",
    },
    {
      Title: "PENDING REQUESTS",
      Amount: "18",
      Icon: <FaCalendar/>,
      color:'#F6C23E',
      Id: "4",
    },
  ];
  return (
    <Row>
      {EarningsData.map((value) => (
        <>
          <div className="col-xl-3 col-md-4 mb-4">
            <div
              className=" d-flex card earnings-card border-left-{value.color} shadow h-100 py-1"
              
              key={value.Id}
            >
              <div className="card-body">
                <div className="row no-gutters align-items-center d-flex">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"
                    >
                      {value.Title}
                    </div>
                    <div className=" col h5 mb-0 font-weight-bold text-gray-800">
                      {value.Amount}
                      {value.Icon}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </Row>
  );
}

export default Earnings;
