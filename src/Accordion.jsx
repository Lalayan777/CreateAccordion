import { useState } from "react";
import "./App.css"



function Accordion({ accordion }) {
    const [isTrue, setIsTrue] = useState(false)
    const handleClick = ()=>{
        setIsTrue(!isTrue)
        console.log(isTrue)
    }
    return(
        <div className="cont">
        <div onClick={handleClick}>{accordion.title} {isTrue ? "-" : "+" } </div>
        <p style={{display : !isTrue ? "none" : "block" }}>{accordion.description}</p>
    </div>
    )
}

export default Accordion;