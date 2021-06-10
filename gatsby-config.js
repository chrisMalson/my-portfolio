module.exports = {
  siteMetadata: {
    title: `Chris Malson - Developer`,
    description: `Chris Malson - UI Developer`,
    author: `Chris Malson`,
    email: `chris@malson.dev`,
    linkedin: `https://www.linkedin.com/in/chris-malson`,
    github: `https://github.com/chrisMalson/`
  },
  plugins: [
    'gatsby-plugin-material-ui',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-provide-react',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dev-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cm-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
