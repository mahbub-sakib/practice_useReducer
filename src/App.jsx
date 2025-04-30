import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simple_counter from './components/Simple_counter'
import CounterWithPayload from './components/CounterWithPayload'
import MultipleReducer from './components/MultipleReducer'
import GetPost from './components/GetPost'
import GetPostUsingReducer from './components/GetPostUsingReducer'
import UserUseState from './components/userUseState'
import UserUsingReducer from './components/UserUsingReducer'

function App() {

  return (
    <div>
      {/* <Simple_counter></Simple_counter> */}
      {/* <CounterWithPayload></CounterWithPayload> */}
      {/* <MultipleReducer></MultipleReducer> */}
      {/* <GetPost></GetPost> */}
      {/* <GetPostUsingReducer></GetPostUsingReducer> */}
      {/* <UserUseState></UserUseState> */}
      <UserUsingReducer></UserUsingReducer>

    </div>
  )
}

export default App
