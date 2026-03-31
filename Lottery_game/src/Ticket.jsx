import Ticketnum from "./Ticketnum";
import './Ticket.css'


export default function Ticket({ticket}) {

    return (
        <div className="boxStyle">
            <br />
            <p>Ticket</p>
            <br />
            {
                ticket.map(
                    (num,idx)=>{
                        return <Ticketnum key={idx} num={num} />
                    }
                )
            }
        </div>
    );



}
