import React from "react";
import axios from "axios";
import { useState } from "react";
import '../../App.css';

import img from '../../img/OpenRoad.png';



export default function HomePage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         await axios.post("http://localhost:8081/user/signIn",
            {
               email: email,
               password: password,

            });
         alert("User sign in Successfully");
         window.location.href = '/ProductPage';
         setEmail("");
         setPassword("");


      }
      catch (err) {
         alert("User login Failed");
      }
   }
   return (
      <header style={HeaderStyle}>

         <form className="wrapper" onSubmit={handleSubmit}>
            <div className="rectangle">
               <img className="Open-Road" src={img} />
               <div className="box">
                  <div className="input-wrapper">
                     <div className="input-box">

                        <input type="text" name="email"
                           onChange={(event) => {
                              setEmail(event.target.value);
                           }} />
                     </div>
                     <div className="input-box">
                        <input type="password"  name="password"

                           onChange={(event) => {
                              setPassword(event.target.value);
                           }} />




                     </div>

                  </div>
                  <h1>User</h1>
                  <h2>Password</h2>
                  <button type="submit" className="button">Login</button>
               </div>
            </div>








         </form>

      </header >
   )
}
const HeaderStyle = {
   width: "100%",
   height: "100vh",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundColor: "orange",
   backgroundSize: "cover",


}