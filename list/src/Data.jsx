import React, { useState } from "react";

const Data = ({ title, price, description, category, image, rating }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div
      style={{
        height: "600px",
        width: "400px",
        borderRadius: "20px",
        margin: "50px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        boxShadow: "1px 1px 20px 1px #666666",
      }}
    >
      <div>
        <img
          src={image}
          style={{ height: "200px", width: "200px" }}
          alt="Product"
        />
        <h2>{title}</h2>
        <p>
          Description :{" "}
          {showFullDescription ? description : truncatedDescription}{" "}
          {description.length > 100 && (
            <button
              onClick={toggleDescription}
              style={{
                color: "blue",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          )}
        </p>
        <p>Price : ${price}</p>
        <p>Category : {category}</p>
        <p>
          Rating : {rating.rate} ({rating.count} reviews)
        </p>
      </div>
    </div>
  );
};

export default Data;
