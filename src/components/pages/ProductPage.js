import React from "react";
import '../../App.css';
import axios from "axios";
import { useState } from "react";
import img from '../../img/OpenRoad.png';



export default function ProductPage() {
   const [product_id, setProduct_Id] = useState("");
  

   async function handleSubmit(event) {
      event.preventDefault();
      try {
         await axios.post("http://localhost:8081/product/allProducts/productId",
            {
               product_id: product_id,
               

            });
         alert("Product Id was successfully Retrieved");
        
         setProduct_Id("");
         
//get all images and content by chooseing id /user/getAll/{productId}

      }
      catch (err) {
         alert(" Retrieving Product Failed");
      }
   }
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
               <form onSubmit={handleSubmit}>
                  <button type="submit" className="All-content">All</button>
                  <button type="submit" className="All-forge">Forgeries</button>
                  <button type="submit" className="All-weed">Weed</button>
                  <button type="submit" className="All-count">Counterfeit Cash</button>
                  <button type="submit" className="All-meth">Meth</button>
                  <button type="submit" className="All-cocaine">Cocaine</button>

               </form>
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