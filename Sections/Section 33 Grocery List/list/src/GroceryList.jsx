import React from 'react';
import GroceryListForm from './GroceryListForm';
import GroceryListItem from './GroceryListItem';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';

export default function GroceryList(props) {
    const items = props.items.map(item => <GroceryListItem item={item} key={item.id} toggleChecked={props.toggleChecked} deleteItem={props.deleteItem} />)
    return (
        <div className="GroceryList">
            <ul className="GroceryListItems">
                {items}
            </ul>
            < GroceryListForm addItem={props.addItem} />
        </div>
    )
}