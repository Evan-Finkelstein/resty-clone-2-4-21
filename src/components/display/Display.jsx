import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
// import styles from './Display.modules.css'

const Display = ({ recieved, onChange, onSubmit }) => (
    <section
        className="radio"
        data-testid="display">
        <Controls
            onChange={onChange}
            onSubmit={onSubmit} />
        <div >
            <div>{recieved} </div>
        </div>


    </section>


);


Display.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    recieved: PropTypes.string.isRequired,
};

export default Display;
