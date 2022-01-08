class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Ray"
                    hobbies={['singing', 'dancing', 'piano']}
                />
                <Friend
                    hobbies={['f1', 'fifa']}
                />
                <Friend

                />
            </div>
        )
    }
};
ReactDOM.render(<App />, document.querySelector('#root'))