import React from 'react';

import Divider from './divider';

import youtubePic from '../images/youtube-pic2.jpg';

class Youtube extends React.Component {
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
      			<img src={youtubePic} style={{
      				width: '90%'
      			}}/>
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
  	</div>
  	)
  }
}

export default Youtube
