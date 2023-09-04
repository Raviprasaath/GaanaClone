import React from "react";

export default function Testing(props) {
  return (
    <div className="carousel card">
      <img className="product-image" src={props.url} alt="product image" />
      <h4>Song</h4>
    </div>
  );
}

