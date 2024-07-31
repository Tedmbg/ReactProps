import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      link="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      contact="+123 456 789"
      email="b@yonce.com"
    />
    <Card
      name="Tyler joseph"
      link="https://nationaltoday.com/wp-content/uploads/2022/10/2-Tyler-Joseph-1200x834.jpg"
      contact="+123 456 780"
      email="tyler@21pilots.com"
    />
  </div>,
  document.getElementById("root")
);
