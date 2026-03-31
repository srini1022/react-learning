import { useState } from "react";
import "./Lottery.css";
import { generateRandomTicket, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(generateRandomTicket(3));

  let iswining = sum(ticket) === 15;

  let regenerate = () => {
    setTicket(generateRandomTicket(3));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <p>Click the button to try your luck!</p>
      <br />
      <br />
      <br />
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <br />

      <button onClick={regenerate}>Play again !!</button>
      <br />
      <br />
      {iswining ? <h2>Congratulations! You won the lottery!</h2> : <></>}
    </div>
  );
}
