import React from "react";
import Card from "react-bootstrap/Card";

const AllColors = () => {
  const colorsData = [
    {
      Id: 1,
      Name: "Primary",
      colorName: "primary",
      ColorCode: "#4e73df",
    },

    {
      Id: 2,
      Name: "Success",
      colorName: "success",

      ColorCode: "#1cc88a",
    },
    {
      Id: 3,
      Name: "Info",
      colorName: "info",

      ColorCode: "#36b9cc",
    },
    {
      Id: 4,
      Name: "Warning",
      colorName: "warning",
      ColorCode: "#f6c23e",
    },

    {
      Id: 5,
      Name: "Danger",
      colorName: "danger",
      ColorCode: "#e74a3b",
    },
    {
      Id: 6,
      Name: "Secondary",
      colorName: "secondary",
      ColorCode: "#858796",
    },
    {
      Id: 7,
      Name: "Light",
      colorName: "light",
      ColorCode: "#f8f9fc",
    },
    {
      Id: 8,
      Name: "Dark",
      colorName: "dark",
      ColorCode: "#5a5c69",
    },
  ];
  return (
    <div className="row">
      {colorsData.map((value, Id) => (
        <div className=" col-md-12 col-lg-6 g-3" key={value.Id}>
          <Card
            className="card colors-card p-3"
            bg={value.colorName}
            key={value.Name}
            text={value.Name === "Light" ? "dark" : "light"}
          >
            <div className="card-name">{value.Name}</div>

            <div className="color-code">{value.ColorCode}</div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AllColors;
