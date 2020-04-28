import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default class App extends Component {
  state = {
    videos: [],
    items: []
  }

  onSerchYoutube = (keyword) => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=1&key=${YOUTUBE_API_KEY}`;

    axios
      .get(url)
      .then(response => {
          this.setState({
            videos: response.data.items,
            items: this.state.items.concat(response.data.items),
            keyword: {keyword}
          });
      })
      .catch(() => {
          console.log('通信に失敗しました');
     });
  }

  render() {
    return (
      <div>
        <Header onSerchYoutube={this.onSerchYoutube} />
        <Body videos={this.state.videos} items={this.state.items} />
      </div>
    )
  }
}