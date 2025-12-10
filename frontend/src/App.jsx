import './App.css';
import Header from './components/Header.jsx';
import Signup from './components/SignUp.jsx';
import Cart from './components/Cart.jsx';
import {BrowserRouter as Router,Router,Route} from 'react-router-dom';

function App() {
  const [cartItems,setCartItems] = useState([]);
  return (
    <div >
      <Router>
        <Header cartItems ={cartItems}/>
        <Routes>
          <Route exact path ='/' elements={<Products handleAddProduct ={handleAddProduct} />}/>
          <Route exact path ='/signup' elements={<SignUp />}/>
          <Route exact path ='/cart' elements={<Cart cartItems ={cartItems} handleAddProduct ={handleAddProduct}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
