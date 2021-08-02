import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onsubmitForm = () => {
    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Input Todo</h1>
      <form className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
