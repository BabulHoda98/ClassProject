import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Videolist from './Videolist';
import Videodetail from './Videodetail';

function Main3() {
    let [search, setsearch] = useState('sahara')
    // for storing data 
    let [data, setdata] = useState(null)
    // for debouncing effect 
    let [debounce, setdebounce] = useState(search)
    //for video ID
    let [videoID, setvideoID] = useState('')

    return (
        <>
            <div className='p-5'>
                <Searchbar search={search} setsearch={setsearch} />
                <div className='d-flex'>
                    {
                        data ? <Videodetail videoID={videoID} /> : ''
                    }
                    <Videolist
                        search={search}
                        data={data}
                        setdata={setdata}
                        debounce={debounce}
                        setdebounce={setdebounce}
                        setvideoID={setvideoID}
                        // videoID={videoID}

                    />
                </div>
            </div>
        </>
    )
}

export default Main3
