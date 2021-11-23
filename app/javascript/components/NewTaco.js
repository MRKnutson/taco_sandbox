import React from "react"

const NewTaco = () => {
  return(
    <div>
      <h1>Taco Truck</h1>
      <h3>New Taco Form:</h3>
      <form action = "/tacos" method = "post">
        <p>Name:</p>
        <input name = "taco[name]" />
        <p>Price:</p>
        <input name = "taco[price]" />
        <p>About:</p>
        <textarea name = "taco[about]" />
        <button type = "submit">Create New Taco</button>
      </form>
      <a href = "/tacos">Taco List</a>
    </div>
  );
};

export default NewTaco