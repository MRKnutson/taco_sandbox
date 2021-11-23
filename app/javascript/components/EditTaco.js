import React from "react"

const EditTaco = (props) => {
  return(
    <div>
      <h1>Taco Truck</h1>
      <h3>Edit Taco: {props.taco.name}</h3>
      <form action = {`/tacos/${props.taco.id}`} method = "post">
        <input type="hidden" name = "_method" value = "patch" />
        <p>Name:</p>
        <input name = "taco[name]" defaultValue = {props.taco.name} />
        <p>Price:</p>
        <input name = "taco[price]" defaultValue = {props.taco.price} />
        <p>About:</p>
        <textarea name = "taco[about]" defaultValue = {props.taco.about} />
        <button type= "submit">Submit Changes</button>
      </form>
    </div>
  );
};


export default EditTaco