import React, { useState } from 'react'

function Multicontrollable() {
  let [a, b] = useState({ username: "", myemail: "", mypass: "" })
  
  let handlechange = (event) => {
    b(
      { ...a, [event.target.value]: event.target.value }
    )
  }
  return (
    <div>
      <input
        type='text'
        name='username'
        id=''
        placeholder='Username'
        onChange={handlechange}
        value={a.username}
      />
      <input
        type='text'
        name='myemail'
        id=''
        placeholder='Email'
        onChange={handlechange}
        value={a.myemail}
      />
      <input
        type='text'
        name='mypass'
        id=''
        placeholder='Password'
        onChange={handlechange}
        value={a.mypass}
      />
    </div>
  )
}

export default Multicontrollable
