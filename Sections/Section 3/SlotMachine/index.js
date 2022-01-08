function getRndNumber() {
    return (Math.floor(Math.random() * 3))
}
class App extends React.Component {
    render() {
        const emojis = ['😍', '😀', '😡'];

        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine icons={[emojis[getRndNumber()], emojis[getRndNumber()], emojis[getRndNumber()]]} />
                <Machine icons={[emojis[getRndNumber()], emojis[getRndNumber()], emojis[getRndNumber()]]} />
                <Machine icons={[emojis[getRndNumber()], emojis[getRndNumber()], emojis[getRndNumber()]]} />
            </div>
        )
    }
};
ReactDOM.render(<App />, document.querySelector('#root'))