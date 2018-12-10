import React from "react";

const AddName = ({ handleNameChange, handleSubmitName, nameValue }) => {
  return (
    <div className="input-group mb-3 container w-50">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Name..."
        onChange={handleNameChange}
        value={nameValue}
        required
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSubmitName}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default AddName;
