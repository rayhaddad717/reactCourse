import React, { useEffect, useState } from 'react';
export default function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        alert('clicked')
    })
    return (
        <button onClick={() => setCount(count + 1)}>You clicked me {count} times</button>
    )
}