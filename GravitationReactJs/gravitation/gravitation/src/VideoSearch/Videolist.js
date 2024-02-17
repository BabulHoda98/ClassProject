import axios from 'axios'
import React, { useEffect } from 'react'
import Videoitem from './Videoitem'

function Videolist({ data, setdata, search, debounce, setdebounce, setvideoID, videoID }) {

  // let yt_api_key = 'AIzaSyD8OeAQG8Uo83H131Ml66r6Kn4YtGRHPzk'
  let yt_api_key = 'AIzaSyBsVr0YvmOpx5m1s5mSiSB9gaSju9QrUiw'


  useEffect(() => {
    let timerid = setTimeout(() => {
      setdebounce(search)
    }, 1000);
    return () => {
      clearTimeout(timerid)
    }
  }, [search])

  useEffect(() => {
    let ytSearch = async (search) => {
      await axios
        .get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: yt_api_key,
            q: search
          }
        })
        // .get(`https://www.googleapis.com/youtube/v3/search?part="snippet"&maxResults=5&key=${yt_api_key}&q=${search}`)

        .then(response => setdata(response.data?.items))
    }
    if (search) {
      ytSearch()
    }
  }, [search])
  return (
    <div className={`${!videoID ? 'w-100' : 'w-50'}`}>
      <ul className='list-group'>
        {
          data && data ? <h1>You have {data.length} results </h1> : ''
        }
        {
          data && data.map((ele, index) => {
            return <Videoitem
              key={index}
              ele={ele}
              setvideoID={setvideoID}
              videoID={videoID}
            />
          })
        }
      </ul>

    </div>
  )
}

export default Videolist
