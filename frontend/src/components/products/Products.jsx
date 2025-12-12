import React, { useEffect } from "react";
import "./Products.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function Products(props) {
  const [products, setProducts] = useState({ flag: false, productsList: null });

  async function getData() {
    let response = await fetch("http://localhost:3300/products");
    let productsData = await response.json();
    setProducts({ flag: true, productsList: productsData["productItems"] });
  }

  useEffect(() => {
    getData();
  }, []);

  function sortAlphebetAcending() {
    let productsCopy = [...products.productsList];
    let sorted = productsCopy.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    });
    setProducts({ flag: true, productsList: sorted });
  }

  function sortAlphebetDecending() {
    let productsCopy = [...products.productsList];
    let sorted = productsCopy.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
    });
    setProducts({ flag: true, productsList: sorted });
  }

  function sortPriceAcending() {
    let productsCopy = [...products.productsList];
    setProducts({
      flag: true,
      productsList: productsCopy.sort((a, b) => a.price - b.price),
    });
  }

  function sortPriceDecending() {
    let productsCopy = [...products.productsList];
    setProducts({
      flag: true,
      productsList: productsCopy.sort((a, b) => b.price - a.price),
    });
  }
  //console.log(products);
  return products.flag ? (
    <div className="products-container">
      <div className="sort-button">
        <DropdownButton variant="success" title="Sort By ">
          <Dropdown.Item eventKey="1" onClick={sortAlphebetAcending}>
            A -to- Z
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={sortAlphebetDecending}>
            Z -to- A
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3" onClick={sortPriceDecending}>
            High to Low
          </Dropdown.Item>
          <Dropdown.Item eventKey="4" onClick={sortPriceAcending}>
            Low to High
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="products">
        {products.productsList.map((item) => {
          return (
            <div className="card" key={item.name}>
              <div>
                <img
                  className="product-image"
                  src={item.image}
                  alt={item.image}
                />
              </div>
              <div>
                <h2 className="product-name">{item.name}</h2>
              </div>
              <div className="product-price">Rs.{item.price}/-</div>
              <div>
                <button
                  className="product-add-button"
                  onClick={() => props.handleAddProduct(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div>
      <h1>Loading....!!!</h1>
    </div>
  );
}

export default Products;
