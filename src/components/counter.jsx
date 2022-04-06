import React, { useState } from 'react';

const Counter = (props) => {
    const { value } = props;

    const formatValue = () => {
        return value === 0 ? 'empty' : value;
    };
    const getBageClasses = () => {
        let classes = 'badge m-2 bg-';
        classes += value === 0 ? 'warning' : 'primary';
        return classes;
    };

    const handleIncrement = () => {
        return props.onIncrement(props.id);
    };
    const handleDecrement = () => {
        return props.onDecrement(props.id);
    };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}
            >
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleDecrement}
            >
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
