// import React, { useState } from 'react'
// // import axios from 'axios';

// function Main4() {
//     let [data, setdata] = useState({name:'Umar',username:'umargik',email:'officbanao.com',password:'What@123'})
//     console.log(data);

//     let handleChange = (event) => {
//         setdata(
//             { ...data, [event.target.name]: event.target.value })
//     }
// // ---------------------------------------------
//     // let getData = async () => {
//     //     await axios
//     //     // .get('http://localhost:4100/users')
//     //     .get('http://localhost:4000/comments')
//     //     .then(response => console.log(response));
//     // }
//     // let postData = async () => {
//     //     await axios
//     //     .post ('http://localhost:400/comments',data)
//     //     .then(response => console.log(response));
//     // }
//     // let putData = async () => {
//     //     await axios
//     //     .put ('http://localhost:4100/users/1',data) 
//     //     .then(response => console.log(response));
//     // }
//     // -----------------------------------------
//     return (
//         <>
//             <input
//                 type='text'
//                 placeholder='Name'
//                 value={data.name}
//                 onChange={handleChange}
//             />
//             <input
//                 type='text'
//                 placeholder='UserName'
//                 value={data.username}
//                 onChange={handleChange}
//             />
//             <input
//                 type='text'
//                 placeholder='Email'
//                 value={data.email}
//                 onChange={handleChange}
//             />
//             <input
//                 type='text'
//                 placeholder='Password'
//                 value={data.password}
//                 onChange={handleChange}
//             />
//             <button onClick={postData}>Post Data</button>
//         </>
//     )
// }

// export default Main4
