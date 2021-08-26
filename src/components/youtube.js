import React from 'react';

import Divider from './divider';
import Video from '../components/video'

import defaultPhoto from '../../static/assets/thumbnail.png';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.channel = 'UCRjkITPyt10LSzbOs5hojUw';
  }

  render() {
  	return (
  	<div className="container area-padding">
  		<div className="row">
  			<div className="col-md-12">
          <div className="section-title t_center">

            <h2 style={{
            	color: '#ffffff'
            }}>Videos & Livestreams</h2>
            <Divider />
          </div>
  			</div>
  		</div>

      <div><Video channel={this.channel} /></div>

      <div className="row">
      	<div style={{
      		display: 'block',
      		margin: '0 auto',
      		textAlign: 'center'
      	}}>

    			<div className="row">
    				<div className="col-md-12">
    					<div className="section-title t_center">
                <div className="donate-btn-header">
                  <a href="https://www.youtube.com/channel/UCRjkITPyt10LSzbOs5hojUw" target="_blank" className="red-on-white">View More Videos</a>
                </div>
    					</div>
    				</div>
    			</div>
      	</div>
      </div>
  	</div>
  	)
  }
}

export default Youtube
