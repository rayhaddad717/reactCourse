class Machine extends React.Component {
    render() {
        const { icons } = this.props;
        const result = icons.reduce((prev, next) => { return prev + " " + next }, " ");
        let mesg;
        if (icons[0] === icons[1] && icons[1] === icons[2]) {
            mesg = "CONGRATS!"
        }
        else {
            mesg = "TRY AGAIN!"
        }
        return (
            <div>
                <p>{result}</p>
                <p>{mesg}</p>
            </div>
        )
    }
}