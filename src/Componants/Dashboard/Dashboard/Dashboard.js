import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DashBoardAppointmenta from '../DashBoardAppointmenta/DashBoardAppointmenta';
import { BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Patients from '../Patients/Patients';
import Prescription from '../Prescription/Prescription';
import Setting from '../Setting/Setting';
import View from '../View/View';
import ViewDialog from '../ViewDialog/ViewDialog';
import DashboardMain from '../DashboardMain/DashboardMain';

const Dashboard = () => {
    const [selectedDate,setSelectedDate]=useState(new Date().toLocaleDateString())
    const [loadData,setLoadData]=useState([])
    
    const handleDate = date=>{
        setSelectedDate(date.toLocaleDateString())
    }


    useEffect(()=>{
        fetch('http://localhost:5000/loadappointments',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({selectedDate})
        })
        .then(res=>res.json())
        .then(result=>{
            setLoadData(result)
        })

    },[selectedDate])

    return (
        
            <Router>
            <Switch>
            <div  className="container-fluid row ml-0">
               
                    <div className="col-md-2 ">
                            <Sidebar></Sidebar>

                            {/* <Link to='/dashboard/appointment'>Home</Link><br/>
                            <Link to='/dashboard/patients'>ME</Link><br/>
                            <Link to='/dashboard/prescription'>MY</Link><br/>
                            <Link to='/dashboard/appointment'>MINE</Link><br/>
                            <Link to='/dashboard/setting'>US</Link> */}
                    </div>
                    
                    
                    <div className="col-md-10 dashBoard">
                        <div className='d-flex row'>
                       
                            <Route path='/dashboard/appointment'>
                                <DashBoardAppointmenta></DashBoardAppointmenta>
                            </Route>
                            <Route path='/dashboard/dash'>
                               <DashboardMain></DashboardMain>
                            </Route>
                            <Route path='/dashboard/patients'>
                                    <Patients></Patients>
                            </Route>

                            <Route path='/dashboard/prescription'>
                                    <Prescription></Prescription>
                            </Route>

                            <Route path='/dashboard/setting'>
                                    <Setting></Setting>
                            </Route>
                            <Route path='/dashboard/view/:id'>
                                    <View></View>
                            </Route>
                       
                            <Route path='/dashboard/viewdialog'>
                                  <ViewDialog></ViewDialog>
                            </Route>
                        </div>
                    </div>
                   
                   
                
            </div>
            </Switch>
            </Router>
        
    );
};

export default Dashboard;