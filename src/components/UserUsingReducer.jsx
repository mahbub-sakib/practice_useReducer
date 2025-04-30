import React, { useReducer } from 'react';

const initialState = {
    name: '',
    age: '',
    hobbies: []
};

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'addName':
            return { ...currentState, name: action.payload };
        case 'addAge':
            return { ...currentState, age: action.payload };
        case 'addHobbies':
            return { ...currentState, hobbies: [...currentState.hobbies, action.payload] };
        case 'removeHobby':
            return {
                ...currentState,
                hobbies: currentState.hobbies.filter((_, index) => index !== action.payload)
            };
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
};

const UserUsingReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
                    className='border border-purple-300 m-10' type='text' name='name' id='name' placeholder='name'></input>
                <input onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
                    className='' type='number' name='age' id='age' placeholder='age'></input>
                <input onBlur={(e) => dispatch({ type: "addHobbies", payload: e.target.value })}
                    className='' type='text' name='hobbies' id='hobbies' placeholder='hobby'></input>
                <button type="button" onClick={() => dispatch({ type: 'reset' })}>
                    Reset
                </button>
                <button type="submit" >Submit</button>
            </form>
            <ul>
                {state.hobbies.map((hobby, index) => (
                    <li key={index}>
                        {hobby}
                        <button type="button" onClick={() => dispatch({ type: 'removeHobby', payload: index })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default UserUsingReducer;