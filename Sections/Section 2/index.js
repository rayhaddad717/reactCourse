function getMood() {
    const moods = ['Angry', 'Happy', 'Hungry', 'Excited'];
    return moods[Math.floor(Math.random() * moods.length)]
}
class JSXDemo extends React.Component {
    render() {
        return (
            //{} escapes jsx
            <div>
                <h1>Current Mood: {getMood()}</h1>
            </div>
        )
    }
};
ReactDOM.render(<JSXDemo />, document.querySelector('#root'))