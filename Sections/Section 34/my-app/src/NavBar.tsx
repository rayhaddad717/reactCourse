import React, { Component } from 'react';
import { alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input } from '@mui/material';
//i import the context
import { ThemeContext } from './contexts/ThemeContext'
import { LanguageContext, withLanguageContext } from './contexts/LanguageContext'
interface IContent {
    [key: string]: { search: string, flag: string }
}
const content: IContent = {
    english: { search: "Search", flag: 'en' },
    french: { search: "Chercher", flag: 'fr' },
    spanish: { search: "Buscar", flag: 'es' },
}
interface IProps {
    languageContext: { language: string, selectLanguage?: (a: any) => void }
}
class NavBar extends Component<IProps, any> {
    //i initialize my contextType
    static contextType = ThemeContext;
    render() {
        const { isDarkMode, toggleTheme } = this.context;
        const { search, flag } = content[this.props.languageContext.language]
        return (
            <LanguageContext.Consumer>

                {value => <Box sx={{ width: '100%', mb: 0 }}>
                    <AppBar position="static" color={isDarkMode ? "default" : "primary"} >
                        <Toolbar>
                            <IconButton color="inherit" sx={{ ml: '-12px', mr: '20px' }}>
                                <span>{flag}</span>
                            </IconButton>
                            <Typography variant="h6" color="inherit" sx={{
                                display: { xs: 'none', sm: 'block' }
                            }}>
                                App title {value?.language}
                            </Typography>
                            <Switch onChange={toggleTheme} />
                            <Box sx={{ flexGrow: 1 }}></Box>
                            <Box sx={{
                                position: 'relative', borderRadius: (theme) => theme.shape.borderRadius, backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15), height: '50px', display: 'flex', ":hover": {
                                    backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25)
                                }, marginLeft: (theme) => ({
                                    xs: 0,
                                    sm: theme.spacing(1)
                                }), width: { xs: '100%', sm: 'auto' }
                            }}>
                                <SearchIcon sx={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
                                    width: (theme) => theme.spacing(9)
                                }} />
                                <InputBase placeholder={`${search}...`} sx={{
                                    '.inputInput': {
                                        padding: (theme) => theme.spacing(1, 1, 1, 10),
                                        transition: (theme) => theme.transitions.create('width'),
                                        width: {
                                            xs: "100%",
                                            sm: '120px',
                                        },
                                        ":focus": { width: '200px' }
                                    },
                                    '.inputRoot': {
                                        width: '100%',
                                        color: 'inherit'
                                    }
                                }}
                                    classes={{
                                        root: "inputRoot",
                                        input: 'inputInput'
                                    }
                                    }
                                />
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box >}
            </LanguageContext.Consumer>

        )
    }
}
export default withLanguageContext(NavBar);