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
        path: `dates/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'officers',
        path: `leadership/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'churches',
        path: `churches/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    }
  ]
}
