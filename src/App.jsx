import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import TicTacToe from "./TicTacToe";
import UserList from './UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <TicTacToe />
       <UserList />
    </div>
  )
}

export default App
