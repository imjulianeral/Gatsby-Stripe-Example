require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price', 'Product'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
  ],
  siteMetadata: {
    title: 'easy store',
    url: 'https://easystore.com',
    description: 'Buy and acquire SWAG',
  },
}
