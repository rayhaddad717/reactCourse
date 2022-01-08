import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function SWMovies() {
    const [number, setNumber] = useState(1);
    const [joke, setJoke] = useState('');
    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
            console.log(response.data.joke);
            setJoke(response.data.joke);
        }
        getData();

    }, [number])
    return (
        <div>
            <h1>Pick a movie</h1>
            <select value={number} onChange={(e) => setNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <h4>You chose {number}</h4>
            <p>Joke:{joke}</p>
        </div>
    )
}