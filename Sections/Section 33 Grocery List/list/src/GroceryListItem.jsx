import React from 'react';
export default function GroceryListItem(props) {
    return (
        <li className="GroceryListItem">
            <span className="GroceryListItem-changeCheck" onClick={() => props.toggleChecked(props.item.id)}>toggle</span>
            <span onClick={() => props.deleteItem(props.item.id)}>Delete me</span>
            <span>{props.item.itemName}</span>
            <span>{props.item.isChecked.toString()}</span>

        </li>
    )
}