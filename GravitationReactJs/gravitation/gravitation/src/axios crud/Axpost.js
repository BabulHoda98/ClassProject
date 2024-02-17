import axios from 'axios'
import React from 'react'

function Axpost() {
    let mydata={
        name:"King Philip",
        username:'kingphil321@gmail.com'
    }
    let postdata = () => {
        axios.post('https://jsonplaceholder.typicode.com/users',mydata).then(response=>console.log(response));
    }
    return (
        <div>
            <button onClick={postdata}>POST DATA</button>
        </div>
    )
}

export default Axpost
