import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AppointmentSortList = ({loadData}) => {
const history=useHistory();

const handleChange=(e,id)=>{
  const isVisited=e.target.value
  console.log(isVisited,id);
  fetch(`http://localhost:5000/visited`,{
  method:'PATCH',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({isVisited:isVisited,id:id})
})
.then(res=>res.json())
.then(success=>{
  success&& history.go('/')
})
}



    return (
        <Table  responsive className='table table-borderless' >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
              {
                  loadData&& loadData.map((item,index)=>
          <tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.date}</td>
            <td>
            <select onChange={e=>handleChange(e,item._id)} className='form-select ' name="isVisited" >
            
             <option value="">{item.isVisited}</option>
              <option value="Not Visited">Not Visited</option>
              <option value="Visited">Visited</option>
             
            </select>
                {/* <Button>Action</Button> */}
            </td>
          </tr>
                  )
              }
        
        </tbody>
      </Table>
    );
};

export default AppointmentSortList;