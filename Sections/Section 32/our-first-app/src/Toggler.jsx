import React, { useState } from 'react';
import useToggle from './Hooks/useToggle';
export default function Toggler() {
    // const [isHappy, setIsHappy] = useState(true);
    // const [isHeartBroken, setisHeartBroken] = useState(false);
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
    return (
        <div>
            <h1 onClick={() => toggleIsHappy()}>
                {isHappy ? '😀' : '🙁'}
            </h1>
            <h1 onClick={() => toggleIsHeartBroken()}>
                {isHeartBroken ? '♥' : '💔'}
            </h1>
        </div>
    )
}