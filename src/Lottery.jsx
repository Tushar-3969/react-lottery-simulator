import { useState } from "react";
import "./Lottery.css"
import { getTicket} from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n=3,winCodition}){
    let [ticket,setTicket]=useState(getTicket(n));

    let isWin = winCodition(ticket)

    function buyTicket(){
        setTicket(getTicket(3));
    }

    return (
        <div className="wholeTicket">
            <h1 className="lottery-title">Lottery Simulator!</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket} className="button btn" >Buy Ticket</button>
            {isWin ?<p className="winMessage">congratulations,You won!</p>:null}
        </div>
    )
}