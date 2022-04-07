import React, { useState } from 'react';

const Counter = (props) => {
    const { value } = props;

    const formatValue = () => {
        return value === 0 ? 'пусто' : value;
    };
    const getBageClasses = () => {
        let classes = 'badge m-2 bg-';
        classes += value === 0 ? 'warning' : 'primary';
        return classes;
    };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => props.onIncrement(props.id)}
            >
                +
            </button>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => props.onDecrement(props.id)}
            >
                -
            </button>
            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onDelete(props.id)}
            >
                Удалить
            </button>
        </div>
    );
};

export default Counter;
