import React from "react";
import { CharactersInfo } from "../CharactersInfo";
import { Slider } from "../Slider";

class CharactersList extends React.Component {
  state = {
    characters: []
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data.results });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { characters } = this.state;

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
  }
}

export { CharactersList };
