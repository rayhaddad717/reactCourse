import React, { useState } from 'react';
import GroceryList from './GroceryList';
import { v4 as uuidv4 } from 'uuid';
export default function GroceryListApp() {
    const [items, setItems] = useState([{ itemName: 'labneh', isChecked: false, id: uuidv4() }]);
    const addItem = (newGroceryItemName) => {
        setItems([...items, { itemName: newGroceryItemName, isChecked: false, id: uuidv4() }]);
    };
    const toggleChecked = (itemId) => {
        setItems(
            items.map((item) => {
                return item.id === itemId ? { ...item, isChecked: !item.isChecked } : item;
            })
        )
    };
    const deleteItem = (itemId) => {
        setItems(
            items.filter(item => {
                return item.id !== itemId
            })
        )
    }
    return (
        <div className="GroceryListApp">
            <GroceryList items={items} addItem={addItem} toggleChecked={toggleChecked} deleteItem={deleteItem} />
        </div>
    )
}