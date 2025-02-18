import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const filteredData = res.data.filter(
        (product) =>
          product.category === "men's clothing" ||
          product.category === "women's clothing"
      );

      filteredData.splice(0, 1);
      filteredData.splice(6, 1);

      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderStar = (rating) => {
    const fullStar = "⭐";
    return fullStar.repeat(rating);
  };

  return (
    <div>
      <div>
        <img
          src="https://marketplace.canva.com/EAFWecuevFk/1/0/1600w/canva-grey-brown-minimalist-summer-season-collections-banner-landscape-VXEmg9V800o.jpg"
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <h1 className="text-center mt-5">
        DISCOVER OUR ONLINE EXCLUSIVE COLLECTIONS
      </h1>
      <p className="text-center opacity-50">
        Elevate Your Style: Shop the Freshest Styles from our Online Exclusive
        Collections
      </p>
      <div className="container">
        <div className="row mt-5">
          {data.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
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
                    <strong>Rating:</strong> {renderStar(product.rating.rate)} (
                    {product.rating.count} reviews)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "420px",
            height: "80px",
            padding: "20px 0 0 0",
            backgroundColor: "#0e3051",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              border: "none",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            VIEW ALL PRODUCT
          </p>
        </div>
      </div>
      <footer
        className="footer"
        style={{ boxSizing: "border-box", marginBottom: "10px" }}
      >
        <section
          className="services"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            textAlign: "center",
            alignItems: "center",
            color: "#0e3051",
            fontSize: "12px",
          }}
        >
          <div>
            <img
              src="https://media.istockphoto.com/id/1309243817/vector/fast-delivery-truck-with-motion-lines-online-delivery-express-delivery-quick-move-fast.jpg?s=612x612&w=0&k=20&c=l2JlE6VQ4uRS6jABMS558puDgTyhEJW0bSiPhbBgXMc="
              alt=""
              style={{ height: "100%", width: "100px" }}
            />
            <p>FREE SHIPPING</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ height: "100%", width: "100px" }}
            />
            <p>RETURN WITHIN 15 DAYS</p>
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ height: "100%", width: "100px" }}
            />
            <p>EXPRESS DELIVERY IN STORE MODE</p>
          </div>
        </section>
        <br />
        <hr />
        <br />
        <section
          className="footer-info"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "100px",
            marginBottom: "10px",
          }}
        >
          <div
            className="footer-text"
            style={{ padding: "0 0 10px 0", opacity: ".5", fontSize: "12px" }}
          >
            <p className="bold" style={{ fontWeight: "700", fontSize: "12px" }}>
              NEED HELP?
            </p>
            <p className="lite">Delivery</p>
            <p className="lite">Order Status</p>
            <p className="lite">Returns </p>
            <p className="lite">FAQs </p>
            <p className="lite">Shipping Policy </p>
            <p className="lite">Return And Cancellation Policy</p>
            <p className="lite">Contact Us</p>
          </div>
          <div
            className="footer-text"
            style={{ padding: "0 0 10px 0", opacity: ".5", fontSize: "12px" }}
          >
            <p className="bold" style={{ fontWeight: "700", fontSize: "12px" }}>
              ABOUT US
            </p>
            <p className="lite">Aditya Birla Fashion & Retail Ltd</p>
            <p className="lite">Find A Store</p>
            <p className="lite">Allen Solly Blogs</p>
            <p className="lite">Terms And Conditions For</p>
            <p className="lite">Membership Program</p>
            <p className="lite">Bulk Order</p>
          </div>
          <div>
            <div
              className="foot-contact"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                marginBottom: "25px",
              }}
            >
              <p
                className="bold"
                style={{ fontWeight: "700", fontSize: "12px" }}
              >
                JOIN ALLEN SOLLY COMMUNITY
              </p>
            </div>
            <div
              className="foot-contact"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                marginBottom: "25px",
              }}
            >
              <p
                className="bold"
                style={{ fontWeight: "700", fontSize: "12px" }}
              >
                FIND US ON SOCIAL
              </p>
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-linkedin" />
            </div>
          </div>
        </section>
        <hr />
        <p className="Policy" style={{ padding: "20px 0" }}>
          Privacy PolicyTerms & Conditions of Use © 2023 Madura Fashion &
          Lifestyle, A Division of Aditya Birla Fashion & Retail Limited. All
          Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
