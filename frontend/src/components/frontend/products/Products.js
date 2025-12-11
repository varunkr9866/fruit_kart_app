import React from "react";
import "./Products.css";
import data from "../../backend/data";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

function Products(props) {
    const { productItems } = data;
    const [products, setProducts] = useState(productItems);


    function sortAlphebetAcending() {
        let productsCopy = [...products];
        let sorted = productsCopy.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1;
        });
        setProducts(sorted);
    }

    function sortAlphebetDecending() {
        let productsCopy = [...products];
        let sorted = productsCopy.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1;
        });
        setProducts(sorted);
    }

    function sortPriceAcending() {
        let productsCopy = [...products];
        setProducts(productsCopy.sort((a, b) => a.price - b.price));
    }

    function sortPriceDecending() {
        let productsCopy = [...products];
        setProducts(productsCopy.sort((a, b) => b.price - a.price));
    }

    return (
        <div className="products-container">
            <div className="sort-button">
                <DropdownButton variant="success" title="Sort By ">
                    <Dropdown.Item eventKey="1" onClick={sortAlphebetAcending}>A -to- Z</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={sortAlphebetDecending}>Z -to- A</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="3" onClick={sortPriceDecending}>High to Low</Dropdown.Item>
                    <Dropdown.Item eventKey="4" onClick={sortPriceAcending}>Low to High</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="products">
                {products.map(item => {
                    return (
                        <div className="card" key={item.name}>
                            <div>
                                <img className="product-image" src={item.image} alt={item.image}/>
                            </div>
                            <div>
                                <h2 className="product-name">
                                    {item.name}
                                </h2>
                            </div>
                            <div className="product-price">
                                Rs.{item.price}/-
                            </div>
                            <div>
                                <button className="product-add-button"
                                    onClick={() => props.handleAddProduct(item)}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Products;