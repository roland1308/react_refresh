import React from "react";
import { useParams } from "react-router-dom";

const Refugis = () => {
  console.log("Mostrem als parameters: ", useParams());
  const {id} = useParams();
  console.log("id: ", id);
  return <h1>Refugis</h1>;
};

export default Refugis;
