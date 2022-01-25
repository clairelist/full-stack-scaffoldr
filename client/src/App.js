//todos:: take care of scaffolding !
//import routing, other components etc
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import { Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
     
    <h2>Hello from app !</h2>
    <Link to='/register'>Click ME to sign UP !</Link>
    <Link to ='/logout'>Click ME to log OUT !</Link>
    
    <Route exact path='/login'>
      <Login />
    </Route>
    <Route path='/register'>
      <Register />
    </Route>
    <PrivateRoute path='/logout'>
      <Logout />
    </PrivateRoute>
   
    </div>
  );
}

export default App;
