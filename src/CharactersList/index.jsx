import React, { useState, useEffect } from "react";
import { CharactersInfo } from "../CharactersInfo";
import { Slider } from "../Slider";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Slider>
        {characters.map((character) => (
          <div key={character.id}>
            <CharactersInfo characterId={character.id} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { CharactersList };
