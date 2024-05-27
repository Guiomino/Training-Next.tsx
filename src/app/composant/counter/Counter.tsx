// Counter.jsx

"use client"

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <>
            <div>
                <h2>Counter</h2>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
                <hr />
            </div>
        </>
    );
};

export default Counter;
