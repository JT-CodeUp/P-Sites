import "./Home.css";
import useFetch from "../CustomHooks/useFetch";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/tlist");
  const history = useHistory();
 const auth = useFetch("http://localhost:4000/authenticated")
 const authen = auth && auth.data;
 const authentication = authen && authen.authenticated;
  const [searchValue, setSearchValue] = useState("");
  const sortedData = data && data.sort((a, b) => a.size - b.size);
  const totalQuantity =
    data && data.reduce((acc, num) => acc + parseInt(num.productQuantity), 0);
  const totalRevenue =
    data && data.reduce((acc, num) => acc + parseInt(num.totalValue), 0);
  const product =
    sortedData &&
    sortedData.filter(
      (item) => item.name.toLowerCase() === searchValue.toLowerCase()
    );
  const productItem = product && product[0];

  const handleEnterKey = (e) => {
    if (productItem) {
      history.push(`/tlist/${productItem.id}`);
    } else {
      history.push("/home");
      alert("The provided product is not available");
    }
  };
  if(authen && !authentication){
    history.push("/")
    return 0;
  }
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {/* <Navbar/> */}
      {data && (
        <div className="listInfo">
          <input
            type="text"
            className="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Enter the name of the product"
          />
          <button className="btn" onClick={handleEnterKey}>
            Search
          </button>
          <ul>
            <li>Products: {data.length}</li>
            <li>Total Quantity: {totalQuantity}</li>
            <li>Total Value: {totalRevenue} UZS</li>
          </ul>
        </div>
      )}
      {sortedData && (
        <div className="product-list">
          {sortedData.map((listData) => (
            <div className="list" key={listData.id}>
              <Link to={`/tlist/${listData.id}`}>
                <p className="name">Product Name: {listData.name}</p>
                <p className="pquantity">
                  Product Quantity: {listData.productQuantity}
                </p>
                <p className="size">Product Size: {listData.size} sm</p>
                <p className="price">Product Price: {listData.price} UZS</p>
                <p className="tvalue">Total Value: {listData.totalValue} UZS</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
