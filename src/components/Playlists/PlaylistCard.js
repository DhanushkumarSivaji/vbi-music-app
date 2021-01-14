import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'space-between',
        cursor: 'pointer'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    }
}));


export default function PlaylistCard({ data }) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (data) => {
        localStorage.setItem("playlist",JSON.stringify(data))
        history.push({
            pathname: '/playlist',
            state: data
        })
    }

    return (
        <div style={{ marginTop: '20px' }}>
            { data?.length > 0 ? data?.map((val, i) => (
                <Card className={classes.root} onClick={() => handleClick(val)} key={i}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {val?.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {`contains ${val?.songs?.length} songs`}
                            </Typography>
                        </CardContent>
                    </div>
                    <div style={{ margin: '20px' }}>
                        {`Created at ${val?.createdAt}`}
                    </div>
                </Card>
            )) : <Typography component="h6" variant="h6" style={{textAlign:'center'}}>
                    No playlist to display. Please create one
                </Typography>}
        </div>


    )
}
