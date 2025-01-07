import React, { useState } from "react";

const List = () => {
  const [data, setData] = useState({
    Img: "",
    ListName: "",
    Price: "",
    isCompleted: false,
  });
  const [list, setList] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, { ...data, id: Date.now() }]);
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="Img"
          placeholder="Image URL"
          onChange={handleInput}
          style={{ margin: "10px", height: "30px" }}
        />
        <input
          type="text"
          name="ListName"
          placeholder="Name"
          onChange={handleInput}
          style={{ margin: "10px", height: "30px" }}
        />
        <input
          type="number"
          name="Price"
          placeholder="Price"
          onChange={handleInput}
          style={{ margin: "10px", height: "30px" }}
        />
        <button type="submit" style={{ margin: "5px" }}>
          Add
        </button>
      </form>
      <hr />
      {list.map(({ Img, ListName, Price, isCompleted, id }) => (
        <div
          key={id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "20px",
          }}
        >
          <img
            src={Img}
            alt={ListName}
            style={{
              width: "300px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <p>List : {ListName}</p>
          <p>Price : ${Price}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
