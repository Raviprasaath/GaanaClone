import React from "react";

import { AiOutlinePlayCircle } from 'react-icons/ai'


export default function Testing(props) {
  return (
    <div className="carousel card">
      <AiOutlinePlayCircle className="play-icon"/>
      <img className="product-image" src={props.url} alt="product image" />
      <h4> {props.name} </h4>
    </div>
  );
}

