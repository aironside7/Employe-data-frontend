import React from "react";
import Header from "../header/header";
import "./postview.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const PostView = () => {

    const [posts, setpost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/user")
            .then((res) => {
                setpost(res.data.profile)
            })
    }, [])
  
console.log(posts)
    return (
        <div id="insta-container"> 
        <Header/>
       
        {posts.map((post) => {
            return (<>
                <div className="card" >
                <img src={post.image} tyle="width:100%" alt=""/>
                    <h1>{post.name}</h1>
                    {/* <a href=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a> */}
                    <p>Mobile:- {post.phone}</p>
                    <p>Gender:- {post.gender}</p>
                    <p>Salary:- {post.salary}</p>
                    {/* <button href=`/useredit/${post._id}`></button> */}
                    <Link to={`/useredit/${post._id}`} className="button" ><button>Edit</button></Link>
                    <Link to={`/userdel/${post._id}`} className="button" ><button>Remove</button></Link>
                    
                </div>
                <br></br>
                <br></br>

            </>)
        })}
        
    </div>
    )

}
export default PostView;