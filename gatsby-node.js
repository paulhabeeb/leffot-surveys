const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@lib': path.resolve(__dirname, 'src/lib'),
            },
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
