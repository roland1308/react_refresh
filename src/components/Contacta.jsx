import React, { useState, useEffect } from "react";

const Contacta = () => {
  const [values, setValues] = useState({});
  const [validations, setValidations] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateAll();
    if(!isValid) {
      return false;
    }
    alert(JSON.stringify(values));
  }

  const {name} = values;
  const {name: nameVal} = validations;

  //validations
  const validateAll = () => {
    const { name } = values;
    const validations = { name: "" };
    let isValid = true;
    if (!isValid) {
      setValidations(validations);
    }
    return isValid;
  };
  const validationOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";
    if (!value) {
      message = `El campo ${name} no puede estar vacio`;
    }
    if ((value && name === "name" && value.length < 3) || value.length > 50) {
      message = `El campo ${name} debe tener entre 3 y 50 caracteres`;
    }
    setValidations({...validations, [name]: message});
  };

  return (
    <div>
      <h1>Contacta amb nosaltres</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom:
            <input type="text" name="name" value={name} onChange={handleChange} onBlur={validationOne} />
          </label>
          <div>{nameVal}</div>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Valors enviats</h2>
        <p>{JSON.stringify(values)}</p>
      </div>
    </div>
  );
};

export default Contacta;
