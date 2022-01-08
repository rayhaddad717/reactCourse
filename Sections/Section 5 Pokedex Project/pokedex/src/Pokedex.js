import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'
class Pokedex extends Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div className="Pokedex">
                {pokemons.map(pokemon => (
                    <Pokecard name={pokemon.name} id={pokemon.id} type={pokemon.type} base_experience={pokemon.base_experience} />
                )
                )}
            </div>
        )
    }
}
export default Pokedex;