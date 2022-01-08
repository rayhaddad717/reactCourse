import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', email: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.username);
        this.setState({ username: '' })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="email" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange} />
                    <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.handleChange} />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
};
export default Form