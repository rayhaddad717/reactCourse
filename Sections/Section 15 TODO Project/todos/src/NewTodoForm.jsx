import React, { Component } from 'react'
import './NewTodoForm.css'
class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    static defaultProps = {
        task: '',
        editTodo: false
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.task === "") { return; }
        this.props.submitForm(this.state);
        this.setState({
            task: ''
        })
    }
    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit} className=" todoForm">
                < label htmlFor="todo" > {this.props.editTodo ? '' : 'New Todo'}</label >
                <div className="form-inner-container">
                    <input type="text" placeholder="New Todo" id="todo" name="task" value={this.state.task} onChange={this.handleChange} />
                    <button className="submitButton">{this.props.editTodo ? 'Save' : 'Add TODO'}</button>
                </div>
            </form >
        )
    }
};
export default NewTodoForm;