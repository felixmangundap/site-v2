/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `site-v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",  "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        'Cabin: ital,wght@0,300;0,400;0,500;0,700;1,400;1,500;1,700',
        `Source Sans 3:ital,wght0,200..900;1,200..900`,
        `Libre Baskerville:ital,wght@0,400;0,700;1,400`,
        'Montserrat:300,400,500,700',
      ]
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};