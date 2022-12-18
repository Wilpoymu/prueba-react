import React from "react";
import "./App.css";
import { CharactersList } from "../CharactersList";

function App() {
  return (
    <>
      <div className="characters">
        <h1>Personajes de Rick & Morty</h1>
        <CharactersList />
        <div className="space"></div>
      </div>
    </>
  );
}

export default App;
