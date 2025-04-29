import React, { useReducer } from 'react';

const initialState = {
    count: 0,
    counter2: 0,

};

function reducer(mystate, action) {
    switch (action.type) {
        case 'increment':
            return { ...mystate, count: mystate.count + action.payload };
        case 'decrement':
            return { ...mystate, count: mystate.count - action.payload };
        case 'increment2':
            return { ...mystate, counter2: mystate.counter2 + action.payload };
        case 'decrement2':
            return { ...mystate, counter2: mystate.counter2 - action.payload };
        default:
            return mystate;
    }
}

const CounterWithPayload = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <h2>Counting 1: {state.count}</h2>
                <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>-</button>
                <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>+</button>
            </div>
            <div>
                <h2>Counting 2: {state.counter2}</h2>
                <button onClick={() => dispatch({ type: 'decrement2', payload: 5 })}>-</button>
                <button onClick={() => dispatch({ type: 'increment2', payload: 2 })}>+</button>
            </div>
        </div>
    );
};

export default CounterWithPayload;