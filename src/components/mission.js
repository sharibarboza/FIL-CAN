import React from 'react';
import Link from 'gatsby-link';

import 'font-awesome/css/font-awesome.css';

import Divider from './divider';

class Mission extends React.Component {
  render() {

    return (
      <div className="service_area" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title  t_center">
                            <h2>Our Mission</h2>
                                <Divider />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="single_service">
                            <div className="single_service_inner">
                                <div className="service_icon_1">
                                    <span><i className="fa fa-calendar"></i></span>
                                </div>
                                <div className="single_service_content">
                                    <h2>Annual Events</h2>
                                    <p>To organize and facilitate the annual summer Filipino-Canadian Camp Meeting.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single_service">
                            <div className="single_service_inner">
                                <div className="service_icon_1">
                                    <span><i className="fa fa-group"></i></span>
                                </div>
                                <div className="single_service_content">
                                    <h2>Community</h2>
                                    <p>To provide opportunities for members to meet and develop connections with others.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="single_service">
                            <div className="single_service_inner">
                                <div className="service_icon_1">
                                    <span><i className="fa fa-globe"></i></span>
                                </div>
                                <div className="single_service_content">
                                    <h2>Honoring Culture</h2>
                                    <p>To unite Filipino-Canadians around Alberta and celebrate our unique heritages.</p>

                                </div>
                            </div>
                        </div>

                        <div className="single_service">
                            <div className="single_service_inner">
                                <div className="service_icon_1">
                                    <span><i className="fa fa-leanpub"></i></span>
                                </div>
                                <div className="single_service_content">
                                    <h2>Spiritualism</h2>
                                    <p>To promote spiritual growth and evangelism within the Seventh-Day Adventist Church.</p>

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

export default Mission
