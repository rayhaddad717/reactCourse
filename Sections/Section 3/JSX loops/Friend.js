class Friend extends React.Component {
    static defaultProps = {
        name: 'John Doe',
        hobbies: ['no hobbies']
    }
    render() {
        const { hobbies, name } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(hobby => (<li>{hobby}</li>))}
                </ul>
            </div>
        )
    }
}