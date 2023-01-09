import './App.css';
import HomePage from './components/pages/HomePage.js'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
       
       
            
                <Routes>
                    
                    <Route path="/" element={ <HomePage/> } />
                </Routes>
                
            


        

</BrowserRouter>
  );
}

export default App;
