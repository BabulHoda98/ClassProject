import axios from "axios";
import React, { useState } from "react";
import "./Main.css";

function Main() {
  let [txt, settxt] = useState("ocean");
  let [imgdata, setimgdata] = useState(null);

  let client_id = "L7IevwPA6sFNrH80xnHMNWRsYaCsdMkX2G8Cl-pHBzM";

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("thu");
    axios.get(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${txt}`)
      .then((response) => {
        setimgdata(response.data?.results)
        console.log(imgdata);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={txt}
          onChange={(event) => {
            settxt(event.target.value);
          }}
        />
        <input type="submit" value="Search Image" />
      </form>
      <div
       style={{ display: 'grid', gridTemplateColumns: 'repeat(2,500px)', gap: '50px', justifyContent: "center", textAlign: "center", textTransform: "uppercase", fontWeight: 900 }}
       >
        {
          // falsy value= undefined 0 null false
          //array
          imgdata && imgdata.map((ele) => {
            return <section key={ele?.id}>
              <img height={"100%"} width={"100%"}  src={ele.urls?.small} alt="" />
              <p>{ele.alt_description}</p>
            </section>
          })
        }
      </div>
    </>
  );
}

export default Main;
