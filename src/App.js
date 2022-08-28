import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';

import Foodpage from './pages/Foodpage';
import Homepage from './pages/Homepage';
import Hotelpage from './pages/Hotelpage';
import Housepage from './pages/Housepage';
import Shippage from './pages/Shippage';
import Touristpage from './pages/Touristpage';
import Navbar from './pages/Navbar';



function App() {
   
  return (
   <Router>
    <div className='blur-div blur1'></div>
    <div className='blur-div blur2'></div>
      <div className='App'>
        <Navbar/>
      
        <Routes >
            <Route path='tourism3' element={<Homepage/>}/>
            <Route path='foodpage' element={<Foodpage/>}/>
            <Route path='hotelpage' element={<Hotelpage/>}/>
            <Route path='housepage' element={<Housepage/>}/>
            <Route path='shippage' element={<Shippage/>}/>
            <Route path='touristpage' element={<Touristpage/>}/>
        </Routes>
       
      </div>
   </Router>
  );
}

export default App;
