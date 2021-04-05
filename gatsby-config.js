/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Jagodajnia',
    description: 'Strona plantacji Jagody Kamczackiej',
    author: 'Jakub Ziemba',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          assets: './assets',
          components: './components',
          fonts: './fonts',
          images: './images',
          styles: './styles',
          utils: './utils',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'jagoda',
        accessToken: `${process.env.GATSBY_PRISMIC}`,
        linkResolver: ({ node, key, value }) => doc => {},
        fetchLinks: [],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer },
        },
        schemas: { product: require('./src/schemas/product.json') },
        lang: '*',
        prismicToolbar: true,
        typePathsFilenamePrefix: 'prismic-typepaths---jagoda',
        shouldDownloadImage: () => false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
  ],
}
