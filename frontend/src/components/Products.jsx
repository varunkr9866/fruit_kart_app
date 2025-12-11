import React from "react";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState({ flag: false, productsList: null });

  async function Products(props) {
    let backend_url = "http://localhost:3300/products";
    let response = await fetch(backend_url);
    let responseData = await response.json();
    setProducts({ flag: true, ProductList: responeData["productItems"] });
  }

  useEffect(() => {
    getData();
  }, []);

  return products.flag ? (
    <div className="card" key={item.name}>
      <div>
        <img className="product-image" src={item.image} alt={item.name} />
      </div>
      <div>
        <h2 className="product-name">{item.name}</h2>
      </div>
      <div className="product-price">Rs. {item.price}</div>
      <div>
        <button className="product-add-button">
          onClick = {() => props.handleAddProduct(item)}
        </button>
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading....!!!</h1>
    </div>
  );
}
