import { useState } from "react";
import "./Lottery.css"
import { getTicket ,sum} from "./helper";


export default function Lottery(){
    let [ticket,setTicket]=useState(getTicket(3));

    let isWin=sum(ticket);

    function buyTicket(){
        setTicket(getTicket(3));
        console.log("button was clicked");
    }

    return (
        <div className="wholeTicket">
            <h1>Lottery Game!</h1>
            <div className="Ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket} className="button btn" >Buy Ticket</button>
            {isWin==15?<p>congratulations,You won!</p>:null}
        </div>
    )
}