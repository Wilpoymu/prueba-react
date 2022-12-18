import React from "react";
import "./CharactersInfo.css";

class CharactersInfo extends React.Component {
  state = {
    character: null,
    characterInfo: null
  };

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.props.characterId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ character: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleShowMoreClick = () => {
    fetch(
      `https://rickandmortyapi.com/api/character/${this.props.characterId}/`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characterInfo: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { character, characterInfo } = this.state;

    return (
      <div className="">
        {character && (
          <div className="info ">
            <img src={character.image} alt={character.name} />
            <div className="basicInfo">
              <h2>{character.id}</h2>
              <h2>{character.name}</h2>
              <button onClick={this.handleShowMoreClick} type="submit">
                Consultar
              </button>
            </div>
          </div>
        )}
        {characterInfo && (
          <div className="characterInfo">
            <div className="characterInfoElement">
              <h3>Género:</h3>
              <p>{characterInfo.gender}</p>
            </div>
            <div className="characterInfoElement">
              <h3>Especie:</h3>
              <p>{characterInfo.species}</p>
            </div>
            <div className="characterInfoElement">
              <h3>Origen:</h3>
              <p>{characterInfo.origin.name}</p>
            </div>
            <div className="characterInfoElement">
              <h3>Ubicación:</h3>
              <p>{characterInfo.location.name}</p>
            </div>
            <div className="characterInfoElement">
              <h3>Episodios:</h3>
              <p>{characterInfo.episode.length}</p>
            </div>
            <div className="characterInfoElement">
              <h3>Estado:</h3>
              <p>{characterInfo.status}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export { CharactersInfo };
