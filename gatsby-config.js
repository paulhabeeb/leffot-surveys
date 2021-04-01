require("dotenv").config()

module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                sassOptions: {
                    includePaths: ['src/styles'],
                },
            },
        },
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
                    rank_some_shoes: require('./src/schemas/rank_some_shoes.json'),
                    success_page: require('./src/schemas/success_page.json'),
                    top_five_shoes: require('./src/schemas/top_five_shoes.json'),
                },
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
    ],
}
