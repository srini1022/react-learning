import { useState } from 'react'
import './Lottery.css'
import { generateRandomTicket, sum } from "./helper";
import Ticket from './Ticket';


//liffting state up means to move the state from a child component to a parent component. This is done when multiple components need to share the same state or when a parent component needs to control the state of its child components. By lifting the state up, we can ensure that the state is managed in a single place and can be easily passed down to the child components as props. This helps in maintaining a clear and organized structure in our React application.


//components are 2 types
//1. presentational components - these are components that are responsible for rendering the UI and do not have any logic or state. They receive data and callbacks as props from their parent component and render the UI accordingly. They are also known as dumb components or stateless components.
//dumb,ui,no state, just render the UI, receive data and callbacks as props from parent component
//2. container components - these are components that are responsible for managing the state and logic of the application. They are also known as smart components or stateful components. They can have their own state and can also pass down data and callbacks to their child components as props.

//logical components are components that contain the logic of the application. They are responsible for handling user interactions, managing state, and performing any necessary calculations or data manipulation. They can be either presentational or container components, depending on their role in the application. Logical components are essential for the functionality of the application and often work together with presentational components to create a complete user experience.
//smart sateful, manage state and logic, handle user interactions, perform calculations or data manipulation, can be presentational or container components, essential for functionality of the application, work together with presentational components to create a complete user experience.
//In the context of a lottery game, a logical component could be responsible for generating random numbers, checking if the user's input matches the winning numbers, and keeping track of the user's winnings. This component would handle all the logic related to the game, while a presentational component would be responsible for rendering the UI and displaying the results to the user.







export default function Lotterynew({n,winningsum}) {
  let [ticket, setTicket] = useState(generateRandomTicket(n));

  let iswining = sum(ticket) === winningsum;

  let regenerate = () => {
    setTicket(generateRandomTicket(3));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <p>Click the button to try your luck!</p>
      <br />
      <Ticket ticket={ticket} />
      <br />
      <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br/>
    <br/>
    

      <button onClick={regenerate}>Play again !!</button>
      <br />
      <br />
      {iswining ? <h2>Congratulations! You won the lottery!</h2> : <></>}
    </div>
  );
}
