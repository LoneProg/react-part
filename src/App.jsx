// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { FirstChild } from './FirstChild.jsx'
import { SecondChild } from './SecondChild.jsx'

function App() {
  const VariableFromApp = "Precious"

  return (
    <>
      <FirstChild myfirstprop={VariableFromApp} secondprop={"i am No 2"}/>

      <SecondChild />

      <p>Lorem ipsum dolor</p>

      <p>Hello World</p>
    </>
  )
}

export default App
