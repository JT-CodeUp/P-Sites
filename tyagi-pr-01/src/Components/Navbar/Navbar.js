import "./Navbar.css";
import { useEffect } from "react";
import useFetch from "../../CustomHooks/useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  const {data }= useFetch("http://localhost:4000/authenticated");
  const isAuthenticated = data && data.authenticated;
  // w
  if(data && !isAuthenticated){
    return null
  }   
  return (
      <div className="nav">
        <div className="navbar">
          <Link to='/home'>
            <p>TAJ STROY</p>
          </Link>
          <ul className="navbar-list">
            <li>
              <Link to="/home" className="list-item1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-product" className="list-item">
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/accountDetails" className="list-item01">
                <img src="../../images/user.png" alt="User Icon" className="userImg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  };
;

export default Navbar;
