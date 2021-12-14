import React from "react";

const Buttons = ({ page, prev, next }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div class="col">
          {page > 1 && (
            <button className="btn btn-success m-2 " onClick={prev}>
              prev
            </button>
          )}

          <button className="btn btn-success m-2 " onClick={next}>
            next
          </button>
          <p className="text-center text-decoration-underline fw-bold">
            Page {page}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
