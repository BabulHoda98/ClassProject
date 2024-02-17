import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Main2.css"

function Main2() {
    let [txt, settxt] = useState(" ");
    let [imgdata, setimgdata] = useState(null);
    //for debouncing
    let[debounce,setdebounce]=useState(txt)

    let client_id = "L7IevwPA6sFNrH80xnHMNWRsYaCsdMkX2G8Cl-pHBzM";

    //   set set timeout function u.effect 
    useEffect(() => {
        const timeid = setTimeout(() => {
            setdebounce(txt)
        },1000)
        return () => {
            clearTimeout(timeid)
        }
    }, [txt])

    useEffect(() => {
        let getdata = async () => {
            axios.get(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${debounce}`).then((response) => {
                setimgdata(response.data?.results)
                console.log(imgdata);
            });
        }
        if (debounce)  {
            getdata()
        }
    }, [debounce])
    // -------------------------------------------------------------------------
    //   let handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("thu");
    //     axios.get(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${txt}`)
    //       .then((response) => {
    //         setimgdata(response.data?.results)
    //         console.log(imgdata);
    //       });
    //   };
    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <div style={{position:"fixed"}}>

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
                </div>
            {/* </form> */}
            <div className="m"
                // style={{
                //      display: 'grid',
                //       gridTemplateColumns: 'repeat(auto-fill,minmax(400px,550px))',
                //        gap: '50px',
                //         justifyContent: "center",
                //          textAlign: "center",
                //           textTransform: "uppercase",
                //            fontWeight: 900
                //          }}
            >
                {
                    // falsy value= undefined 0 null false
                    //array
                    imgdata && imgdata.map((ele) => {
                        return <section key={ele?.id}>
                            <img height={"100%"} width={"100%"} border={"2px"} black src={ele.urls?.small} alt="" />
                            <p>{ele.alt_description}</p>
                        </section>
                    })
                }
            </div>
        </>
    );
}

export default Main2;
