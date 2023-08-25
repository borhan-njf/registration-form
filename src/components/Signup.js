import React, { useState } from 'react'

export default function Signup() {
  const [data , setData]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    isAccepted:false
  })

  const changeHandler=(event)=>{
   if(event.target.name==='isAccepted') {
    setData({...data,[event.target.name]:event.target.checked})
   }else{
    setData({...data,[event.target.name]:event.target.value})
   }
  }


  return (
    <div>
      <span>{JSON.stringify(data)}</span>
        <form>
          <h1>Sign Up</h1>
            <div>
              <label for='name'>name</label>
              <input type='text' name='name' id='name' value={data.name} onChange={changeHandler}></input>
            </div>
            
            <div>
              <label for='email'>email</label>
              <input type='email' name='email' id='email' value={data.email} onChange={changeHandler}></input>
            </div>

            <div>
              <label for='password'>password</label>
              <input type='password' name='password' id='password' value={data.password} onChange={changeHandler}></input>
            </div>

            <div>
              <label for='confirmPassword'>confirm password</label>
              <input type='password' name='confirmPassword' id='confirmPassword' value={data.confirmPassword} onChange={changeHandler}></input>
            </div>

            <div>
              <label for='checkbox'>i accept privacy policy</label>
              <input type='checkbox' name='isAccepted' id='checkbox' onChange={changeHandler} ></input>
            </div>
            <div>
              <button>Sign Up</button>
            </div>
        </form>
    </div>    
  )
}
