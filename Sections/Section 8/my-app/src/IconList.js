import React, { Component } from 'react'
class IconList extends Component {
    static defaultProps = {
        options: [
            "angry", "achor", "archive", 'at', 'archway', 'baby', 'bell', 'bolt', 'bone', 'car', 'city', 'cloud', 'couch'
        ]
    };
    constructor(props) {
        super(props);
        this.state = { icons: [] };
        this.addIcon = this.addIcon.bind(this);
    };
    //wrong way
    // addIcon() {
    //     const idx = Math.floor(Math.random() * this.props.options.length);
    //     const newIcons = this.state.icons;
    //     newIcons.push(this.props.options[idx])
    //     this.setState(state => ({ icons: newIcons }));
    // };
    //right way
    addIcon() {
        const idx = Math.floor(Math.random() * this.props.options.length);
        const newIcon = this.props.options[idx];
        const newIcons = [...this.state.icons, newIcon];
        this.setState(state => ({ icons: newIcons }));
    }
    render() {
        const icons = this.state.icons.map(icon => (<i className={`fa fa-${icon}`} />));
        return (
            <div>
                <h1>Icons:{icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    };
};
export default IconList