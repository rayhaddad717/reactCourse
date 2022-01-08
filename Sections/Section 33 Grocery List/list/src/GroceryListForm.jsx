import React, { useState } from 'react';
// import AddIcon from '@mui/icons-material/Add';
export default function GroceryListForm(props) {
    const [newGroceryItemName, setNewGroceryItemName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(newGroceryItemName);
        setNewGroceryItemName('');
    }
    const handleChange = (e) => {
        setNewGroceryItemName(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newItemName">New Item Name</label>
            <input autocomplete="off" type="text" id="newItemName" placeholder="new item ..." onChange={handleChange} value={newGroceryItemName} />
            <button type="submit">Add new item</button>
        </form>
    )
}