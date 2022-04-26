import { useState } from "react"
import './Expenses.css'

function Expenses(){
    const [one,setOne] = useState('')
    const [two,setTwo] = useState('')
    const [three,setThree] = useState('')

    function oneHand(event) {
        setOne(event.target.value)
    }
    function twoHand(event) {
        setTwo(()=> {
            let obj = {
                two:two,
            }
            return obj = event.target.value
        })
    }

    function sreHand(event) {
        setThree((prev) => {
           prev = event.target.value;
           return prev
        })
    }
    return (
        <form className="cont">
            <input className="input1" value={one} onChange={oneHand} placeholder="input-1"  />
            <input className="input1" value={two} onChange={twoHand} placeholder="input-2"/>
            <input className="input1" value={three} onChange={sreHand}  placeholder="input-3"/>
            <p> Ответ-1{one}</p>
            <p> Ответ-2{two}</p>
            <p> Ответ-3{three}</p>
        </form>
    )
}
export default Expenses