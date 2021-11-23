import React from "react"

const Tacos = (props) => {
  const renderTacos = () => {
    return (props.tacos.map((taco)=> {
      return(
        <div>
          <h3>{taco.name}</h3>
          <p>${taco.price}</p>
          <p>{taco.about}</p>
          <a href = {`/tacos/${taco.id}`}>View Taco</a>
          <a href = {`/tacos/${taco.id}/edit`}>Edit Taco</a>
          <a href = {`/tacos/${taco.id}`} data-method = "delete">Delete Taco</a>
        </div>
      )
    }))
  };
  return(
    <div>
      <h1>Taco Truck:</h1>
      <a href = "/tacos/new">Create a Taco</a>
      {renderTacos()}
    </div>
  );
};

export default Tacos;