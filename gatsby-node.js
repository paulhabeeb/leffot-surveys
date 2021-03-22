const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin({
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            })],
        },
    })
}
