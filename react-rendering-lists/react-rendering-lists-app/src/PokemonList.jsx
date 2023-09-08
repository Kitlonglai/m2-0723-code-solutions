import React from 'react';

export default function PokemonList({ pokedex }) {
  const listItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
