import React from 'react'
import { useState } from 'react'
export default function NewCityInput() {

    const [data,setData] = useState({
        name:'',
        image:'',
        continent:'',
        population: '',
        usser: ""
      })
      const handleInputChange = (event)=>{
          console.log(event.target.value);
          setData({
            ...data,
              [event.target.name] : event.target.value
            })
        }
        const sendData = (event) =>{
            event.preventDefault();
            console.log(data)
            localStorage.setItem("data", JSON.stringify(data))
          };
  return (
    <>
    <div className='New-container'>
     <h2 className='New-h2'>New City</h2>
     <div className='New-box' >
     <form  id="form" className='New-form'  onSubmit={sendData}>
     <label  for='name'>City:</label>
         <input 
             className='New-input'
             id="name" 
             name="name" 
             type="text"
             placeholder=' Enter the Name City'
             onChange={handleInputChange}  
             required />
      <label for='name'>Image :</label>
         <input 
             className='New-input' 
             id="img" 
             name="img" 
             type="text"
             placeholder='Enter the Image'
             onChange={handleInputChange}  
             required />
      <label for='email'>Continent:</label>
         <input 
             className='New-input' 
             id="continent" 
             name="continent" 
             type="text"
             placeholder='Enter the Continent'
             onChange={handleInputChange}  
             required />
             <label>Population</label>

         <input 
             className='New-input' 
             name="population" 
             type="text" 
             placeholder='Enter the Population'
             onChange={handleInputChange} 
             required/>
             <label>Usser</label>

             <input 
             className='New-input' 
             name="text" 
             type="text" 
             placeholder='Enter the Usser: '
             onChange={handleInputChange} 
             required/>
              <label>Usser ID</label>

<input 
className='New-input' 
name="number" 
type="number" 
placeholder='Enter the Usser Id: '
onChange={handleInputChange} 
required/>
         <div className='New-button'>
             <button className='New-button2' type='submit' >Create</button>
         </div>
     </form>
     </div>
     </div>
     </>
  )
}
