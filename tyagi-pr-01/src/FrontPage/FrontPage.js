import { useEffect, useState } from "react";
import "./FrontPage.css";
import useFetch from "../CustomHooks/useFetch";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
const FrontPage = () => {
  const currentUrl=window.location.href;
  const auth = useFetch("http://localhost:4000/authenticated");
  const authen= auth && auth.data;
  const authentication= authen && authen.authenticated;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { data } = useFetch("http://localhost:5000/accounts");
  const dataId =
    data &&
    data.find(
      (item) => item.email === loginEmail && item.password === loginPassword
    );
  const [falseUser, setFalseUser] = useState(false);
  const history = useHistory();
  const [isVisible, setIsVisible] = useState("password");
  const handlePass = (e) => {
    console.log();
    if (isVisible === "password") {
      setIsVisible("text");
    } else {
      setIsVisible("password");
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (dataId) {
      history.push("/home");
      fetch("http://localhost:4000/authenticated",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({authenticated:true,loginData:{
          loginemail:loginEmail,
          loginpassword:loginPassword
        }})
      })
    } else {
      setFalseUser(true);
      history.push("/");
    }
  };
  useEffect(()=>{
    if(currentUrl=="http://localhost:3000/"){
      fetch("http://localhost:4000/authenticated",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({authenticated:false,loginData:{
          loginemail:"",
          loginpassword:""
        }})
      })
    }
    
  },[currentUrl])
  if(authen && authentication){
    history.push("/home")
    return null;
  }
  return (
    <div className="front-page">
      <form className="loginForm" onSubmit={handleLogin}>
        {falseUser && (
          <p className="invalid">You've entered invalid login or password</p>
        )}
        <h2>LOG IN</h2>
        <input
          type="email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <div className="passwordWithIcon">
          <input
            type={isVisible}
            required
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
              setIsVisible(e.target.type);
            }}
            placeholder="Enter your password"
            className="passwordInput"
          />
          <img
            src="../images/password.png"
            alt="PassworImg"
            className="logoPass"
            onClick={handlePass}
          />
        </div>
        <button className="btn">Login In</button>
        <Link to="/signUp">
          <p>Create account if you do not have one</p>
        </Link>
      </form>
    </div>
  );
};
export default FrontPage;
