import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(mystate, action) {
    switch (action.type) {
        case 'increment':
            return { count: mystate.count + action.payload };
        case 'decrement':
            return { count: mystate.count - action.payload };
        default:
            return mystate;
    }
}

const CounterWithPayload = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
            <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+</button>
        </div>
    );
};

export default CounterWithPayload;