/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `projects`,
      // Path to the directory
      path: `${__dirname}/src/projects/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
   },
},
  ],
  siteMetadata: {
    title: 'test new site',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2023 test new site',
    contact: 'admin@test-new-site.com.au'
  }
}
