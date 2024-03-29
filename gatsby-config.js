module.exports = {
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-preload-fonts',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-matomo',
            options: {
                siteId: '3',
                matomoUrl: 'https://stats.leffot.com',
                siteUrl: 'https://surveys.leffot.com',
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
                    survey_not_available: require('./src/schemas/survey_not_available.json'),
                    top_five_shoes: require('./src/schemas/top_five_shoes.json'),
                },
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                sassOptions: {
                    includePaths: ['src/styles'],
                },
            },
        },
    ],
}
