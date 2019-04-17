import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Contact from '../components/contact'

class ContactPage extends React.Component {

  render() {
    const contact = get(this, 'props.data.contact.edges.0.node.frontmatter');

    return (
      <div>
        <Helmet title="Filcan | Contact Us"/>

        <Contact phone={contact.phone} email={contact.title} />
      </div>
    )
  }

}

export default ContactPage

export const query = graphql`
  query ContactQuery {
    contact: allMarkdownRemark(
      limit: 1
    	filter: { fileAbsolutePath: { regex: "/(contact)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            phone
          }
        }
      }
    }
  }
`
