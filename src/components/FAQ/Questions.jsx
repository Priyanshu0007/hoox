/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Questions = (props) => {
    const {question,answer}=props
    const[show,setShow]=useState(false)
  return (
    <div className='qa'>
        <div className='ques' onClick={()=>setShow(!show)}>
            <h2>{question}</h2>
            <CiCirclePlus size={40}/>
        </div>
        {show &&  <div className="ans">
            {answer}
        </div>}
    </div>
  )
}

export default Questions