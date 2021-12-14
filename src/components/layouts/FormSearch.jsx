import React from "react";

const FormSearch = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="w-100" style={{ fontSize: "20px" }}>
          Search: <input className="me-3" type="text" name="inputText" />
          <button
            type="submit"
            className="btn btn-warning"
            style={{ height: "31px" }}
          >
            <ion-icon name="search"></ion-icon>
          </button>
        </label>
      </form>
    </div>
  );
};

export default FormSearch;
