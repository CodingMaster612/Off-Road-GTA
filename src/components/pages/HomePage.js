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
                     <div className="user-box">
                           <input />
                     </div>
                     <div className="password-box">
                           <input />
                     </div>
                  </div>


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