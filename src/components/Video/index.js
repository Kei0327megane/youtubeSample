import React from 'react';
const Youtube = (props) => {

    const video = props.videos.map((video) => {
        const url = 'https://www.youtube.com/embed/' + video.id.videoId;
        const channelTitle = video.snippet.channelTitle;
        const description = video.snippet.description;
        const title = video.snippet.title;

        return ( 
                <div style={{margin: '20px', textAlign: 'center'}}>
                    <div>
                        <h1>{channelTitle}</h1>
                    </div>
                    <div>
                        <iframe 
                            title="ytplayer"
                            id="ytplayer" 
                            type="ytplayer" 
                            width="480" 
                            height="270"
                            src={url}
                            frameborder="0"
                        />
                    </div>
                    <div>
                        <h3>{title}</h3>
                        {description}
                    </div>
                </div>

        )
    });

    return (
        <div style={{marginTop: '10px'}}>
          {video}
        </div>
    )

}

export default Youtube;