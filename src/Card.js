import React from "react";

function Card(props) {
  const img = {
    height: "100px",
    width: "100px",
  };
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.link} alt="avatar_img" style={img} />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
