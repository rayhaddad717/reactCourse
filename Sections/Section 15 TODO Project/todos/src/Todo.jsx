import React, { Component } from 'react';
import './Todo.css';
import NewTodoForm from './NewTodoForm'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            completed: false,
            beingEdited: false
        };
        this.handleTaskCompleted = this.handleTaskCompleted.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.handleEditing = this.handleEditing.bind(this);
        this.startEditing = this.startEditing.bind(this);
        this.editTask = this.editTask.bind(this);
    };
    startEditing() {
        this.setState({ beingEdited: true });
    }
    completeTask() {
        this.setState(st => {
            const newState = { completed: !st.completed };
            return newState;
        })
    }
    handleTaskCompleted() {
        this.completeTask();
    };
    handleEditing() {
        this.startEditing();
    }
    editTask({ task }) {
        this.setState({
            task,
            beingEdited: false,
            completed: false
        })
        this.props.editTask(task, this.props.id);
    }
    render() {
        if (this.state.beingEdited) {
            return (
                <div className="todo">
                    <NewTodoForm submitForm={this.editTask} task={this.state.task} editTodo={true} />
                </div>
            )
        }
        return (
            <div className="todo">
                <div className={this.state.completed ? "taskIcon completed" : "taskIcon"} onClick={this.handleTaskCompleted}></div>
                <span className={this.state.completed ? "task completed" : "task"}>
                    {this.state.task}
                </span>
                <div className="taskIcons">
                    <i className="fas fa-pen" onClick={this.handleEditing}></i>
                    <i className="fas fa-trash" onClick={this.props.removeTodo}></i>
                </div>
            </div>
        )
    }

};
export default Todo;