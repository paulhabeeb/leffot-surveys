const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [
                new TsconfigPathsPlugin({
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                }),
            ],
        },
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const createSurveyPage = (template, uid) => {
        createPage({
            path: `/${uid}`,
            component: path.resolve(__dirname, `src/templates/${template}.js`),
            context: { uid },
        })
    }

    const surveyFragment = `
        edges {
            node {
                uid
            }
        }
    `

    const surveys = await graphql(`
        query RankSomeShoesQuery {
            allPrismicRankSomeShoes {
                ${surveyFragment}
            }
            allPrismicTopFiveShoes {
                ${surveyFragment}
            }
        }
    `)

    surveys.data.allPrismicRankSomeShoes.edges.forEach(({ node }) => {
        createSurveyPage('RankSomeShoes', node.uid)
    })

    surveys.data.allPrismicTopFiveShoes.edges.forEach(({ node }) => {
        createSurveyPage('TopFiveShoes', node.uid)
    })
}
