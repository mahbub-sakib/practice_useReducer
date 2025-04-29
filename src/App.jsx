import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simple_counter from './components/Simple_counter'
import CounterWithPayload from './components/CounterWithPayload'

function App() {

  return (
    <div>
      {/* <Simple_counter></Simple_counter> */}
      <CounterWithPayload></CounterWithPayload>
    </div>
  )
}

export default App
