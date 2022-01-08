class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="ringo"
                    from="paul"
                    isFunny
                    isHappy={true}
                />
                <Hello to="cher" from="sunny" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));