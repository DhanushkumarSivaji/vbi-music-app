import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from './Card';


export default function MediaControlCard({songs}) {

  
    return (
        <Grid container spacing={3}>
           { songs !== null ? <Card data={songs} showSM={true} showMenu={true} /> : 
                <div  style={{textAlign:'center'}}>
                <Typography component="h6" variant="h6">
                    No songs to display
                </Typography>
                </div>
                }
        </Grid>
    );
}
