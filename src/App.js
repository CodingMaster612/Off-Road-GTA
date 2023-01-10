import './App.css';
import HomePage from './components/pages/HomePage.js'
import ProductPage from './components/pages/ProductPage.js'

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
       
       
            
                <Routes>
                    
                    <Route path="/" element={ <HomePage/> } />
                    <Route path="/ProductPage" element={<ProductPage />} />
                </Routes>
                
            


        

</BrowserRouter>
  );
}

export default App;
