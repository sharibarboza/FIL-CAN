module.exports = {
  siteMetadata: {
    title: 'Filcan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'dates',
        path: `dates/`
      }
    }
  ],
}
