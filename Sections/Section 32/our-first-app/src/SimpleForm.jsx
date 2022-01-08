import React, { useState } from 'react';
import useInputState from './Hooks/useInputState';
export default function SimpleForm() {
    const [email, updateEmail, resetEmail] = useInputState('');
    const [password, updatePassword, resetPassword] = useInputState('');
    return (
        <div>
            <h1>The value is {email}</h1>
            <input type="text" name="" id="" value={email} onChange={updateEmail} />
            <button onClick={resetEmail}>Reset</button>
            <div>
                <label htmlFor="password">Enter your password</label>
                <input type="text" name="" id="password" value={password} onChange={updatePassword} />
            </div>
        </div>
    )
}