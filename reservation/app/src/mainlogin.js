import { Link } from "react-router-dom";

function Mainlogin() {
  return (
    <div class="row"  style={{ height: '800px', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url("back5.jpg")', backgroundSize: 'cover' }}>
      
      <div class="col-12">
      <Link to="/admin"><button className="n">Admin login</button></Link><br />
      <Link to="/login"><button className="p">User login</button></Link>
      </div>
      
    </div>
  );
}

export default Mainlogin;









