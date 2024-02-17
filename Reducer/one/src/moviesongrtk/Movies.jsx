import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";

function Movies() {
  let [movie, setMovie] = useState("");
//to get the data from store
  let moviesPlaylist =useSelector(state=>state.movies)
    console.log(moviesPlaylist);

    let dispatch = useDispatch(movie)
//to execute reducer
    let handleAdd=()=>{
      let action = (addMovie(movie))
     //  console.log(action)
      dispatch(action)
      setMovie('')
 }
   
  let handleRemove=()=>{
    let action = removeMovie(movie) 
      console.log(action);
      dispatch(action)
      setMovie('')
  }
  
  return (
    <div>
      <h2>Movies Playlist</h2>
      <hr />
      <input type="text" name="" id="" placeholder="Enter movie name" value={movie} onChange={(e)=>setMovie(e.target.value )}></input>
      <button onClick={handleAdd}>Add Movies</button>
      {
        moviesPlaylist.map((ele,index)=>{
                return <div key={index}>
                    <h2>{ele}<button onClick={handleRemove}>X</button></h2>
                </div>
           })
          }
    </div>
  );
}

export default Movies;
