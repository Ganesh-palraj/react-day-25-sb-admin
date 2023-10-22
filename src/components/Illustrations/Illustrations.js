import React from "react";
import "../../App.css";
import "./Illustrations.css";

const Illustrations = () => {
  return (
    <div>
      <img
        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
        alt="Illustrations-card"
        style={{ width: "400px" }}
      />
      <p>
        Add some quality, svg illustrations to your project courtest of
        <a href="index.html">unDraw</a>, a constantly updated collection of
        beautiful svg images that can use completely free and without
        attribution!
      </p>
      <div>
        <a href="index.html">Browse Illustrations on unDraw</a>
      </div>
    </div>
  );
};

export default Illustrations;
