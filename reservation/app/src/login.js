import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password });
      if (response.status === 200) {
        navigate('/menu',{state: {id : username} })
      }
    } catch (error) {
      alert("Please enter correct login credentials!");
      console.error(error);
    }
  };

  return (
    <div class="row" className="login-container">
      <div class="col-4"><img style={{height:'500px',width:"500px"}} src="profile4.jpg" alt="" /></div>
      <div class="col-6" className="login-card" >
        <img src="profile5.jpg" style={{height:'250px',width:'300px'}} alt="Card" />
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
          <br /><br />
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <br /><br />
          <button type="submit" className='login-button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;






// import React, { useState } from 'react';
// import './Login.css';
// import axios from 'axios';

// const Login = ({ setLoggedInUsername }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   }

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   }

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/login', { username, password });
//       if (response.status === 200) {
//         setLoggedInUsername(username); // Set the logged-in username
//         window.location.replace('/menu');
//       }
//     } catch (error) {
//       alert("Please enter correct login credentials!");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="row login-container">
//       <div className="col-4"><img style={{ height: '500px', width: "500px" }} src="profile4.jpg" alt="" /></div>
//       <div className="col-6 login-card" >
//         <img src="profile5.jpg" style={{ height: '250px', width: '300px' }} alt="Card" />
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//           <br /><br />
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//           <br /><br />
//           <button type="submit" className='login-button'>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


