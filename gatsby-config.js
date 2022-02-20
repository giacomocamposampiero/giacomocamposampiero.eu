module.exports = {
    siteMetadata: {
      title: `giacomocamposampiero`
    },
    
    plugins: [
      {
        resolve: 'gatsby-plugin-styled-components'
      },
      'gatsby-plugin-react-helmet',
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: 'gatsby-remark-prismjs'
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `projects`,
          path: `${__dirname}/src/content/projects/`,
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        }
      },
      "gatsby-plugin-mdx",
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `website`,
          short_name: `website`,
          start_url: `/`,
          theme_color: `#ffff`,
          display: `standalone`,
          icon: `src/images/code.png`,
        }
      }
    ]
}