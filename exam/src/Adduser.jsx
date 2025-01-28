import React, { useState } from "react";
import ApiLink from "./config/Api"; 

const Adduser = () => {
  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuserdata({ ...userdata, [name]: value });
  };

  const createpost = async (userdata) => {
    try {
      const res = await ApiLink.post("/Studentdata", userdata);
      console.log(res.data);
      setuserdata({ name: "", email: "", phone: "", password: "" });
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createpost(userdata);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={userdata.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={userdata.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter Phone"
          name="phone"
          value={userdata.phone}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={userdata.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;
