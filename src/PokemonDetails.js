import React, { Component } from 'react'

export default class PokemonDetails extends Component {
  render() {
    const { pokemons } = this.props;
    const { pokemonId } = this.props.match.params;
    const findPokemon = pokemons.find((pokemon) => pokemon.id === parseInt(pokemonId));
    const { name, type, averageWeight, image, summary, foundAt } = findPokemon;
    return (
      <div className="pokemon">
        <div>
          <img src={image} alt={`${name} sprite`} />
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>{summary}</p>
          {foundAt.map(({ location, map }, index) => 
          <>
          <p>{ location }</p>
          <img src={ map } key={ index } alt={ `${name}` }/>
          </> )}
          <br />
          <br />
          <label htmlFor="favorite">
            Favoritar pokemon
          <input 
          type="checkbox"
          name="favorite"
          />
          </label>
        </div>
      </div>
    )
  }
}
