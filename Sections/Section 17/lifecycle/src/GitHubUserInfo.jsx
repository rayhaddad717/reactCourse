import React, { Component } from 'react';
import axios from 'axios';
class GitHubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { imgUrl: '', name: '' };
    };
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`
        let response = await axios.get(url);
        let { data } = response;
        this.setState({ imgUrl: data.avatar_url, name: data.name });

    };
    componentDidUpdate() {
        console.log('inside component did update');
    }
    render() {
        return (
            <div>
                <h1>GITHUB USER INFO</h1>
                <img src={this.state.imgUrl} alt="profile " />
                <p>{this.state.name}</p>
            </div>
        )
    };
};

export default GitHubUserInfo;