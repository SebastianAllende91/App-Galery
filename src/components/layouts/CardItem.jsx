import React from "react";
import PropTypes from "prop-types";

const CardItem = ({ el }) => {
  const { urls, likes } = el;

  return (
    <div className="card m-2" style={{ width: "300px", height: "300px" }}>
      <img
        src={urls.regular}
        className="card-img-top"
        alt="imagen.png"
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <p className="text-center">
          <b>Likes: </b>
          <ion-icon name="heart-outline"></ion-icon>
          {likes}
        </p>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  el: PropTypes.object,
};

export default CardItem;
