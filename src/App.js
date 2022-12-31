import logo from './logo.svg';
import './App.css';
import LandingPage from './landingpage/landinig';
import PostView from './postview/postview';
import FormData from './form data/form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Useredir from './editdata/Useredir';
import Userdel from './Userdel/Userdel';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<LandingPage/>}/>
      <Route path='/useredit/:id' element={<Useredir/>}/>
      <Route path ="/postView" element ={<PostView/>}/>
      <Route path='/formData'  element={<FormData/>}/>
      <Route path='/userdel/:id' element={<Userdel/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  
    )
   
}

export default App;
