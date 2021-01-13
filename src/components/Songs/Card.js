import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import Img1 from '../../img/img.jpg';
import { truncate } from '../../utils'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid white'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard({ data }) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            {data.map((val, i) => (
                <Grid item xs={12} sm={6}>
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {truncate(val.title)}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {truncate(val.title)}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton aria-label="previous">
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon className={classes.playIcon} />
                                </IconButton>
                                <IconButton aria-label="next">
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>

                            </div>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={Img1}
                            title="Live from space album cover"
                        />
                    </Card>
                </Grid>
            ))}
        </>
    );
}
