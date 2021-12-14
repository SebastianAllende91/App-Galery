import { useEffect, useState } from "react";

const url = "https://api.unsplash.com";
const apikey = "client_id=y58sKWSoLQvEK931t_bDso8hxv7SwaxJSgCqU507UjM";

export const useFetch = () => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const peticion = async () => {
    let route = `${url}/photos/?page=${page}&per_page=30&${apikey}`;

    if (query !== "") {
      route = `${url}/search/photos?query=${query}&page=${page}&per_page=30&${apikey}`;
    }

    const res = await fetch(route);
    const data = await res.json();

    if (data.results) {
      setImagenes(data.results);
    } else {
      setImagenes(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    peticion();
  }, [query]);

  useEffect(() => {
    setLoading(true);
    peticion();
  }, [page]);

  const prev = () => {
    setPage(page - 1);
  };

  const next = () => {
    setPage(page + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };

  return [imagenes, loading, handleSubmit, page, prev, next];
};
