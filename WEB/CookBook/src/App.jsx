import { useState } from 'react'
import './App.css'
import LoginForm from './components/form'
import Breakfast from "./assets/breakfast.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="flex min-h-screen items-center justify-between bg-white">
        <div className="w-3/4 h-screen bg-cover" >
          <img className='h-full w-fit' src={Breakfast} alt='Logo'/>
        </div>
        <div className="w-1/4 flex justify-center" >
          <LoginForm />
        </div>
      </main>
    </>
  )
}

export default App
