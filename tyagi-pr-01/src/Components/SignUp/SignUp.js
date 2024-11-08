import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./SignUp.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../CustomHooks/useFetch";
const SignUp = () => {
  const [name, setName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { data } = useFetch("http://localhost:5000/accounts");
  const [isVisible, setIsVisible] = useState("password");
  const isOkLogin =
    data && data.some((item) => item.name === name && item.email === email);
  const handleCreate = (e) => {
    e.preventDefault();
    if (!isOkLogin) {
      const accList = { name, email, password, profileImg };
      fetch("http://localhost:5000/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(accList),
      }).then(() => history.push("/"));
    } else {
      alert("The provided name or login is already taken or logged in");
    }
  };
  const handleVisible = () => {
    if (isVisible === "password") {
      setIsVisible("text");
    } else {
      setIsVisible("password");
    }
  };
  return (
    <div className="sign-up">
      <form className="form" onSubmit={handleCreate}>
        <h2>SIGN UP</h2>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name."
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email."
        />
        <input
          type={isVisible}
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsVisible(e.target.type);
          }}
          placeholder="Enter your password."
        />
        <img
          src="../../images/password.png"
          alt="PasswordImage"
          className="passLogo"
          onClick={handleVisible}
        />
        <label htmlFor="">Enter your profile photo</label>
        <input
          type="file"
          accept="image/*"
          value={profileImg}
          onChange={(e) => {
            setProfileImg(e.target.value);
          }}
        />
        <button className="btn">Create Account</button>
        <Link to="/">
          <p>Log in</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
