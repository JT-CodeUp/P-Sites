import "./AddProduct.css";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const AddProduct = () => {
  const [ name, setName ] = useState("");
  const [ productQuantity, setPquantity ] = useState("");
  const [ size, setSize ] = useState("");
  const [ price, setPrice ] = useState("");
  const [isPending, setPending] = useState(false);
  const history = useHistory();
  const totalValue =(`${price * productQuantity}`)
  const handleSubmit = (e) => {
    e.preventDefault();
    const productList = { name, productQuantity, size, price,totalValue };
    setPending(true);
    fetch("http://localhost:8000/tlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productList),
    }).then(() => {
        setPending(false);
        history.push("/");
      })
  };
  return (
    <div className="add-product">
      <h2>Create a new Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name of the Product:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Quantity of Product:</label>
        <input
          type="number"
          required
          value={productQuantity}
          onChange={(e) => setPquantity(e.target.value)}
        />
        <label>Size of Product:</label>
        <input
          type="number"
          required
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label>Price of Product:</label>
        <input
          type="number"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {isPending && <button className="btn" disabled>Adding product....</button>}
        {!isPending && <button className="btn1">Add Product</button>}
      </form>
    </div>
  );
};

export default AddProduct;
