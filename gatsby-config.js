module.exports = {
  siteMetadata: {
    title: `sagara webdev portfolio`,
    description: `this is my personal web dev portfolio`,
    author: `sagara@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    twitterUsername: "@sagara",
    image: "/twitter-img.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
