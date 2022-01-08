import React, { useEffect } from 'react';
import TodoList from './TodoList';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TodoForm from './TodoForm';
import Grid from '@mui/material/Grid';
import useTodoState from './Hooks/useTodoState';

export default function TodoApp() {
    const initialTodos = [{ task: 'pet monkey', id: 1, completed: false }];
    const { todos, removeTodo, addTodo, toggleTodo, editTodo } = useTodoState(initialTodos);
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa',
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>Todos with functions</Typography>
                </Toolbar>

            </AppBar>
            <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4} >
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

