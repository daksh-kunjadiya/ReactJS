import React, { useState, useEffect } from "react";
import Usercard from "./Usercard";
import ApiLink from "./config/Api";

const Getuser = () => {
  const [data, setdata] = useState([]);

  const getdata = async () => {
    try {
      const res = await ApiLink.get("/Student");
      console.log(res.data);
      setdata(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const deletedata = async (id) => {
    try {
      await ApiLink.delete(`/Student/${id}`);
      getdata();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <h2>USER LIST</h2>
      <div>
        {data.map((user) => (
          <Usercard key={user.id} {...user} ondelete={deletedata} />
        ))}
      </div>
    </div>
  );
};

export default Getuser;
