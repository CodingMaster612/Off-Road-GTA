import React from "react";
import '../../App.css';

import img from '../../img/OpenRoad.png';



export default function HomePage() {














   return (
      <header style={HeaderStyle}>

         <div className="wrapper">
            <div className="rectangle">
               <img className="Open-Road" src={img} />
               <div className="box">
                  <div className="input-wrapper">
                     <div className="input-box">
                        
                        <input type="text" placeholder=""id="lname" name="lname" />
                     </div>
                     <div className="input-box">
                        <input type="text" placeholder=""id="lname" name="lname" />
                     </div>
                     
                  </div>
                  <h1>User</h1>
                  <h2>Password</h2>
                  <button class="button">Login</button>
               </div>
            </div>






         </div>



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