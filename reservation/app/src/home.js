import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="row" style={{backgroundImage:"url('back2.png')",backgroundSize:'cover',height:"800px",paddingTop:'15px'}}>
        <div class="col-3"><Link to="/"><button className="a"><h2>Home</h2></button></Link></div>
        <div class="col-6"></div>
        <div class="col-1"><Link to="/mainlogin"><button className="b">Login</button></Link></div>
        <div class="col-1"><Link to="/signup"><button className="c">Sign Up</button></Link></div>
      
        <div class="col-1"></div>
        <center style={{paddingBottom:"300px",textShadow:"3px 3px 5px black"}}><h1 style={{color:"white"}}>Welcome to Our Restaurant</h1>
        <h3 style={{color:"white"}}>Have a successful reservation.</h3></center>
    </div>
  );
}

export default Home;