import React, { useState } from 'react'
export default function FoodSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <form action={`/food/${searchQuery}`}>
            <label htmlFor="foodSearch">Search for food:</label>
            <input autoComplete={false} type="text" id="foodSearch" value={searchQuery} onChange={handleChange} />
        </form>
    )
}