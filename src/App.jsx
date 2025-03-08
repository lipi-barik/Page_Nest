import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authprovider from "./Auth/Authprovider";
import Herosection from './component/Herosection';

import Signup from './component/Signup';
import Login from './component/Login';
import AllPages from './component/AllPages';

import Allbooks from './component/Allbooks';
// import AllBooksPage from './Pages/AllBooksPage';



const App = () => {
  return (
    <div>
      <Authprovider>
        <Router>
          
          <Routes>
            <Route path='/' element={<Herosection/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Signup' element={<Signup/>} />

             {/* Book Routes */}
            <Route path='/books-preview' element={<Allbooks />} /> {/* Shows only 4 books */}
            <Route path='/books' element={<AllPages />} /> {/* Shows all books */}
          </Routes>
         
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
