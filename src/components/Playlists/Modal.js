import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog({handleClose,open,value,onChange,onClick}) {

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist, please enter name of the playlist here. We will create you one.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={value}
            label="Email Playlist Name"
            type="text"
            onChange={onChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClick} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
