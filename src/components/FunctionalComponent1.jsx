import React from "react";

const FunctionalComponent1 = ({fillAPare}) => {
  const data = "Ingredients de la pizza aportats per el fill";
  return (
    <>
      <h1>Sóc un cuiner fill</h1>
      <button onClick={()=>fillAPare(data)}>Transmetre dades el Pare</button>
    </>
  );
};

export default FunctionalComponent1;