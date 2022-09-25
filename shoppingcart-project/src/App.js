import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products'
import { useSelector } from 'react-redux';

function App() {
  //use store key
  const showCart = useSelector((state) => state.ui.cartIsVisible )
  return (
    <div className="App">
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>

    </div>
  );
}

export default App;
