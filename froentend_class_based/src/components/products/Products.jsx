import React, { Component } from "react";
import "./Products.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      productsList: null,
    };
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let response = await fetch("http://localhost:3300/products");
    let productsData = await response.json();
    this.setState({
      flag: true,
      productsList: productsData["productItems"],
    });
  };

  sortAlphebetAcending = () => {
    let productsCopy = [...this.state.productsList];
    let sorted = productsCopy.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    );
    this.setState({ flag: true, productsList: sorted });
  };

  sortAlphebetDecending = () => {
    let productsCopy = [...this.state.productsList];
    let sorted = productsCopy.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    );
    this.setState({ flag: true, productsList: sorted });
  };

  sortPriceAcending = () => {
    let productsCopy = [...this.state.productsList];
    this.setState({
      flag: true,
      productsList: productsCopy.sort((a, b) => a.price - b.price),
    });
  };

  sortPriceDecending = () => {
    let productsCopy = [...this.state.productsList];
    this.setState({
      flag: true,
      productsList: productsCopy.sort((a, b) => b.price - a.price),
    });
  };

  render() {
    const { flag, productsList } = this.state;
    const { handleAddProduct } = this.props;

    return flag ? (
      <div className="products-container">
        <div className="sort-button">
          <DropdownButton variant="success" title="Sort By">
            <Dropdown.Item onClick={this.sortAlphebetAcending}>
              A - to - Z
            </Dropdown.Item>
            <Dropdown.Item onClick={this.sortAlphebetDecending}>
              Z - to - A
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={this.sortPriceDecending}>
              High to Low
            </Dropdown.Item>
            <Dropdown.Item onClick={this.sortPriceAcending}>
              Low to High
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="products">
          {productsList.map((item) => (
            <div className="card" key={item.name}>
              <img
                className="product-image"
                src={item.image}
                alt={item.image}
              />
              <h2 className="product-name">{item.name}</h2>
              <div className="product-price">Rs.{item.price}/-</div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        <h1>Loading....!!!</h1>
      </div>
    );
  }
}

export default Products;
