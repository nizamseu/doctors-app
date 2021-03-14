import { Button } from '@material-ui/core';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const ViewDialog = ({item,handleClickOpen,handleClose,open}) => {

    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <h1>Hello World</h1>
    </Dialog>
        </div>
    );
};

export default ViewDialog;