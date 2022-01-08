import React, { Component } from 'react'
import Pokedex from './Pokedex';
import Result from './Result'
const pokemons = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },

    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },

    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },

    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },

    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },

    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];
const getRnd = () => {
    return Math.floor(Math.random() * 8);
};
const getRndArray = (arr) => {
    const a = [];
    for (let i = 0; i < 4; i++) {
        a.push(arr[getRnd()])
    };
    return a;
};
const getBaseExperience = (arr) => {

    return arr.reduce((prev, current) => prev = prev + current.base_experience, 0);
}
const getWinner = (arr1, arr2) => {
    if (getBaseExperience(arr1) > getBaseExperience(arr2)) { return true; }
    else { return false; }
}
class Pokegame extends Component {
    render() {
        const pokedex1 = getRndArray(pokemons);
        const pokedex2 = getRndArray(pokemons);
        const result = getWinner(pokedex1, pokedex2);
        return (
            <div>
                <Result result={result} base_experience={getBaseExperience(pokedex1)} />
                <Pokedex pokemons={pokedex1} />
                <Result result={!result} base_experience={getBaseExperience(pokedex2)} />
                <Pokedex pokemons={pokedex2} />
            </div>
        )
    }
}
export default Pokegame;