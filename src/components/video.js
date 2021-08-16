import React from 'react';

import Youtube from 'react-youtube';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.channel = this.props.channel;
    this.key = process.env.GATSBY_YOUTUBE_KEY;

    this.state = {
    	isLoaded: false,
    	isLive: false,
    	videoID: null,
    	error: null
    }
  }

  componentDidMount() {
  	const baseUrl = 'https://youtube.googleapis.com/youtube/v3/';

  	// Url for livestream
  	const liveUrl = baseUrl + 'search?part=snippet&channelId=' + this.channel + '&eventType=live&type=video&key=' + this.key;
  	const url1 = baseUrl + 'channels?part=contentDetails&id=' + this.channel + '&key=' + this.key;

  	fetch(liveUrl).then((response) => {
		  if (response.ok) {
		  	return response.json();
		  }
		})
		.then((json) => {
			try {
				this.setState({
					videoID: json.items[0].id.videoId,
					isLive: true,
					isLoaded: true
				});
				return;
			} catch(e) {

			}

			fetch(url1)
				.then((result) => result.json())
				.then((json) => {
	  			var uploadsID = json.items[0].contentDetails.relatedPlaylists.uploads;
	  			var url2 = baseUrl + 'playlistItems?part=snippet&maxResults=1&playlistId=' + uploadsID + '&key=' + this.key;

	  			fetch(url2)
	  				.then(result => result.json())
	  				.then(json => this.setState({
	  					isLoaded: true,
	  					videoID: json.items[0].snippet.resourceId.videoId
	  				})
	  			);
				});
		})
		.catch((error) => {
			console.log(error);
			this.setState({
				error: error
			});
		});

  }

  render() {

    return (
      <div className="video-wrapper">
      	<Youtube videoId={this.state.videoID} className="video-embed" />
      </div>
    )
  }
}

export default Video
