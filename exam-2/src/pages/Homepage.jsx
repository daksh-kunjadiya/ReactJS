import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };
  return (
    <div className="container">
      <div className="row mt-5">
        {data.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column shadow p-5">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "300px", overflow: "hidden" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    maxHeight: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-2">{product.title}</h5>
                <p className="card-text flex-grow-1">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {renderStars(product.rating.rate)} (
                  {product.rating.count} reviews)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
