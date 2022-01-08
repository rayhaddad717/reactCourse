class Hello extends React.Component {
    render() {
        const { props } = this;
        console.log(props.object);
        return (
            <p>Hello {props.to} from {props.from}</p>
        )
    }
}