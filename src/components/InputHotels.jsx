import React from 'react'
import { useRef,useState } from 'react'
import '../styles/inputHotels.css'

export default function InputHotels() {

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const [valueInput, setvalueInput] = useState('')
    const [valueInput2, setvalueInput2] = useState('')

    const makeThings = ()=>{
        setvalueInput(inputRef1.current.value)
        setvalueInput2(inputRef2.current.value)
        
    } 
    console.log(valueInput) 
    console.log(valueInput2) 

  return (
    <div className='inputHotels-container'>
            <div>
            <input className='inputHotels-input' type="text" ref={inputRef1} placeholder='Search Hotel' ></input>
            <button onClick={makeThings} className='inputHotels-button'>Search</button>
            </div>
            <select id='order' ref={inputRef2} className='inputHotels-input'>
                <option value="">Order</option>
                <option value="A-Z">From A-Z</option>
                <option value="Z-A">From Z-A</option>
            </select>
    </div>
  )
}
