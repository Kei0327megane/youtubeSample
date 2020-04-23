import React from 'react';
import Grid from '@material-ui/core/Grid';

const List = (props) => {
    const items = props.items.reverse().map((item) => {
        const url = 'https://www.youtube.com/embed/' + item.id.videoId;
        const title = item.snippet.title;

        return ( 
                <div>
                    <Grid container>
                        <Grid xs={8}>
                            <iframe 
                                title="ytplayer"
                                id="ytplayer" 
                                type="ytplayer" 
                                width="370" 
                                height="200"
                                src={url}
                                frameborder="0"
                            />
                        </Grid>
                        <Grid xs={4}>
                            {title}
                        </Grid>
                    </Grid>
                </div>

        )
    });

    return (
        <div>
          {items}
        </div>
    )
}

export default List;