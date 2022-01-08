function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let mes;
        if (num === 7) {
            mes =
                <div>
                    <h2>You WIN</h2>
                    <p>CONGRATS!</p>
                    <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                </div>
        } else {
            mes =
                <span>BAD LUCK!</span>
        }
        return (
            <div>
                <h2>Your number is {num}</h2>
                mes
            </div>
        )
    }
};
ReactDOM.render(<NumPicker />, document.querySelector('#root'));