import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addNewTask = this.addNewTask.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTask = this.editTask.bind(this);
    };
    addNewTask(task) {
        const newTask = { ...task, id: uuidv4() }
        const newTodos = [...this.state.todos, newTask];
        this.setState({ todos: newTodos });
    };
    removeTodo = (id) => {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: newTodos });
    };
    editTask(newTask, id) {
        const newTodos = [...this.state.todos];
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.task = newTask;
            }
        });
        this.setState({ todos: newTodos });
    }
    render() {
        const todos = this.state.todos.map(todo => (<Todo editTask={this.editTask} task={todo.task} key={todo.id} id={todo.id} removeTodo={() => this.removeTodo(todo.id)} />))
        return (
            <div className="TodoList">
                <h1>TODO List</h1>
                {todos}
                <NewTodoForm submitForm={this.addNewTask} />
            </div>
        )
    }
};
export default TodoList;