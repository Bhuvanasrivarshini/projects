// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// function Menu(state) {
//   const location = useLocation()
//   console.log(location.state.name);
//   return (
//     <div className="container-fluid bg-dark text-white p-5">
//       <Link to="/menu">
//         <button className="btn  mt-3 bg-none" style={{color:"white"}}><h3>Menu</h3></button>
//       </Link>
//       <Link to="/booking">
//         <button className="btn  mt-3 bg-none" style={{color:"white"}}><h3>Booking </h3></button>
//       </Link>
//       <h1 className=" mb-5">Breakfast</h1>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
//           <h3  style={{marginLeft:"150px"}}>Idli</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}} >Dosa</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
//           <h3 style={{marginLeft:"130px"}}>Paratha</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Puri</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Vada</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}}>Upma</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
//         </div>
//       </div>

//       <h1 className=" mt-5">Veg</h1>
//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Full meals</h3>
//         </div>
        
//       </div>
 
//       <h1 className=" mt-5">Non-Veg</h1>
//       <div className="row">
//         {/* Non-Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
//         </div>
//       </div>

//       {/* Add more sections as needed */}
//       <div class="row">
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
//         </div>
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
//           <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
//         </div>
        
//         </div>

//         <div className="row">
//         {/*Non  Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
//           <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
//         </div>
        
//       </div>

//     </div>
//   );
// }

// export default Menu;










// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { useNavigate, useLocation } from 'react-router-dom';

// function Menu() {
//   const location = useLocation();
//   const name1 = location.state.id;

//   const navigate = useNavigate(); // Add this line to import useNavigate

//   const handleMenuClick = () => {
//     // Navigate to the Menu page
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     // Navigate to the Booking page
//     navigate('/booking', { state: { id: name1 } });
//   };

//   return (
//     <div className="container-fluid bg-dark text-white p-3">
//       {/* Rest of your code */}
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           {/* Use buttons and attach onClick handlers */}
//           <button className="btn bg-none text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div>
//           <button className="btn bg-white text-black" style={{marginRight:"15px",width:"150px"}} >{name1}</button>
//         </div>
//       </div>
//       {/* ... */}
//       <h1 className=" mb-5">Breakfast</h1>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
//           <h3  style={{marginLeft:"150px"}}>Idli</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}} >Dosa</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
//           <h3 style={{marginLeft:"130px"}}>Paratha</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Puri</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Vada</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}}>Upma</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
//         </div>
//       </div>

//       <h1 className=" mt-5">Veg</h1>
//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Full meals</h3>
//         </div>
        
//       </div>
 
//       <h1 className=" mt-5">Non-Veg</h1>
//       <div className="row">
//         {/* Non-Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
//         </div>
//       </div>

//       {/* Add more sections as needed */}
//       <div class="row">
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
//         </div>
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
//           <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
//         </div>
        
//         </div>

//         <div className="row">
//         {/*Non  Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
//           <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Menu;




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

// function Menu() {
//   const location = useLocation();
//   const name1 = location.state.id;

//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     navigate('/booking', { state: { id: name1 } });
//   };

//   return (
//     <div className="container-fluid bg-dark text-white p-3">
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <button className="btn bg-none text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div>
//           {/* Dropdown menu */}
//           <Dropdown>
//             <Dropdown.Toggle variant="white" id="dropdown-basic">
//               {name1}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/">Log Out</Dropdown.Item>
              
//               {/* Add more dropdown items as needed */}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>

//       {/* Rest of your code */}
//       {/* ... */}
//       <h1 className=" mb-5">Breakfast</h1>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
//           <h3  style={{marginLeft:"150px"}}>Idli</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}} >Dosa</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
//           <h3 style={{marginLeft:"130px"}}>Paratha</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Puri</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Vada</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}}>Upma</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
//         </div>
//       </div>

//       <h1 className=" mt-5">Veg</h1>
//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Full meals</h3>
//         </div>
        
//       </div>
 
//       <h1 className=" mt-5">Non-Veg</h1>
//       <div className="row">
//         {/* Non-Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
//         </div>
//       </div>

//       {/* Add more sections as needed */}
//       <div class="row">
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
//         </div>
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
//           <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
//         </div>
        
//         </div>

//         <div className="row">
//         {/*Non  Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
//           <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Menu;







// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useNavigate, useLocation } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

// function Menu() {
//   const location = useLocation();
//   const name1 = location.state ? location.state.id : null;

//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     navigate('/booking', { state: { id: name1 } });
//   };

//   return (
//     <div className="container-fluid bg-dark text-white p-3">
//       {/* Rest of your code */}
//       {/* ... */}
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <button className="btn bg-none text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div>
//           {/* <Dropdown>
//             <Dropdown.Toggle variant="white" id="dropdown-basic">
//               {name1}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/">Log Out</Dropdown.Item>
              
//               Add more dropdown items as needed
//             </Dropdown.Menu>
//           </Dropdown> */}

//           <Dropdown>
//             <Dropdown.Toggle variant="white" id="dropdown-basic">{name1}</Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => navigate('/', { state: { id: null } })}>Log Out
//             </Dropdown.Item>
//   {/* Add more dropdown items as needed */}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>

//       {/* Rest of your code */}
//       {/* ... */}
//       <h1 className=" mb-5">Breakfast</h1>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
//           <h3  style={{marginLeft:"150px"}}>Idli</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}} >Dosa</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
//           <h3 style={{marginLeft:"130px"}}>Paratha</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Puri</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Vada</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}}>Upma</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
//         </div>
//       </div>

//       <h1 className=" mt-5">Veg</h1>
//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Full meals</h3>
//         </div>
        
//       </div>
 
//       <h1 className=" mt-5">Non-Veg</h1>
//       <div className="row">
//         {/* Non-Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
//         </div>
//       </div>

//       {/* Add more sections as needed */}
//       <div class="row">
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
//         </div>
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
//           <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
//         </div>
        
//         </div>

//         <div className="row">
//         {/*Non  Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
//           <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Menu;





// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

// function Menu() {
//   const location = useLocation();
//   const name1 = location.state ? location.state.id : null;

//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     navigate('/booking', { state: { id: name1 } });
//   };

//   const handleLogoutClick = () => {
//     navigate('/', { state: { id: null } });
//   };

//   return (
//     <div className="container-fluid bg-dark text-white p-3">
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <button className="btn bg-none text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div className="ml-auto">
//           <button className="btn bg-none text-white" id="dropdown-button">
//             {name1}
//           </button>
//           <Dropdown align="end" className="position-absolute" style={{ top: '3rem', right: '1rem' }}>
//   <Dropdown.Toggle variant="white" id="dropdown-button">
//     {name1}
//   </Dropdown.Toggle>
//   <Dropdown.Menu>
//     <Dropdown.Item onClick={handleLogoutClick}>Log Out</Dropdown.Item>
//     {/* Add more dropdown items as needed */}
//   </Dropdown.Menu>
// </Dropdown>

//         </div>
//       </div>

//       {/* Rest of your code */}
//       {/* ... */}
//       <h1 className=" mb-5">Breakfast</h1>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
//           <h3  style={{marginLeft:"150px"}}>Idli</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}} >Dosa</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
//           <h3 style={{marginLeft:"130px"}}>Paratha</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Puri</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Vada</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}}>Upma</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
//         </div>
//       </div>

//       <h1 className=" mt-5">Veg</h1>
//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Full meals</h3>
//         </div>
        
//       </div>
 
//       <h1 className=" mt-5">Non-Veg</h1>
//       <div className="row">
//         {/* Non-Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
//         </div>
//       </div>

//       {/* Add more sections as needed */}
//       <div class="row">
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
//         </div>
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
//           <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
//         </div>
        
//         </div>

//         <div className="row">
//         {/*Non  Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
//           <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Menu;









// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

// function Menu() {
//   const location = useLocation();
//   const name1 = location.state ? location.state.id : null;

//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     navigate('/menu', { state: { id: name1 } });
//   };

//   const handleBookingClick = () => {
//     navigate('/booking', { state: { id: name1 } });
//   };

//   const handleLogoutClick = () => {
//     navigate('/', { state: { id: null } });
//   };

//   return (
//     <div className="container-fluid bg-dark text-white p-3">
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <button className="btn bg-none text-white" onClick={handleMenuClick}>
//             <h3>Menu</h3>
//           </button>
//           <button className="btn bg-none text-white ml-3" onClick={handleBookingClick}>
//             <h3>Booking</h3>
//           </button>
//         </div>
//         <div className="ml-auto">
//           <Dropdown show={true}>
//             <Dropdown.Toggle variant="white" id="dropdown-button">
//               {name1}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item onClick={handleLogoutClick}>Log Out</Dropdown.Item>
//               {/* Add more dropdown items as needed */}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>

//       {/* Rest of your code */}
//       {/* ... */}
//       <h1 className=" mb-5">Breakfast</h1>
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
//           <h3  style={{marginLeft:"150px"}}>Idli</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}} >Dosa</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
//           <h3 style={{marginLeft:"130px"}}>Paratha</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Puri</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
//           <h3 style={{marginLeft:"150px"}}>Vada</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Repeat the pattern for other items */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
//           <h3 style={{marginLeft:"140px"}}>Upma</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
//         </div>
//       </div>

//       <h1 className=" mt-5">Veg</h1>
//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
//         </div>
//       </div>

//       <div className="row">
//         {/* Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
//           <h3 style={{marginLeft:"120px"}}>Full meals</h3>
//         </div>
        
//       </div>
 
//       <h1 className=" mt-5">Non-Veg</h1>
//       <div className="row">
//         {/* Non-Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
//           <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
//           <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
//         </div>
//       </div>

//       {/* Add more sections as needed */}
//       <div class="row">
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
//         </div>
//       <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
//           <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
//         </div>
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
//           <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
//         </div>
        
//         </div>

//         <div className="row">
//         {/*Non  Veg items go here */}
//         <div className="col-md-4 mb-4">
//           <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
//           <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Menu;







import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';

function Menu() {
  const location = useLocation();
  const name1 = location.state ? location.state.id : null;

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    navigate('/menu', { state: { id: name1 } });
  };

  const handleBookingClick = () => {
    navigate('/booking', { state: { id: name1 } });
  };

  const handleLogoutClick = () => {
    navigate('/', { state: { id: null } });
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="container-fluid bg-dark text-white p-3">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <button className="btn bg-none text-white" onClick={handleMenuClick}>
            <h3>Menu</h3>
          </button>
          <button className="btn bg-none text-white ml-3" onClick={handleBookingClick}>
            <h3>Booking</h3>
          </button>
        </div>
        <div className="ml-auto">
          <Dropdown show={dropdownOpen} onToggle={handleDropdownToggle}>
            <Dropdown.Toggle
              as={Button}
              id="dropdown-button"
              className="btn bg-white text-black"
              onClick={handleDropdownToggle}
              style={{ marginRight: "15px", width: "150px", border:"none"}}
            >
              {name1}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogoutClick}>Log Out</Dropdown.Item>
              {/* Add more dropdown items as needed */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Rest of your code */}
      {/* ... */}
      <h1 className=" mb-5">Breakfast</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item1.jpeg" alt="" />
          <h3  style={{marginLeft:"150px"}}>Idli</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item2.jpeg" alt="" />
          <h3 style={{marginLeft:"120px"}}>Chapathi</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item3.jpeg" alt="" />
          <h3 style={{marginLeft:"140px"}} >Dosa</h3>
        </div>
      </div>

      <div className="row">
        {/* Repeat the pattern for other items */}
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item4.jpeg" alt="" />
          <h3 style={{marginLeft:"130px"}}>Paratha</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item5.jpeg" alt="" />
          <h3 style={{marginLeft:"150px"}}>Puri</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item6.jpeg" alt="" />
          <h3 style={{marginLeft:"150px"}}>Vada</h3>
        </div>
      </div>

      <div className="row">
        {/* Repeat the pattern for other items */}
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item7.jpeg" alt="" />
          <h3 style={{marginLeft:"140px"}}>Upma</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="item8.jpeg" alt="" />
          <h3 style={{marginLeft:"90px"}}>Semya Upma</h3>
        </div>
      </div>

      <h1 className=" mt-5">Veg</h1>
      <div className="row">
        {/* Veg items go here */}
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch1.jpeg" alt="" />
          <h3 style={{marginLeft:"100px"}}>veg Friedrice</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch4.jpeg" alt="" />
          <h3 style={{marginLeft:"100px"}}>Veg Biryani</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch9.jpeg" alt="" />
          <h3 style={{marginLeft:"120px"}}>Veg Pulao</h3>
        </div>
      </div>

      <div className="row">
        {/* Veg items go here */}
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch7.jpeg" alt="" />
          <h3 style={{marginLeft:"120px"}}>Full meals</h3>
        </div>
        
      </div>
 
      <h1 className=" mt-5">Non-Veg</h1>
      <div className="row">
        {/* Non-Veg items go here */}
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch2.jpeg" alt="" />
          <h3 style={{marginLeft:"100px"}}>Egg Friedrice</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch3.jpeg" alt="" />
          <h3 style={{marginLeft:"80px"}}>Chicken Friedrice</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnfried.png" alt="" />
          <h3 style={{marginLeft:"80px"}}>Prawn Friedrice</h3>
        </div>
      </div>

      {/* Add more sections as needed */}
      <div class="row">
      <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch5.jpeg" alt="" />
          <h3 style={{marginLeft:"90px"}}>Chicken Biryani</h3>
        </div>
      <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch6.jpeg" alt="" />
          <h3 style={{marginLeft:"40px"}}>Chicken Dhum Biryani</h3>
        </div>
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="prawnbiryani.jpeg" alt="" />
          <h3 style={{marginLeft:"90px"}}>Prawn Biryani</h3>
        </div>
        
        </div>

        <div className="row">
        {/*Non  Veg items go here */}
        <div className="col-md-4 mb-4">
          <img style={{height:"250px",width:"350px"}} className="img-fluid rounded" src="lunch8.jpeg" alt="" />
          <h3 style={{marginLeft:"60px"}}>Non-veg Full meals</h3>
        </div>
        
      </div>
    </div>
  );
}

export default Menu;
