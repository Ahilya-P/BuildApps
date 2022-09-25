import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import Headercomponent from './component/Headercomponent';
import UserProfile from './component/UserProfile';
import Auth from './component/Auth';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticate)
  return (
    <div className="App">
      <Headercomponent />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
}

export default App;
