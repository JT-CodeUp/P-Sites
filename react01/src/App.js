import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Create from './Components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';
// import PrimeNumberRenderer from './PrimeNumberRenderer';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <PrimeNumberRenderer/> */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
