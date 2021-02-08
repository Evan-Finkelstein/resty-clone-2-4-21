import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="url"> Url
        <input className={styles.url}
                    id="url"
                    name="url"
                    type="text"
                    onChange={onChange} />

            </label>
        </div>
        <label className={styles.radio} htmlFor="get"> Get
        <input
                id="get"
                name="method"
                type="radio"
                value="get"
                onChange={onChange} />
        </label>
        <label className={styles.radio} htmlFor="delete"> Delete
        <input
                id="delete"
                name="method"
                type="radio"
                value="delete"
                onChange={onChange} />
        </label>
        <label className={styles.radio} htmlFor="post"> Post
        <input
                id="post"
                name="method"
                type="radio"
                value="post"
                onChange={onChange} />
        </label>
        <label className={styles.radio} htmlFor="put"> Put
        <input
                id="put"
                name="method"
                type="radio"
                value="put"
                onChange={onChange} />
        </label>
        <div>
            <label htmlFor="json"> JSON
        <input className={styles.json}
                    id="json"
                    name="json"
                    type="text"
                    onChange={onChange} />
            </label>
        </div>
        <button>Submit</button>
    </form>
);

Controls.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};

export default Controls;
