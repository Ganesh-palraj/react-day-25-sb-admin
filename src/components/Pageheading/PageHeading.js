import React from "react";
import { FaDownload} from "react-icons/fa";
import './PageHeading.css';

function PageHeading() {
  return (
    <div className="heading-container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="www.google.com"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <span className=" fa-sm text-white-50">
          <FaDownload/></span> Generate Report
        </a>
      </div>
    </div>
  );
}

export default PageHeading;
