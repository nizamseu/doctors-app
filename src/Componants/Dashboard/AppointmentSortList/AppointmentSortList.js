import { Button } from '@material-ui/core';
import React from 'react';
import { Table } from 'react-bootstrap';

const AppointmentSortList = ({loadData}) => {
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
                <Button>Action</Button>
            </td>
          </tr>
                  )
              }
        
        </tbody>
      </Table>
    );
};

export default AppointmentSortList;