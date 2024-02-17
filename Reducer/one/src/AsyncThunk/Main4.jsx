import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/thunk/fetchusers";

function Main4() {
  // let allUsers = useSelector(state=>state.usersdata.data[0])
  // console.log(allUsers)
  let datas = useSelector((state) => state.usersdata);
  console.log(datas);

  let dispatch = useDispatch();

  let getData = () => {
    dispatch(fetchUsers());
  };
  if (datas.isLoading === true) return <h1>LOADING DATA</h1>;
  return (
    <div>
      Main4
      <button onClick={getData}>GET DATA</button>
      <hr />
      <table style={{ width: "100%", textAlign: "center" }}>
        <tbody>
          <tr style={{ marginBottom: "20px" }}>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </tbody>
        {/* {
    allUsers && allUsers.map(ele=>{
      return <tr key={ele.id}>
        <th>{ele.username}</th>
        <th>{ele.email}</th>
        <th>{ele.password}</th>
        </tr>
    })
  } */}

        {datas.data
          ? datas.data[0].map((ele) => {
              return (
                <tr key={ele.id}>
                  <th>{ele.username}</th>
                  <th>{ele.email}</th>
                  <th>{ele.password}</th>
                </tr>
              );
            })
          : ""}
      </table>
    </div>
  );
}

export default Main4;
