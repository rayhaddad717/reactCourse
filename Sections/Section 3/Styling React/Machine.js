class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const winner = s1 === s2 && s2 === s3;
        return (
            <div className="Machine">
                <p style={{ fontSize: '50px', backgroundColor: 'purple' }}>
                    {s1} {s2} {s3}
                </p>
                <p className={winner ? 'Machine-win' : 'Machine-lose'}>{winner ? 'Won' : 'Lost'}</p>
            </div>
        )
    }
}