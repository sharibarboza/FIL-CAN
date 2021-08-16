import React from 'react';

import Divider from './divider';
import Video from '../components/video'

import defaultPhoto from '../../static/assets/thumbnail.png';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.image = props.img;
    this.channel = 'UCRjkITPyt10LSzbOs5hojUw';
  }

  getImage() {
    let element;
    try {
      element = <div className="img-wrapper"><img src={this.image.childImageSharp.sizes.src} alt="" /></div>;
    } catch(e) {
      element = <img src={defaultPhoto} />
    }

    return element;
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
      <div className="row">
      	<div style={{
      		display: 'block',
      		margin: '0 auto',
      		textAlign: 'center'
      	}}>
      		<a href="https://www.youtube.com/channel/UCRjkITPyt10LSzbOs5hojUw" target="_blank">
      			{this.getImage()}
      		</a>
      		<div style={{
      			paddingTop: '40px'
      		}}>
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="section-title t_center">
	                <div className="donate-btn-header">
	                  <a href="https://www.youtube.com/channel/UCRjkITPyt10LSzbOs5hojUw" target="_blank" className="red-on-white">Watch Now</a>
	                </div>
	    					</div>
	    				</div>
	    			</div>
      		</div>
      	</div>
      </div>
      <div><Video channel={this.channel} /></div>
  	</div>
  	)
  }
}

export default Youtube
