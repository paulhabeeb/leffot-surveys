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
    const createPollPage = (template, uid) => {
        createPage({
            path: `/${uid}`,
            component: path.resolve(__dirname, `src/templates/${template}.js`),
            context: { uid },
        })
    }

    const pollFragment = `
        edges {
            node {
                uid
            }
        }
    `

    const polls = await graphql(`
        query RankSomeShoesQuery {
            allPrismicRankSomeShoes {
                ${pollFragment}
            }
            allPrismicTopFiveShoes {
                ${pollFragment}
            }
        }
    `)

    polls.data.allPrismicRankSomeShoes.edges.forEach(({ node }) => {
        createPollPage('RankSomeShoes', node.uid)
    })

    polls.data.allPrismicTopFiveShoes.edges.forEach(({ node }) => {
        createPollPage('TopFiveShoes', node.uid)
    })
}
