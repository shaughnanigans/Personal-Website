module.exports = {
  siteMetadata: {
    title: "Lexi Shaughnessy | Personal Website",
    description: "Lexi Shaughnessy (she/her) is based in Calgary, Alberta. Over the past seven years, she has gained experience in web development, website maintenance, accessibility, content creation and data entry. She is always striving to learn new things.",
    siteUrl: 'https://lexishaughnessy.com',
    titleTemplate: "%s · Personal Website",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/projects`,
      },
    },
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '🌼'
      }
    },
  ],
};
