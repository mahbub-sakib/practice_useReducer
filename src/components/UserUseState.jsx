import React, { useState } from 'react';

const UserUseState = () => {
    const [user, setUser] = useState({ name: '', age: '0', hobbies: [] });
    console.log(user);
    return (
        <div>
            <form >
                <input onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className='border border-purple-300 m-10' type='text' name='name' id='name' placeholder='name'></input>
                <input onChange={(e) => setUser({ ...user, age: e.target.value })}
                    className='' type='number' name='age' id='age' placeholder='age'></input>
                <input onBlur={(e) => setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })}
                    className='' type='text' name='hobbies' id='hobbies' placeholder='hobby'></input>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default UserUseState;