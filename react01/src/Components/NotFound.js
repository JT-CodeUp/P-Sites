import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page can not be founded</p>
            <Link to='/'>Back to the Home page </Link>
        </div>
     );
}
 
export default NotFound;