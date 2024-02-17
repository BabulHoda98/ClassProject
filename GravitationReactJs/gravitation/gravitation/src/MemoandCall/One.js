import React, { useCallback, useState } from 'react'
import Two from './Two'

function One() {
    let [one, setOne] = useState(11)
    let [two, setTwo] = useState(44)

    let incrone = () => {
        setOne(one + 1)
    }
    // let newFunc = () => {
    //     console.log('One says FuncName')
    // }

    let newFunc = useCallback(() => {
        console.log('One says FuncName');
    }, [two]);

    return (

        <div>
            <Two two={two} newFunc={newFunc} />
            <button onClick={incrone}>Count One {one}</button>
        </div>
    )
}

export default One
