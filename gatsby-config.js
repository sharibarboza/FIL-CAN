module.exports = {
  siteMetadata: {
    title: 'Filcan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'dates',
        path: `${__dirname}/dates/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'officers',
        path: `${__dirname}/leadership/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'churches',
        path: `${__dirname}/churches/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        maxWidth: 1240,
        wrapperStyle: 'z-index: 1'
      },
    }
  ]
}
