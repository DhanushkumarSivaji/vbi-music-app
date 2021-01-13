import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Card';


export default function MediaControlCard({songs}) {

    return (
        <Grid container spacing={3}>
           { songs !== null ? <Card data={songs}/> : null}
        </Grid>
    );
}
