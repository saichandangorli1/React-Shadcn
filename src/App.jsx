import React from 'react'
import { Button } from './components/ui/button'
import { Login } from './comp/Login'
const App = () => {

  return (

    <>
    <div className="container flex justify-center items-center h-full my-3">
    <Login />
    </div>
    <div className="container flex justify-center items-center h-full">
    <Button className='bg-black text-white hover:bg-gray-800 hover:text-white rounded-xl'>Click Me</Button>
    </div>
    </>
  )
}

export default App