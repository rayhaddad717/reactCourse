import React, { createContext, Component } from 'react';
interface myProps {
    NavBar: React.Component;
    Form: React.Component;
}
interface myContextInterface {
    isDarkMode: boolean;
    //add toggle theme type definition
    toggleTheme?: () => void;
}
export const ThemeContext = createContext<myContextInterface | null>(null);
export default class ThemeProvider extends Component<any, myContextInterface> {
    constructor(props: React.Props<myProps>) {
        super(props);
        this.state = { isDarkMode: true };
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme(): void {
        this.setState({ isDarkMode: !this.state.isDarkMode })
    }
    render(): React.ReactNode {
        return (<ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
            {this.props.children}
        </ThemeContext.Provider>)
    }
}