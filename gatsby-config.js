require("dotenv").config()

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-transition-link',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('autoprefixer')],
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'leffot-polls',
                schemas: {
                    top_five_shoes: require('./src/schemas/top_five_shoes.json'),
                },
            },
        },
    ],
}
