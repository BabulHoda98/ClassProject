import React, { useState } from 'react'


function Controllable() {
    let [txt, settxt] = useState('HorseMnl')

    let handleChange=(event)=>{
        // console.log(event);
        // console.log(event.target.value)
        settxt(event.target.value);
    }
    return (
        <div>
            <input
                type='text'
                name=''
                id=''
                value={txt}
                //    onChange={(event)=>{settxt(event.target.value)}}
                onChange={handleChange}

            />
        </div>
    )
}

export default Controllable
