import React from "react";
import { useParams } from "react-router-dom";
import RefugiosJson from "../assets/refugios.json";
import "./Refugi.css";

const Refugis = () => {
  let fichaRefu;
  const { id } = useParams();
  const refugios = RefugiosJson;
  const listRefugis = refugios.map((refugio) => (
    <li key={refugio.refugio_id.toString()}>
      <a href={`/refugis/${refugio.slug}`}>Refugi {`${refugio.name}`}</a>
    </li>
  ));

  // filter Json for ID (slug)
  const refugiTrobat =
    refugios.filter((refugio) => refugio.slug === id)[0] || {};

    // renderizat condicional

    if(id) {
      fichaRefu=<span>
        <p>Nom: {refugiTrobat.name}</p>
        <p>Latitud: {refugiTrobat.latitude}</p>
        <p>Longitud: {refugiTrobat.longitude}</p>
        <p>Alcada sobre el mar: {refugiTrobat.altitude}</p>
        <p>Ciutat: {refugiTrobat.locality}</p>
        <p>Provincia: {refugiTrobat.provincia}</p>
        <p>Pais: {refugiTrobat.country}</p>
        <p>Places: {refugiTrobat.capacity}</p>
      </span>
    } else {
      fichaRefu=<p>Tens que escullir un refugi per a poder visualitzar.</p>
    }

  return (
    <>
      <h1>Llistat de Refugis</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <ul>{listRefugis}</ul>
            </td>
            <td className="fichaRefugi bg-primary card p-3">
              <h2>El refugi seleccionat</h2>
              {fichaRefu}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Refugis;
