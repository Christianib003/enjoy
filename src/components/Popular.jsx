import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Popular() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
      );
      const data = await api.json();
      setPopular(data.recipes);
    };
    getPopular();
  }, []);

  return (
    <div>
      {popular.map((recipe) => (
        <Wrapper key={recipe.id}>
          <Card>
            <p>{recipe.title}</p>
            <img
              src={recipe.image}
              alt={recipe.title}
            />
          </Card>
        </Wrapper>
      ))}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Popular;
