import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 200,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog({ open, handleSubmit, handleModalClose, handlePlaylistChange, playlists, value }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleModalClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Add To Playlist</DialogTitle>
        {playlists.length > 0 ? <DialogContent>
          <DialogContentText>
            You can add this song to the playlist listed below.
          </DialogContentText>
          <form className={classes.form} noValidate>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel htmlFor="max-width">select playlist</InputLabel>
              <Select
                autoFocus
                value={value}
                onChange={(e) => handlePlaylistChange(e)}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                {playlists.map((val, i) => (
                  <MenuItem value={val?.name} key={i}>{val?.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent> : 
        <DialogContent>
            <DialogContentText>
              Please create a playlist
          </DialogContentText>
          </DialogContent>}
        <DialogActions>
          {playlists?.length > 0 && <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>}
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}