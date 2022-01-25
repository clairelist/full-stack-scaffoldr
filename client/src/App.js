//todos:: take care of scaffolding !
//import routing, other components etc
import Login from './components/Login';
import Logout from './components/Logout';
import { Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
     
    <h2>Hello from app !</h2>
    <Route exact path='/'>
      <Login />
    </Route>
  
    <PrivateRoute path='/logout'>
      <Logout />
    </PrivateRoute>
   
    </div>
  );
}

export default App;
