import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import NoPageDetected from "./Components/NoPageDetected/NoPageDetected";
import SignUp from "./Components/SignUp/SignUp";
import FrontPage from "./FrontPage/FrontPage";
import Navbar from "./Components/Navbar/Navbar";
import AccountDetails from "./Components/AccountDetails/AccountDetails"
function App() { 
  return (
    <Router>
      <div className="App">
        <div className="content">
          <FrontPage />
          <Navbar/>
          <Switch>
            {/* <Route exact path="/">
              
            </Route> */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/tlist/:id">
              <ProductDetails />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/accountDetails">
            <AccountDetails/>
            </Route>
            <Route path="*">
              <NoPageDetected />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
