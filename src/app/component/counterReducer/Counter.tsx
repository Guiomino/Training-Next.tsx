// CounterReducer.tsx

"use client"

import React, { useReducer } from 'react'

interface CountState {
    count: number;
};

type CountAction =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "RESET" }

const initialState = {
    count: 0
};

const countReducer = ((state: CountState, action: CountAction) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count > 0 ? state.count - 1 : 0 }
        case "RESET":
            return { count: 0 }
        default:
            return state
    }
});

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
        <>
            <div>
                <h2>Counter</h2>
            </div>
            <div>
                <span><strong>Count :</strong> {state.count}</span>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
                <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
                <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
            <hr />
        </>
    )
}

export default Counter