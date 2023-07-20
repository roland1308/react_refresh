import React, { useState, useEffect } from "react";

const Rutes = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://scratchya.com.ar/react/datos.php")
      .then((response) => {
        return response.json();
      })
      .then((articles) => {
        setArticles(articles);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Códig</th>
            <th>Descripció</th>
            <th>Preu</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return (
              <tr key={article.codigo.toString()}>
                <td>{article.codigo}</td>
                <td>{article.descripcion}</td>
                <td>{article.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rutes;
