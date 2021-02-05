import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="url"> Url
        <input
                id="url"
                name="url"
                type="text"
                onChange={onChange} />

        </label>
        <label htmlFor="get"> Get
        <input
                id="get"
                name="method"
                type="radio"
                value="get"
                onChange={onChange} />
        </label>
        <label htmlFor="delete"> Delete
        <input
                id="delete"
                name="method"
                type="radio"
                value="delete"
                onChange={onChange} />
        </label>
        <label htmlFor="post"> Post
        <input
                id="post"
                name="method"
                type="radio"
                value="post"
                onChange={onChange} />
        </label>
        <label htmlFor="put"> Put
        <input
                id="put"
                name="method"
                type="radio"
                value="put"
                onChange={onChange} />
        </label>
        <label htmlFor="json"> JSON
        <input
                id="json"
                name="json"
                type="text"
                onChange={onChange} />
        </label>
        <button>Submit</button>
    </form>
);

Controls.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Controls;
