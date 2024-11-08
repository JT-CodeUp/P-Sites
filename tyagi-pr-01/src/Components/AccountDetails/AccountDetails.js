import "./AccountDetails.css";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../CustomHooks/useFetch";
const AccountDetails = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newEmail,setNewEmail]=useState('');
  const history = useHistory();
  const newData = useFetch("http://localhost:4000/authenticated/");
  const { data } = useFetch("http://localhost:5000/accounts/");
  const dataId =
    data &&
    newData &&
    data.find(
      (item) =>
        item.email === newData.data.loginData.loginemail &&
        item.password === newData.data.loginData.loginpassword
    );
  const id = dataId && data && dataId.id;
  const logOut = () => {};
  // const  dataNew = useFetch(`http://localhost:5000/accounts/${id}`)
  const changePass = () => {
    fetch(`http://localhost:5000/accounts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: newPassword,
      }),
    }).then(()=>{
      history.push("/")
    });
    console.log("password changed");
  };
  const changeEmail=()=>{
    fetch(`http://localhost:5000/accounts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newEmail,
      }),
    }).then(()=>{
      history.push("/")
    });
    console.log("email changed");
  }

  // useEffect(() => {
  //   data && console.log(`http://localhost:5000/accounts/${id}`);
  // }, [data]);

  return (
    <div className="account-details">
      <p>Account Details</p>
      {dataId && (
        <div className="content">
          <p>{dataId.name}</p>
          <p>{dataId.email}</p>
          <p>{dataId.password}</p>
          <input
            type="text"
            className="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button type="button" onClick={changePass} className="passBtn">
            Change Password
          </button>
          <input
            type="email"
            className="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button type="button" onClick={changeEmail} className="emailBtn">
            Change Email
          </button>
        </div>
      )}
    </div>
  );
};
export default AccountDetails;
