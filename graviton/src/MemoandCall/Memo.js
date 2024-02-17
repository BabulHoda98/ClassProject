import React, { useMemo, useState } from 'react'

function Memo() {
  let [one, setOne] = useState(11)
  let [two, setTwo] = useState(44)

  let increone = () => {
    setOne(one + 1)
  }
  let incretwo = () => {
    console.log("two says" + two);
    setOne(two + 1)
  }
  // let evenNumber=()=>{
  //   console.log("clicked")
  //   let a=0;
  //   while(a<900000000) a++;
  //   return one%2==0
  // }
  let evenNumber = useMemo(() => {
    console.log('CLICKED');
    let a = 0;
    while (a < 900000) a++;
    return one % 2 === 0
  }, [one])

  return (
    <div>
      <button onClick={increone}>Count One {one}</button>
      <button onClick={incretwo}>Count Two {two}</button>
      <h1>One says {evenNumber ? 'EVEN' : "ODD"}</h1>
    </div> 
  )
}

export default Memo
