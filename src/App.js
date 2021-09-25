import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import PokemonBox from "./components/PokemonBox";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const pokemonList = useSelector((state) => state.pokemons);
  const [selectedType, setType] = useState("All_Types");

  const onClickDisplayChosenType = (type) => {
    console.log(type, "selected as type");
    setType(type);
  };

  const onTypeClickHandler = (e) => {
    onClickDisplayChosenType(e.target.textContent);
  };

  let showItems = pokemonList.filter((item) => {
    if (selectedType === "All_Types") {
      return item;
    }
    if (item.types.includes(selectedType)) {
      return item;
    }
  });

  return (
    <div className="App">
      <Navbar bg="light" sticky="top">
        <Link to="/">
          <h1 className="title">Pokedex</h1>
        </Link>
        <div className="top-container">
          <div className="type-container">
            {pokemonTypes.map((props) => (
              <button
                className="type-btn"
                value={props.type}
                id={props.type}
                onClick={(e) => onTypeClickHandler(e)}
              >
                {props.type}
              </button>
            ))}
          </div>
        </div>
      </Navbar>

      <Route exact path="/">
        <div className="main-container">
          <div className="pokemon-display">
            <div className="pokemon-box-container">
              {showItems.length == 0 ? (
                <div className="empty-display">
                  <p>That's weird... No Pokemons found!</p>
                </div>
              ) : (
                showItems.map((pokemon) => (
                  <PokemonBox
                    id={pokemon.ntnlnum}
                    name={pokemon.name}
                    types={pokemon.types.join(" / ")}
                    image={pokemon.image}
                    description={pokemon.description}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </Route>
    </div>
  );
};

export default App;
