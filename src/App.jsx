import Lottery from "./Lottery.jsx"
import {sum} from "./helper.js"

function App() {

  let winCondition = (ticket)=> {
    return sum(ticket)===15;
  }

  return (
    <>
      <Lottery n={3} winCodition={winCondition}/>  
    </>
  )
}

export default App