import React from 'react';
import Todo from './Todo'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                            completed={todo.completed}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                            editTodo={editTodo}
                        />
                        {i === todos.length - 1 ? null : <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    )
    return null;
}