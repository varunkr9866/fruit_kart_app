import "./App.css";
import Header from "./components/header/Header.jsx";
import Signup from "./components/SignUp.jsx";
import Cart from "./components/Cart.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  const [cartItems, setCartItems] = useState([]);


  return (
    <div>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          exact
          path="/"
          elements={<Products handleAddProduct={handleAddProduct} />}
        />
        <Route exact path="/signup" elements={<SignUp />} />
        <Route
          exact
          path="/cart"
          elements={
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
