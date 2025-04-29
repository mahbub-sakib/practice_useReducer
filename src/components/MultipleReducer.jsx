import React, { useReducer } from 'react';

const initialState = {
    count: 0,
};
const initialState2 = {
    count: 5,
};

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

const MultipleReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, dispatch2] = useReducer(reducer, initialState2);
    return (
        <div>
            <div>
                <h2>Counting 1: {state.count}</h2>
                <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
                <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+</button>
            </div>
            <div>
                <h2>Counting 2: {state2.count}</h2>
                <button onClick={() => dispatch2({ type: 'decrement', payload: 3 })}>-</button>
                <button onClick={() => dispatch2({ type: 'increment', payload: 1 })}>+</button>
            </div>
        </div>
    );
};

export default MultipleReducer;