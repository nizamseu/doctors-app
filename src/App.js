import './App.css';
import {BrowserRouter as Router,Switch,Route,Link}from "react-router-dom";
import NotFound from './Componants/404/NotFound';
import Home from './Componants/Home/Home/Home';
import Appoinment from './Componants/Appoinment/Apoinment/Appoinment';
import { createContext, useState } from 'react';
import Login from './Componants/Login/Login/Login';
import Dashboard from './Componants/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Componants/Login/Login/PrivateRoute';
export const userAuth = createContext()
function App() {

  const  [userInfo,setUserInfo]= useState({
    name:'',
    photo:'',
    email:'',
    islogged:false,
    error:'',
    success:false,
    isValid:''
  })

  return (
    <div>
      <userAuth.Provider value={[userInfo,setUserInfo]}>

     
      <Router>  
          <Switch>
             <Route exact path='/'>
                <Home></Home>
             </Route>
             <Route path='/appoinment'>
                  <Appoinment></Appoinment>
             </Route>

            <Route path='/login'>
               <Login></Login>
            </Route>
              
            <PrivateRoute path='/dashboard/'>
                <Dashboard></Dashboard>
            </PrivateRoute>

              <Route path='*'>
                  <NotFound></NotFound>
              </Route>
          </Switch>
      </Router>
      </userAuth.Provider>
    </div>
  );
}

export default App;
