module.exports = {
  siteMetadata: {
    title: `TØNNE`,
    description: `A Beer loving bar, in St. Martin's Square`,
    author: `@mrsomia`,
  },
   plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TØNNE`,
        short_name: `TØNNE`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffde37`,
        display: `minimal-ui`,
        icon: `src/images/tonne-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}