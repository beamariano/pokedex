// imports
import PokemonData from "../components/data/pokemon.json";
import PokemonTypes from "../components/data/PokemonTypes.json";

const initialState = {
  pokemons: PokemonData,
  pokemonTypes: PokemonTypes,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
