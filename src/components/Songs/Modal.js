import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function MaxWidthDialog({ open, handleSubmit, handleModalClose, handlePlaylistChange, playlists, value }) {
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
          <FormControl component="fieldset">
              <RadioGroup
                aria-label="playlist"
                name="playlist1"
                value={value}
                onChange={(e) => handlePlaylistChange(e)}
              >
                {playlists.map((val, i) => (
                  <FormControlLabel value={val?.name} key={i} control={<Radio />} label={val?.name} />
                ))}
              </RadioGroup>
        </FormControl>

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