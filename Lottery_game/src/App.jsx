import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket' 
import Lotterynew from './Lotterynew'

function App() {

  return (
    <>
    {/* <Lottery /> */}
    <br />
    <br />
    {/* <Ticket ticket={[1,2,3]} />
     */}
    <Lotterynew n={3} winningsum={10} />
    </>
  )

}

export default App
