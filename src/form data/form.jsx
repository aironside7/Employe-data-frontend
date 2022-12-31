import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Select from 'react-select'
// import Header from "../header/header";
import "./form.css";

const Post = () => {
  // const options = [
  //   { value: 'Male', label: 'Male' },
  //   { value: 'Female', label: 'Female' },
  //   { value: 'Others', label: 'Others' }
  // ]
  const [post, setpost] = useState({});
  const navigator = useNavigate();
  const postData = async (e) => {
    e.preventDefault();
    console.log(post);
    const formData = new FormData();
    formData.append("image", post.image);
    formData.append("name", post.name);
    formData.append("phone", post.phone);
    formData.append("gender", post.gender);
    formData.append("salary", post.salary);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    await axios
      .post("http://localhost:8000/user/upload", formData, config)
      .then((res) => {
        if(!res.status){
          throw Error("count not")
        }
        console.log("post", res);
        console.log(res)
      })
      .catch((err) => console.log(err.message));

    navigator("/postView");
  };

  return (
    <div id="cont">
      {/* <Header /> */}
      <br></br>
      <form method="post" id="from" onSubmit={postData}>
        
        <div className="input-control">
        <label>Name</label>
        <input
          id="name-container"
          type="text"
          onChange={(e) => setpost({ ...post, name: e.target.value })}
          placeholder="Name"
          name="name"
        />
        </div>
        <div className="input-control">
        <label>Phone</label>
        <input
          id="location-container"
          type="text"
          onChange={(e) => setpost({ ...post, phone: e.target.value })}
          placeholder="phone"
          name="phone"
        />
        </div>
        {/* <div className="input-control">
        <label>Gender</label>
        <input
          id="location-container"
          type="text"
          onChange={(e) => setpost({ ...post, gender: e.target.value })}
          placeholder="gender"
          name="gender"
        />
        </div> */}
        <p for="">Gender</p>
        <select  id="job"  onChange={(e) => setpost({ ...post, gender: e.target.value })}  >
          <option  value="Male" name="gender"></option>
              <option  value="Male" name="gender">Male</option>
              <option value="Female" name="gender">Female</option>
              <option value="Other" name="gender" >Other</option>
            </select>
        {/* <Select options={options} name="gender" value={options.values}   /> */}
        <div className="input-control">
        <label>Salary</label>
        <input
          id="location-container"
          type="text"
          onChange={(e) => setpost({ ...post, salary: e.target.value })}
          placeholder="salary"
          name="salary"
        />
        </div>
        <div className="input-control">
            <label>Upload Your Profile pic</label>
          <input
            id="file-container"
            type="file"
            onChange={(e) => setpost({ ...post, image: e.target.files[0] })}
            name="image"
          />
         
        </div>
        

        <button  type="submit">
          POST
        </button>
      </form>
    </div>
  );
};
export default Post;
