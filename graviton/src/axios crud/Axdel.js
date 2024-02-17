import axios from 'axios'
import React from 'react'

function Axdel() {
    let deldata=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/users/2').then(response=>console.log(response));
    }
  return (
    <div>
      <button onClick={deldata}>DEL DATA</button>
    </div>
  )
}

export default Axdel
