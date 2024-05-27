// Counter.jsx

"use client"

import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <hr style={{ margin: 10 }} />
        </>
    );
};

export default Counter;
