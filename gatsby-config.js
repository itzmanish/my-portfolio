module.exports = {
  siteMetadata: {
    title: `Manish`,
    description: `My personal portfolio on the top of gatsby JS`,
    author: `@manish`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-145303436-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manish | Developer`,
        short_name: `izmanish`,
        start_url: `/`,
        background_color: `#335bdd`,
        theme_color: `#1a3899`,
        display: `minimal-ui`,
        icon: `src/images/icons/icon.png`, // This path is relative to the root of the site.
        // icons: [
        //   {
        //     src: `/favicons/android-chrome-192x192.png`,
        //     sizes: `192x192`,
        //     type: `image/png`,
        //   },
        //   {
        //     src: `/favicons/android-chrome-512x512.png`,
        //     sizes: `512x512`,
        //     type: `image/png`,
        //   },
        // ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
