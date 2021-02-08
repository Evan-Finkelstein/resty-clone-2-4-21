import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import styles from './Display.css'

const Display = ({ recieved, onChange, onSubmit }) => (
    <section className={styles.display}


    >
        <Controls
            onChange={onChange}
            onSubmit={onSubmit} />
        <div >
            <div data-testid="display"
                className={styles.results}
            >
                {recieved}
            </div>
        </div>


    </section>


);


Display.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    recieved: PropTypes.string
};

export default Display;
