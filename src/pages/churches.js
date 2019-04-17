import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Scrollchor from 'react-scrollchor';
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Divider from '../components/divider';
import MapPanel from '../components/mappanel';

class ChurchesPage extends React.Component {
  constructor(props) {
    super(props);

    try {
      this.churches = props.data.churches.edges;
    } catch(e) {
      this.churches = [];
    }
    this.panels = [];
  }

  truncateTitle(title) {
    if (title.length < 45) {
      return title;
    } else {
      return title.substring(0, 40) + ' ... '
    }
  }

  initializeChurchPanels() {
    let panels = [];

    for (let i = 0; i < this.churches.length; i++) {
      let node = this.churches[i].node;
      let church = node.frontmatter;
      let body = <div style={{ marginBottom: '5px' }}><span>{church.address}</span><br />
        <span>{church.pastor}</span><br /><hr />
        <span><i className="fa fa-phone"></i>&nbsp; {church.phone}</span><br />
        <span><i className="fa fa-globe"></i>&nbsp; <a href={church.website} target="_blank">Church Website</a></span></div>;

      let element = <div id={church.title} key={node.id}><MapPanel
        heading={church.title}
        address={church.address}
        body={body}
      /></div>;

      panels.push(element);
    }

    return panels;
  }

  initializeChurchPhotos() {
    let elements = [];

    if (this.churches == undefined) {
      return;
    }

    for (let i = 0; i < this.churches.length; i++) {
      let node = this.churches[i].node;
      let church = node.frontmatter;
      let key = node.id;
      let anchor = '#' + church.title;

      let element = <div className="col-md-4 col-xs-12 col-sm-6" key={key}>
        <div className="single_event_adn kc-elm kc-css-73682">
          <div className="astute-single-event_adn">

            <div className="em-content-image astute-event-thumb_adn">
              <Img className="church-image" alt="" sizes={church.photo.childImageSharp.sizes} />
              <div className="readmore_icon_adn">
                <Scrollchor to={anchor} animate={{offset: -150, duration: 300}}><i className="fa fa-info"></i></Scrollchor>
              </div>
              {church.website != null
                ?
                <a href={church.website} target="_blank">
                <div className="event_date">
  								<span className="fa fa-link"></span>
                </div>
                </a>
                :
                <div></div>
              }
            </div>
            <div className="em-event-content-area_adn ">

              <div className="event-page-title_adn ">
                <h2><Scrollchor to={anchor} animate={{offset: -150, duration: 300}}>{this.truncateTitle(church.title)}</Scrollchor></h2>
                <div className="astute-event-meta-left_adn">
                  <span><i className="fa fa-map-marker"></i>{church.city}</span>
                </div>
                <div className="astute-event-meta-right_adn">
                  <span><Scrollchor to={anchor} animate={{offset: -150, duration: 300}}>See more info <i className="fa fa-info-circle"></i></Scrollchor></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      elements.push(element);
    }

    return elements;
  }

  render() {
    return (
      <div>
        <Helmet title="Filcan | Churches"/>

        <div className="event_area">
      		<div className="container">
      			<div className="row">
              {this.initializeChurchPhotos()}
      			</div>
      		</div>
      	</div>

        <Divider />

        <div className="container" style={{
          padding: '30px 15px 100px'
        }}>
          {this.initializeChurchPanels()}
        </div>
      </div>
    )
  }

}

export default ChurchesPage

export const query = graphql`
  query ChurchQuery {
    churches: allMarkdownRemark(
  	   filter: { fileAbsolutePath: { regex: "/(churches)/.*\\.md$/" } }
       sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            city
            address
            pastor
            phone
            website
            photo {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
