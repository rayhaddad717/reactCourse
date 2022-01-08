import React, { Component } from 'react'
class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            qty: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //function to always update the state after each change in the input values
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {  //function to submit the form
        e.preventDefault(); //the default behavior of the form will refresh the page
        const newItem = { name: this.state.item, qty: this.state.qty };
        this.props.addItem(newItem); //call the parents function to add a new item
        this.setState({ item: '', qty: 0 })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="item" name="item" placeholder="new item" value={this.state.item} onChange={this.handleChange} />
                <label htmlFor="item">Item Name</label>
                <input type="number" id="qty" name="qty" placeholder="1" value={this.state.qty} onChange={this.handleChange} />
                <label htmlFor="qty">Quantity you want</label>
                <button>Add Item</button>
            </form>
        )
    }
};
export default ShoppingListForm;