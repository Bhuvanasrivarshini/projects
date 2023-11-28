// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import Home from './home';
import Menu from './menu';
import Login from './login';
import Signup from './signup';
import Reservation from './reservation';
// import Linkingpage from './linkingpage';
import Admin from './Admin';
import Data from './data';
import Mainlogin from './mainlogin';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Reservation />} />
        {/* <Route path="/linkingpage" element={<Linkingpage />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/data" element={<Data />} />
        <Route path="/mainlogin" element={<Mainlogin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './home';
// import Menu from './menu';
// import Login from './login';
// import Signup from './signup';
// import Reservation from './reservation';
// import Admin from './Admin';
// import Data from './data';
// import Mainlogin from './mainlogin';

// function App() {
//   const [loggedInUsername, setLoggedInUsername] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/menu" element={<Menu loggedInUsername={loggedInUsername} />} />
//         <Route path="/login" element={<Login setLoggedInUsername={setLoggedInUsername} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/booking" element={<Reservation />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/data" element={<Data />} />
//         <Route path="/mainlogin" element={<Mainlogin />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






