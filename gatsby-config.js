// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `W Starym Młynie`,
    author: {
      name: `Emil Małańczak`,
    },
    description: `Restauracja i Pensjonat „W Starym Młynie” to miejsce niezwykłe, pełne elegancji i pasji widoczne w każdym kącie tego uroczego obiektu.`,
    siteUrl: `http://www.stary-mlyn.com.pl`,
    keywords: [
      "restauracja",
      "pensjonat",
      "hotel",
      "restauracja milicz",
      "milicz",
      "ryby",
      "młyn",
      "stary młyn",
      "w starym młynie",
      "nocleg milicz",
    ],
    googleApi: process.env.GOOGLE_MAPS_KEY,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-vanilla-extract",
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `./src/images/` },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "W Starym Młynie",
        short_name: "W Starym Młynie",
        start_url: "/",
        // These can be imported once ESM support lands
        // background_color: "#ffe491",
        // theme_color: "#004ca3",
        icon: "src/images/favicon.ico",
      },
    },
  ],
}
