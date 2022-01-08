import React, { Component } from 'react';
import './Pokecard.css'
const getImgSource = (id) => {
    if (Math.floor(id / 10) === 0) {
        return "00" + (id).toString();
    } else if (Math.floor(id / 100) === 0) {
        return "0" + (id).toString();
    } else {
        return (id).toString();
    }
}
class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props;
        const imgSource = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getImgSource(id)}.png`;
        return (
            <div className="pokecard_container">
                <h4 className="pokecard_title">
                    {name}
                </h4>
                <div className="pokecard_image_container">
                    <img className="pokecard_image" src={imgSource} alt="" />
                </div>
                <div className="pokecard_type">Type: {type}</div>
                <div className="pokecard_exp">EXP: {base_experience}</div>
            </div>
        )
    }
};
export default Pokecard
