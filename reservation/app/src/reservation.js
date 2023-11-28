// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Dropdown, Button } from 'react-bootstrap';
// import axios from 'axios';

// function Booking() {
//   const location = useLocation();
//   const name1 = location.state.id;
//   const [username, setUser] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [selectedTableType, setSelectedTableType] = useState("");
//   const [showConfirmButton, setShowConfirmButton] = useState(false);
//   const [reservationSuccess, setReservationSuccess] = useState(false);

//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     navigate('/booking', { state: { id: name1 } });
//   };

//   const handleTableTypeSelect = (tableType) => {
//     setSelectedTableType(tableType);
//     setShowConfirmButton(true);
//   };

//   const handleLogoutClick = () => {
//     // Add any necessary logic for user logout, e.g., clearing user session

//     // Navigate to the homepage
//     navigate('/');
//   };

//   const handleConfirmReservation = () => {
//     // Create an object with the reservation details
//     const reservationData = {
//       username,
//       name,
//       phone,
//       date,
//       time,
//       selectedTableType,
//     };

//     // Make an HTTP POST request to the server to save the reservation
//     // ...

//     // The rest of your HTTP POST request logic goes here
//     axios
//       .post("http://localhost:4000/addreservation", reservationData)
//       .then((response) => {
//         if (response.status === 200) {
//           // Reservation was successfully saved
//           setReservationSuccess(true);
//         } else {
//           // Handle any other response status as needed
//           console.error("Reservation failed");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="container-fluid" style={{ backgroundImage: "url('back1.jpg')", height: "800px", backgroundSize: "cover" }}>
//       <div className="d-flex justify-content-between mb-3 ">
//         <div>
//           <button className="btn bg-none mt-3 text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none mt-3 text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div>
//           <Dropdown>
//             <Dropdown.Toggle as={Button} className="btn mt-3 bg-white text-black" style={{ marginRight: "15px", width: "150px",border:"none" }}>
//               {name1}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => handleLogoutClick()}>Log Out</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>

//       {/* Rest of your code */}
//       {/* ... */}
//       <div className="col-md-10" style={{ paddingTop: "10px", paddingLeft: "500px" }}>
//         <center>
//           <h1 className="cc">Book your seats</h1>
//         </center>
//         <div style={{ height: "250px", width: "200px", float: "left", marginLeft: "70px", textAlign: "justify", color: "white", fontSize: "20px" }}>
//           <label>User name:</label>
//           <br />
//           <br />
//           <label>Name:</label>
//           <br />
//           <br />
//           <label>Phone Number:</label>
//           <br />
//           <br />
//           <label>Date (MM/DD/YYYY):</label>
//           <br />
//           <br />
//           <label>Time<br />(HH:MM AM/PM):</label>
//           <br />
//           <br />
//           <label>Select a Table Type:</label>
//         </div>
//         <div className="col-7" style={{ height: "300px", width: "400px", float: "left", textAlign: "justify", marginLeft: "50px", color: "white" }}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUser(e.target.value)}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <br />
          
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             type="text"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             type="text"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <button onClick={() => handleTableTypeSelect("2-member table")}>
//             2-member table
//           </button>
//           <button onClick={() => handleTableTypeSelect("4-member table")}>
//             4-member table
//           </button>
//           <button onClick={() => handleTableTypeSelect("6-member table")}>
//             6-member table
//           </button>
//           <button onClick={() => handleTableTypeSelect("Hall")}>Hall</button>
//           <br />
//           <br />
//           <center>
//             {showConfirmButton && !reservationSuccess && (
//               <button onClick={handleConfirmReservation}>
//                 Confirm Reservation
//               </button>
//             )}
//           </center>
//           {reservationSuccess && (
//             <div>
//               <center>
//                 <h4>
//                   Your {selectedTableType} is booked on {date} at {time} successfully!
//                 </h4>
//                 <h2>Thank you for choosing us {name}!</h2>
//               </center>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;





import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';
import axios from 'axios';

function Booking() {
  // ... (your existing code)
  const location = useLocation();
  const name1 = location.state.id;
  const [username, setUser] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedTableType, setSelectedTableType] = useState("");
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const navigate = useNavigate();
  
  const handleMenuClick = () => {
    navigate('/menu', { state: { id: name1 } });
  };

  const handleBookingClick = () => {
    navigate('/booking', { state: { id: name1 } });
  };

  const handleTableTypeSelect = (tableType) => {
    setSelectedTableType(tableType);
    setShowConfirmButton(true);
  };

  const handleLogoutClick = () => {
    // Add any necessary logic for user logout, e.g., clearing user session

    // Navigate to the homepage
    navigate('/');
  };


  const sendConfirmationEmail = () => {
    const mailData = {
      to: 'user-email@example.com', // Use the user's email from the database here
      subject: 'Reservation Confirmation',
      text: `Dear ${name},\n\nYour ${selectedTableType} reservation on ${date} at ${time} has been confirmed.\n\nThank you for choosing us!\n\nBest regards,\nYour Restaurant Name`,
    };

    axios.post('http://localhost:4000/sendemail', mailData)
      .then((response) => {
        if (response.status === 200) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleConfirmReservation = () => {
    const reservationData = {
      username,
      name,
      phone,
      date,
      time,
      selectedTableType,
    };

    axios.post('http://localhost:4000/addreservation', reservationData)
      .then((response) => {
        if (response.status === 200) {
          // Reservation was successfully saved
          setReservationSuccess(true);

          // Send an email to the user
          sendConfirmationEmail();
        } else {
          console.error('Reservation failed');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // ... (your existing code)
  return (
    <div className="container-fluid" style={{ backgroundImage: "url('back1.jpg')", height: "800px", backgroundSize: "cover" }}>
      <div className="d-flex justify-content-between mb-3 ">
        <div>
          <button className="btn bg-none mt-3 text-white" onClick={handleMenuClick}>
            <h3>Menu</h3>
          </button>
          <button className="btn bg-none mt-3 text-white ml-3" onClick={handleBookingClick}>
            <h3>Booking</h3>
          </button>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle as={Button} className="btn mt-3 bg-white text-black" style={{ marginRight: "15px", width: "150px",border:"none" }}>
              {name1}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLogoutClick()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Rest of your code */}
      {/* ... */}
      <div className="col-md-10" style={{ paddingTop: "10px", paddingLeft: "500px" }}>
        <center>
          <h1 className="cc">Book your seats</h1>
        </center>
        <div style={{ height: "250px", width: "200px", float: "left", marginLeft: "70px", textAlign: "justify", color: "white", fontSize: "20px" }}>
          <label>User name:</label>
          <br />
          <br />
          <label>Name:</label>
          <br />
          <br />
          <label>Phone Number:</label>
          <br />
          <br />
          <label>Date (MM/DD/YYYY):</label>
          <br />
          <br />
          <label>Time<br />(HH:MM AM/PM):</label>
          <br />
          <br />
          <label>Select a Table Type:</label>
        </div>
        <div className="col-7" style={{ height: "300px", width: "400px", float: "left", textAlign: "justify", marginLeft: "50px", color: "white" }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <br />
          <br />
          <button onClick={() => handleTableTypeSelect("2-member table")}>
            2-member table
          </button>
          <button onClick={() => handleTableTypeSelect("4-member table")}>
            4-member table
          </button>
          <button onClick={() => handleTableTypeSelect("6-member table")}>
            6-member table
          </button>
          <button onClick={() => handleTableTypeSelect("Hall")}>Hall</button>
          <br />
          <br />
          <center>
            {showConfirmButton && !reservationSuccess && (
              <button onClick={handleConfirmReservation}>
                Confirm Reservation
              </button>
            )}
          </center>
          {reservationSuccess && (
            <div>
              <center>
                <h4>
                  Your {selectedTableType} is booked on {date} at {time} successfully!
                </h4>
                <h2>Thank you for choosing us {name}!</h2>
              </center>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;





// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Dropdown, Button } from 'react-bootstrap';
// import axios from 'axios';

// function Booking() {
//   const location = useLocation();
//   const name1 = location.state.id;
//   const [username, setUser] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [selectedTableType, setSelectedTableType] = useState("");
//   const [showConfirmButton, setShowConfirmButton] = useState(false);
//   const [reservationSuccess, setReservationSuccess] = useState(false);
//   const [userEmail, setUserEmail] = useState(""); // New state for storing user email

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch user email when the component mounts
//     axios.post('http://localhost:4000/getemail', { username: name1 })
//       .then((response) => {
//         setUserEmail(response.data.email);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [name1]);

//   const handleMenuClick = () => {
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     navigate('/booking', { state: { id: name1 } });
//   };

//   const handleTableTypeSelect = (tableType) => {
//     setSelectedTableType(tableType);
//     setShowConfirmButton(true);
//   };

//   const handleLogoutClick = () => {
//     // Add any necessary logic for user logout, e.g., clearing user session

//     // Navigate to the homepage
//     navigate('/');
//   };

//   const sendConfirmationEmail = () => {
//     const mailData = {
//       to: userEmail, // Use the dynamically fetched user email
//       subject: 'Reservation Confirmation',
//       text: `Dear ${name},\n\nYour ${selectedTableType} reservation on ${date} at ${time} has been confirmed.\n\nThank you for choosing us!\n\nBest regards,\nYour Restaurant Name`,
//     };

//     axios.post('http://localhost:4000/sendemail', mailData)
//       .then((response) => {
//         if (response.status === 200) {
//           console.log('Email sent successfully');
//         } else {
//           console.error('Failed to send email');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleConfirmReservation = () => {
//     const reservationData = {
//       username,
//       name,
//       phone,
//       date,
//       time,
//       selectedTableType,
//     };

//     axios.post('http://localhost:4000/addreservation', reservationData)
//       .then((response) => {
//         if (response.status === 200) {
//           // Reservation was successfully saved
//           setReservationSuccess(true);

//           // Send an email to the user
//           sendConfirmationEmail();
//         } else {
//           console.error('Reservation failed');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="container-fluid" style={{ backgroundImage: "url('back1.jpg')", height: "800px", backgroundSize: "cover" }}>
//       <div className="d-flex justify-content-between mb-3 ">
//         <div>
//           <button className="btn bg-none mt-3 text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none mt-3 text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div>
//           <Dropdown>
//             <Dropdown.Toggle as={Button} className="btn mt-3 bg-white text-black" style={{ marginRight: "15px", width: "150px", border: "none" }}>
//               {name1}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => handleLogoutClick()}>Log Out</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>

//       <div className="col-md-10" style={{ paddingTop: "10px", paddingLeft: "500px" }}>
//         <center>
//           <h1 className="cc">Book your seats</h1>
//         </center>
//         <div style={{ height: "250px", width: "200px", float: "left", marginLeft: "70px", textAlign: "justify", color: "white", fontSize: "20px" }}>
//           <label>User name:</label>
//           <br />
//           <br />
//           <label>Name:</label>
//           <br />
//           <br />
//           <label>Phone Number:</label>
//           <br />
//           <br />
//           <label>Date (MM/DD/YYYY):</label>
//           <br />
//           <br />
//           <label>Time<br />(HH:MM AM/PM):</label>
//           <br />
//           <br />
//           <label>Select a Table Type:</label>
//         </div>
//         <div className="col-7" style={{ height: "300px", width: "400px", float: "left", textAlign: "justify", marginLeft: "50px", color: "white" }}>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUser(e.target.value)}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <br />
//           <br />

//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             type="text"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <input
//             type="text"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//           />
//           <br />
//           <br />
//           <br />
//           <button onClick={() => handleTableTypeSelect("2-member table")}>
//             2-member table
//           </button>
//           <button onClick={() => handleTableTypeSelect("4-member table")}>
//             4-member table
//           </button>
//           <button onClick={() => handleTableTypeSelect("6-member table")}>
//             6-member table
//           </button>
//           <button onClick={() => handleTableTypeSelect("Hall")}>Hall</button>
//           <br />
//           <br />
//           <center>
//             {showConfirmButton && !reservationSuccess && (
//               <button onClick={handleConfirmReservation}>
//                 Confirm Reservation
//               </button>
//             )}
//           </center>
//           {reservationSuccess && (
//             <div>
//               <center>
//                 <h4>
//                   Your {selectedTableType} is booked on {date} at {time} successfully!
//                 </h4>
//                 <h2>Thank you for choosing us {name}!</h2>
//               </center>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;
