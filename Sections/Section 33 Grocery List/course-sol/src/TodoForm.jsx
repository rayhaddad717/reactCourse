import React from 'react';
import useInputState from './Hooks/useInputState';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{
            margin: '1rem 0',
            padding: '0 1rem'
        }}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField onChange={handleChange}
                    value={value}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth />
            </form>
        </Paper>
    )
}