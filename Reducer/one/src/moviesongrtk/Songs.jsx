import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSong, removeSong } from '../store'

function Songs() {
    let[songs,setSongs]=useState('')

    //to get state from store
    let songsPlaylist =useSelector(state=>state.songs)
    console.log(songsPlaylist);
    
    let dispatch = useDispatch()
    
let handleAdd=()=>{
     let action = addSong(songs)
    //  console.log(action)
     dispatch(action)
     setSongs('')
}
let handleRemove=()=>{
    let action = removeSong(songs) 
    console.log(action);
    dispatch(action)
    setSongs('')
}

  return (
    <div>
      <h2>Songs</h2>
      <hr/>
      <input type='text' name='' id='' placeholder='Enter song name' value={songs} onChange={(e)=>setSongs(e.target.value)}></input>
      <button onClick={handleAdd}>Add Song</button>
      {
        songsPlaylist.map((ele,index)=>{
                return <div key={index}>
                    <h2>{ele}<button onClick={handleRemove}>X</button></h2>
                </div>
           })
          }
    </div>
  )
}

export default Songs
 