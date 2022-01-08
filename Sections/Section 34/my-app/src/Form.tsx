import React, { Component } from 'react';
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/FormControl';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'
import { LanguageContext } from './contexts/LanguageContext';
//define words interface
interface IWords {
    [key: string]: { email: string, password: string, signIn: string, rememberMe: string };
}
const words: IWords = {
    english: { email: 'Email', password: 'Password', signIn: 'Sign In', rememberMe: 'Remember Me' },
    french: { email: 'adresse éléctronique', password: 'Mot de passe', signIn: 'Se Connecter', rememberMe: 'Me Souvenir' },
    spanish: { email: 'correo electronico', password: 'Contrasena', signIn: 'Registrarse', rememberMe: 'Racuerdame Me' },
}
class Form extends Component {
    static contextType = LanguageContext;
    render() {
        const language: string = this.context.language;
        const { selectLanguage } = this.context;
        //dynamic destructuring
        const { email, password, signIn, rememberMe } = words[language];
        return (
            <Box component="main" sx={{ width: { xs: 'auto', sm: '400px' }, display: 'block', margin: (theme) => ({ xs: theme.spacing(3), sm: 'auto' }) }}
            >
                <Paper sx={{ mt: (theme) => theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center', padding: (theme) => theme.spacing(2, 3, 3, 2) }}>
                    <Avatar sx={{ margin: (theme) => theme.spacing(1), backgroundColor: (theme) => theme.palette.secondary.main }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{signIn}</Typography>
                    <Select value={language} onChange={selectLanguage}>
                        <MenuItem value="english">
                            English</MenuItem>
                        <MenuItem value="french">
                            Francais</MenuItem>
                        <MenuItem value="spanish">
                            Spanish</MenuItem>
                    </Select>
                    <Box component="form" sx={{ width: '100%', marginTop: (theme) => theme.spacing(3) }} >
                        <FormControl margin="normal" fullWidth>
                            <InputLabel component="label" htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel component="label" htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password" autoFocus />
                        </FormControl>
                        <FormControlLabel label={rememberMe} style={{ display: 'block' }} control={<Checkbox color="primary" />} />
                        <Button variant="contained" type="submit" fullWidth color="primary" sx={{ marginTop: (theme) => theme.spacing(3) }}>{signIn}</Button>
                    </Box>

                </Paper>
            </Box >
        )
    }
}
export default Form