import React from "react"

const Taco = (props) => {
  return(
    <div>
      <h1>Taco Truck</h1>
      <h3>Taco: {props.taco.name}</h3>
      <p>${props.taco.price}</p>
      <p>{props.taco.about}</p>
      <a href = "/tacos">All Tacos</a>
      <a href = {`/tacos/${props.taco.id}/edit`}>Edit Taco</a>
      <a href = {`/tacos/${props.taco.id}`} data-method = "delete">Edit Taco</a>
    </div>
  );
};

export default Taco;