import "./ProductDetails.css";
import { useEffect, useState } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../CustomHooks/useFetch";
const ProductDetails = () => {
  const { id } = useParams();
  const [addSell, setAddSell] = useState("");
  const { data, error, isLoading } = useFetch(
    "http://localhost:8000/tlist/" + id
  );
  const newSellQuantity =
    data && parseInt(data.productQuantity) - parseInt(addSell);
  const newSellTotalValue = data && parseInt(data.price) * newSellQuantity;
  const newAddQuantity =
    data && parseInt(data.productQuantity) + parseInt(addSell);
  const newAddTotalValue = data && parseInt(data.price) * newAddQuantity;
  const history = useHistory();
  useEffect(()=>{
    console.log(id);
    
  },[id])
  const sellProduct = () => {
    fetch("http://localhost:8000/tlist/" + id, {  
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productQuantity: newSellQuantity,
        totalValue: newSellTotalValue,
      }),
    }).then(() => {
      history.push("/home");
    });
  };
  const addProduct = () => {
    fetch("http://localhost:8000/tlist/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productQuantity: newAddQuantity,
        totalValue: newAddTotalValue,
      }),
    }).then(() => {
      history.push("/home");
    });
  };
  const handleDelete = () => {
    fetch("http://localhost:8000/tlist/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/home");
    });
  };
  return (
    <div className="product-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <div className="listDetail">
          <div className="listDetailInfo">
            <p>Mark: {data.name} </p>
            <p>Quantity: {data.productQuantity} units</p>
            <p>Price: {data.price} UZS</p>
            <p>Total: {data.totalValue} UZS</p>
            <button onClick={handleDelete} className="deleteBtn">Delete</button>
          </div>
          <div className="listDetailDown">
            <img src="../../images/noimg.jpg" alt="No Image Available" className="noImage"/>
            <div className="listDetailAddSell">
              <h2>Add / Sell Product</h2>
              <input
                type="text"
                className="numAddSell"
                value={addSell}
                onChange={(e) => setAddSell(e.target.value)}
              />
              <div className="btn2">
                <button className="add" onClick={addProduct}>
                  Add Product
                </button>
                <button className="sell" onClick={sellProduct}>
                  Sell Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
