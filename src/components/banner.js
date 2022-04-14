import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

class Banner extends React.Component {

  getParent() {
    let about = ['history', 'churches', 'bylaws', 'reports'];
    let leadership = ['board', 'committees', 'meetings'];
    let camp = ['resources'];

    let path = this.props.path;
    let parent;

    if (about.indexOf(path) >= 0) {
      parent = 'about';
    } else if (leadership.indexOf(path) >= 0) {
      parent = 'leadership';
    } else if (camp.indexOf(path) >= 0) {
      parent = 'campmeeting';
    } else {
      parent = 'home';
    }

    return parent;
  }

  render() {

    return (
      <div className="count_down_area banner_area" style={{
        height: '250px'
      }}>
        <Img
          className="breatcome_area"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
          sizes={this.props.bgImage.sizes}
        />
        <div className="overlay"></div>
        <div className="container-fluid banner-text">
          <div className="col-md-12">
            <div className="breatcome_title">
              <div className="breatcome_title_inner">
                <div className="breatcome_content">
                  <ul>
                    <li>{this.getParent()} <i className="fa fa-angle-right"></i> <strong style={{ color: '#57bff2' }}>{this.props.path}</strong></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
