import React, { useState } from "react";

const Data = ({ title, price, description, category, image, rating }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div
        style={{
          height: "600px",
          width: "400px",
          borderRadius: "10px",
          margin: "50px",
          padding: "40px",
          boxSizing: "border-box",
          boxShadow: "1px 1px 20px 1px #666666",
        }}
      >
        <div>
          <img
            src={image}
            style={{ height: "200px", width: "200px", borderRadius: "10px" }}
            alt="Product"
          />
          <h2>{title}</h2>
          <p>Description : {description}</p>
          <p>Price : ${price}</p>
          <p>Category : {category}</p>
          <p>
            Rating : {rating.rate} ({rating.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
