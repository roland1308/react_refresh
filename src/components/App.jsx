//import "./App.css";
import Header from "./Header";
import FunctionalComponent from "./FunctionalComponent";
import FunctionalComponent1 from "./FunctionalComponent1";
import ClassComponent from "./ClassComponent";
import React, { useState, useEffect } from "react";

function App() {
  const prop1String = "Soc un String";
  const propObject = {
    nom: "Iria",
    edad: 56,
  };

  const [punts, setPunts] = useState(10);
  var numAleatori = parseInt(Math.random() * 10);

  const [data, setData] = useState("");
  function fillAPare(dataDesdeElFill) {
    console.log("Els ingredients aportats para al fill son: ", dataDesdeElFill);
    setData(dataDesdeElFill);
  }

  return (
    <>
      <div className="bg-primary card">
        <Header />
      </div>
      <div>
        {/* Component funcional que comunica amb el component fill */}
        <FunctionalComponent
          prop1={prop1String}
          prop2="Text a foc"
          prop3={7}
          prop4={propObject}
        />
      </div>
      <div>
        {/* Component de clase que comunica amb el component fill */}
        <ClassComponent
          prop1={prop1String}
          prop2="Text a foc"
          prop3={7}
          prop4={propObject}
        />
      </div>
      <div>
        <p>Et queden {punts} punts</p>
        <button onClick={() => setPunts(punts - numAleatori)}>Fes click</button>
      </div>
      <div>
        {data}
        <FunctionalComponent1 fillAPare={fillAPare} />
      </div>
    </>
  );
}

export default App;
