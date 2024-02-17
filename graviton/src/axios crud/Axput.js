import axios from 'axios'
import React from 'react'

function Axput() {
    let newdata = {
        name: 'John Snow',
        username: 'J.S  '
    }
    let putdata = () => {
        axios.put('https://jsonplaceholder.typicode.com/users/2', newdata).then(response => console.log(response));
    }
    return (
        <div>
            <button onClick={putdata}>PUT DATA</button>
        </div>
    )
}

export default Axput
