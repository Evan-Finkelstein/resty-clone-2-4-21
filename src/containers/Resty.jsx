import React, { Component } from 'react';
import Display from '../components/display/Display.jsx';
import {
    fetchPost,
    updatePost,
    deletePost,
    createPost
} from '../services/fetches';

export default class Resty extends Component {
    state = {
        url: '',
        method: '',
        json: {},
        recieved: '',
        // history: {}
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { url, method, json } = this.state;
        if (method === 'get') {
            const recieved = await fetchPost(url)
            await this.setState({
                recieved: JSON.stringify(recieved, null, 1)
            })
        }
        if (method === 'put') {
            const recieved = await updatePost(url, JSON.parse(json))
            await this.setState({
                recieved: JSON.stringify(recieved, null, 1)
            })
        }
        if (method === 'delete') {
            const recieved = await deletePost(url);
            await this.setState({
                recieved: JSON.stringify(recieved, null, 1)
            });
        }
        if (method === 'post') {
            const recieved = await createPost(url, JSON.parse(json))
            await this.setState({
                recieved: JSON.stringify(recieved, null, 1)
            });
        }

    }

    render() {
        const { recieved } = this.state;
        return (
            <div>
                <Display
                    recieved={recieved}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit} />
            </div>
        );
    }

}
