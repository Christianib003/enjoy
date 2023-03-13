import React, { useEffect, useState } from 'react';

function Popular() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
        </div>
      ))}
      ;
    </div>
  );
}

export default Popular;
