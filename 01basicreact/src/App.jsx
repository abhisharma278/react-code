import { useState } from 'react'
import Code from './Code'


function App() { 
  const username = "Abhishek Sharma"
  return (
    <>
    <div>
        <Code />
        <h1>APP READY for {username}</h1>
    </div>
    </>
  )
}

export default App
