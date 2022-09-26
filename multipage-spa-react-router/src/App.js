import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from "./components/MainHeader";
import ProductDetail from './pages/ProductDetail';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuotesDetails from './pages/QuotesDetails';
import LayoutMain from './components/layout/LayoutMain';

function App() {
  return (
    <>
      {/* <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main> */}
      <LayoutMain>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quotesId">
            <QuotesDetails />
          </Route>
          <Route path="/new-quotes">
            <NewQuotes />
          </Route>
        </Switch>
      </LayoutMain>

    </>

  );
}

export default App;
