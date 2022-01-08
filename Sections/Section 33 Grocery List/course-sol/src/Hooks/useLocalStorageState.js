import { useState, useEffect } from 'react';
//if no item was found in local storage under this key make defaultvalue the value 
export default function useLocalStorageState(key, defaultValue) {
    //make piece of state, based off of value in local storage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
        } catch (e) {
            val = defaultValue;
        }
        return val;
    });
    //use useEffect to update localStorage
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state]);
    return [state, setState];

}