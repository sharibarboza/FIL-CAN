import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";
import { Button, Form, Input } from 'reactstrap';

import Divider from './divider';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  getEmail() {
    return "mailto:" + this.email;
  }

  render() {

    return (
      <div className="contact_area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title1  t_center">
                <h2>Our Contact</h2>
                <Divider white={true} />
                <p className=" text-alignm1">Please send us a message if you have inquiries about attending Camp Meeting or in general any questions regarding the Filipino-Canadian Adventist Association of Alberta.</p>
              </div>
            </div>
          </div>
          <div className="row" style={{
            paddingTop: '50px'
          }}>
            <div className="col-md-6 col-xs-12">
              <div className="single_plases">
                <div className="single_plases_inner">
                  <div className="plases_icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="plases_text">
                    <p>{this.props.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="single_plases">
                <div className="single_plases_inner">
                  <div className="plases_icon">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <div className="plases_text">
                    <p><a href={this.getEmail()} className="email-span">{this.props.email}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="em_contact_form">
              <Form method="POST" action="/submitted/" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                <Input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>
                <div className="contact_form_inner">
                  <div className="form_field">
                    <div className="form_field_inner">
                      <Input type="text" name="name" placeholder="Name" required={true} onChange={this.handleChange} />
                    </div>
                    <div className="form_field_inner">
                      <Input type="email" name="email" placeholder="Email" required={true} onChange={this.handleChange} />
                    </div>

                    <div className="form_field_comment">
                      <div className="field_comment_inner">
                        <Input type="textarea" name="message" placeholder="Message" required={true} cols="30" rows="10" onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_bnt">
                  <button type="submit">submit</button>
                </div>
              </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
