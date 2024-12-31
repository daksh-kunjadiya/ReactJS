import React, { useState } from "react";

const UserProfileCard = ({
  name,
  age,
  bio,
  location,
  img,
  initialFollowed = false,
}) => {
  const [isFollowed, setIsFollowed] = useState(initialFollowed);
  const [showFullBio, setShowFullBio] = useState(false);
  const toggleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };
  const truncatedBio = bio.length > 100 ? `${bio.substring(0, 100)}...` : bio;
  return (
    <div
      style={{
        height: "500px",
        width: "300px",
        borderRadius: "10px",
        margin: "50px",
        padding: "40px",
        boxSizing: "border-box",
        boxShadow: "1px 1px 20px 1px #666666",
      }}
    >
      <div>
        <img
          src={img}
          style={{ height: "100px", width: "100px", borderRadius: "50%" }}
          alt="Profile"
        />
        <h2>{name}</h2>
        <p>
          Bio : {showFullBio ? bio : truncatedBio}{" "}
          {bio.length > 100 && (
            <button
              onClick={toggleBio}
              style={{
                color: "blue",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showFullBio ? "Read less" : "Read more"}
            </button>
          )}
        </p>
        <p>Age : {age}</p>
        <p>Location : {location}</p>
      </div>
      <div>
        <button
          onClick={toggleFollow}
          style={{
            padding: "10px 15px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
