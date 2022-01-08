import React, { createContext, Component } from 'react';
interface ILanguageContext {
    language: string;
    selectLanguage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const LanguageContext = createContext<ILanguageContext | null>(null);
export default class LanguageProvider extends Component<any, ILanguageContext>{
    constructor(props: any) {
        super(props);
        this.state = { language: 'english' };
        this.selectLanguage = this.selectLanguage.bind(this);
    }
    selectLanguage(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ language: e.target.value });
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, selectLanguage: this.selectLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export const withLanguageContext = (Component: any) => (props: any) => {
    return (
        <LanguageContext.Consumer>
            {value => <Component languageContext={value} {...props} />}
        </LanguageContext.Consumer>
    )
}