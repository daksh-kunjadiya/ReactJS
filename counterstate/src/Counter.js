import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCounter = (opr, value) => {
        if (opr == "+") {
            setCount(count + value);
        }
        else {
            setCount(count - value);
        }
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter</h1>
            <p style={{ fontSize: '2rem' }}>{count}</p>
            <button onClick={() => handleCounter("+", 1)} style={{ margin: '5px', fontSize: '2rem' }}>+</button>
            <button onClick={() => handleCounter("-", 1)} style={{ margin: '5px', fontSize: '2rem' }}>-</button>
        </div>
    );
};

export default Counter;
