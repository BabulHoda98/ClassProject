import React, { useState } from "react";

function Onerevice() {
  let [count, setCount] = useState(44);
  let [valToAdd,setValToAdd]=useState(0);
  let inc = () => {};
  let dec = () => {};

  let handleChange=()=>{
    // setValToAdd(e.target.value)
    let data = parseFloat(e.target.value) || 0;
    // console.log(data)
    setValToAdd(data)

    let handleSubmit=(e)=>{
        e.preventDefault()

        setCount(count+valToAdd)
        setValToAdd(0)

    }
  }
  return (
    <div> 
      <h2>Count says={count}</h2>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <form onSubmit={handleSubmit}> 
        <label>Enter value to ADD</label>
        <input type="number" name="" id="" value={valToAdd}></input>
      </form>
      <br />
      <br />
      <button onChange={handleChange}>Submit value</button>
    </div>
  );
}

export default Onerevice;
