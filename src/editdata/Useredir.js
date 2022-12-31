import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const Useredir = () => {
    const navigator = useNavigate();
    const [useredit, setUseredit] =useState({
        name:"", phone:"" , gender:"" ,salary:""
    })
    const [msg,setMsg]=useState("")
//    const histroy =  useHistory()
   const {id} = useParams()
   useEffect(()=>{
    const edituserid= async ()=>{
         const reqdata = await fetch(`http://localhost:8000/user/${id}`)
         const res = reqdata.json()
         setUseredit(await res)
    }
    edituserid()
   },[])
   const setpost =(e)=>{
     setUseredit({...useredit, [e.target.name]:e.target.value})
   }
   const handleUserup= async(e)=>{
    e.preventDefault()
    const res = await axios.patch(`http://localhost:8000/user/update/${id}`,useredit)
    setMsg(res.data.msg)
    // res.send("updated")
    navigator("/postView");
   }
  return (
    <div id="cont">
    {/* <Header /> */}
    <br></br>
    <form method="post" id="from" onSubmit={handleUserup} >
      
      <div className="input-control">
      <label>Name</label>
      <input
        id="name-container"
        type="text"
        onChange={(e) => setpost(e)}
        placeholder="Name"
        name="name"
        value={useredit.name}
      />
      </div>
      <div className="input-control">
      <label>Phone</label>
      <input
        id="location-container"
        type="text"
        onChange={(e) => setpost(e)}
        placeholder="phone"
        name="phone"
        value={useredit.phone}
      />
      </div>
      <div className="input-control">
      <label>Gender</label>
      <input
        id="location-container"
        type="text"
        onChange={(e) => setpost(e)}
        placeholder="gender"
        name="gender"
        value={useredit.gender}
      />
      </div>
      <div className="input-control">
      <label>Salary</label>
      <input
        id="location-container"
        type="text"
        onChange={(e) => setpost(e)}
        placeholder="salary"
        name="salary"
        value={useredit.salary}
      />
      </div>
      {/* <div className="input-control">
          <label>Upload Your Profile pic</label>
        <input
          id="file-container"
          type="file"
        //   onChange={(e) => setpost({ ...post, image: e.target.files[0] })}
          name="image"
        />
       
      </div> */}
      

      <button  type="submit">
        POST
      </button>
    </form>
  </div>
  )
}

export default Useredir
// import React from "react";
// import Header from "../header/header";
// // import "./postview.css"
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useParams} from "react-router-dom"
// // import Post from "../form data/form";

// const Useredir = () => {
//     const {id} = useParams()

//     const [posts, setpost] = useState([])

//     useEffect(() => {
//         axios.patch(`http://localhost:8000/user/update/${id}`)
//             .then((res) => {
//                 setpost(res.data.profile)
//             })
//     }, [])
  
// console.log(posts)
//     return (
//         <div id="insta-container"> 
//         <Header/>
       
//         {posts.map((post) => {
//             return (<>
//                 <div className="card" >
//                 <img src={post.image} tyle="width:100%" alt=""/>
//                     <h1>{post.name}</h1>
//                     {/* <a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a> */}
//                     <p>Mobile:{post.phone}</p>
//                     <p>Gender{post.gender}</p>
//                     <p>Salary:{post.salary}</p>
//                     <Link to={`/useredit/${post._id}`} className="button" >edit</Link>
                    
//                 </div>

//             </>)
//         })}
        
//     </div>
//     )

// }
// export default Useredir;