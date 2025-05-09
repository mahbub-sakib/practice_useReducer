import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(mystate, action) {
    switch (action.type) {
        case 'increment':
            return { count: mystate.count + 1 };
        case 'decrement':
            return { count: mystate.count - 1 };
        default:
            return mystate;
    }
}

const Simple_counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
};

export default Simple_counter;