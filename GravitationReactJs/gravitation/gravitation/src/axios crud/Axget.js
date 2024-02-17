import React from 'react'
import axios from 'axios'

function Axget() {

  let getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response.data))
  }
  return (
    <div> 
      <button onClick={getData}>GET DATA</button>
    </div>
  )
}

export default Axget
