import React, { useState } from 'react';
import useInputState from './Hooks/useInputState';
import TextField from '@mui/material/TextField';
export default function EditTodoForm({ editTodo, id, task, toggle }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={e => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggle();
        }}
            style={{
                marginLeft: '1rem',
                width: '100%'
            }}
            onKeyDown={(e) => { if (e.key === 'Escape') { reset(); toggle(); } }}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}