import React from "react";
import '../../App.css';
import img from '../../img/OpenRoad.png';



export default function ProductPage() {

   return (
      <header style={HeaderStyle}>

         <div className="header">
            <div className="highlight">

            </div>
            <div className="header-links">
            <img className="Open-Road" src={img} />
            </div>
            <div className="text-wrapper">
            <div className="link-header"><h10>Catagories</h10></div>
            <button type="submit" className="All">All</button>
               
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
   backgroundColor: "white",
   backgroundSize: "cover",


}