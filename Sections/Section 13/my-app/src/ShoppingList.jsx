import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';
class ShoppingList extends Component {
    static defaultProps = {
        items: [{ name: 'unica', qty: 4, id: uuidv4() }, { name: 'sneakers', qty: 2, id: uuidv4() }]
    }
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
        this.addItem = this.addItem.bind(this);
    };
    //this function will be passed down to the form component as a prop
    addItem(item) {
        item = { ...item, id: uuidv4() }
        this.setState(oldState =>
            ({ items: [...oldState.items, item] }));
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => <li key={item.id}>{item.name} -{item.qty} </li>)}
                </ul>
                <ShoppingListForm addItem={this.addItem} />
            </div>
        )
    }
};
export default ShoppingList