import './App.css';
import {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";
import NotFound from './Componants/404/NotFound';
import Home from './Componants/Home/Home/Home';
function App() {
  return (
    <div>
      <Router>  
          <Switch>
             <Route exact path='/'>
                <Home></Home>
             </Route>
              <Route path='*'>
                  <NotFound></NotFound>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
