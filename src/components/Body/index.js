import React from 'react';
import Video from '../Video';
import List from '../List';
import Grid from '@material-ui/core/Grid';

const Body = (props) => {
    return (
        <div>
            <Grid container>
                <Grid xs={7}><Video videos={props.videos} /></Grid>
                <Grid xs={5}><List items={props.items} /></Grid>
            </Grid>
        </div>
    )
} 

export default Body;