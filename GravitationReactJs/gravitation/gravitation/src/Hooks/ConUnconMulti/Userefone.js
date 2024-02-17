import React, { useRef, useState } from 'react'

function Userefone() {
    let [count, setCount] = useState(1008)
    let countref = useRef(1008)
    let add = () => {
        setCount(count + 1)
        countref.current++

        console.log("State=" + count);
        console.log("Ref=" + countref.current);
    }
    return (
        <>

            <h2>Count {countref.current}</h2>
            <button onClick={add}>Incre</button>
        </> 
    )
}

export default Userefone

// -------------------------------------
// import React, { useEffect, useRef } from 'react'

// function Userefone() {
//     const inpRef = useRef(null)

//     useEffect(() => {
//         inpRef.current.focus()
//     }, [])

//     return (
//         <>
//             <input type='text' ref={inpRef} placeholder='Type TEXT' />
//         </>
//     )
// }

// export default Userefone

