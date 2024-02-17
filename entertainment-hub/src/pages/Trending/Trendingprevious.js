// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import SingleContent from '../../components/SingleContent/SingleContent';

// const Trending = () => {
//   const [content, setContent] = useState([]);

//   const fetchTrending = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/movie/550?api_key=d2b6936e988803bcbeec8683534f4503`);
//     console.log(data);
//     setContent(data.results)

    
//     const url = 'https://api.themoviedb.org/3/guest_session/iii/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmI2OTM2ZTk4ODgwM2JjYmVlYzg2ODM1MzRmNDUwMyIsInN1YiI6IjY1NTViYTE3YWE2NTllMDBmZmY0ODZmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jd6wsbH6Q-6Hj18vdGBetcIz8Lx0SZTdRZDnfbXAtUc'
//       }
//     };

//     const responseJson = await axios.get(url,options)
//     // const response = await responseJson.json()

//     console.log("reponse data", responseJson)


//   }
//       // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);




      
//       // fetch(url, options)
//       //   .then(res => res.json())
//       //   .then(json => {
//       //     console.log("reponse data", json)
//       //   })
//       //   .catch(err => console.error('error:' + err));

//   useEffect(() => {
//     fetchTrending();
//   }, [])

//   return (
//     <div>
//       <span className='pageTitle'>Trending page</span>
//       <div className='trending'>
//         {
//           content && content.map((c) => (<SingleContent/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Trending
