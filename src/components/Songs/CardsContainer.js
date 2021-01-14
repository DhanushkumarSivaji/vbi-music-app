import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from './Card';
import {  SONGS_CARD_CONTAINER_NO_SONGS} from "../../constants";


export default function MediaControlCard({songs}) {

  
    return (
        <Grid container spacing={3}>
           { songs !== null ? <Card data={songs} showSM={true} showMenu={true} /> : 
               <Grid item xs={12}>
                <div  style={{textAlign:'center'}}>
                <Typography component="h6" variant="h6">
                    {SONGS_CARD_CONTAINER_NO_SONGS}
                </Typography>
                </div>
                </Grid>
                }
        </Grid>
    );
}
