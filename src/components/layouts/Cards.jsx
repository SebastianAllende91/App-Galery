import React from "react";
import FormSearch from "./FormSearch";
import CardItem from "./CardItem";
import Progress from "./utils/Progress";
import { useFetch } from "../../hooks/useFetch";
import Alert from "./utils/Alert";
import Buttons from "./utils/Buttons";

const Cards = () => {
  const [imagenes, loading, handleSubmit, page, prev, next] = useFetch();

  // console.log(imagenes);

  return (
    <div className="my-2">
      <FormSearch handleSubmit={handleSubmit} />
      {!loading && <Buttons page={page} prev={prev} next={next} />}
      {imagenes.length === 0 && <Alert />}
      {loading && <Progress />}
      <div aria-label="imagenes" className="row my-2">
        {imagenes.map((element) => (
          <div
            className="col "
            key={element.id}
            style={{ width: "400px", height: "400px" }}
          >
            <CardItem el={element} />
          </div>
        ))}
      </div>
      {!loading && <Buttons page={page} prev={prev} next={next} />}
    </div>
  );
};

export default Cards;
