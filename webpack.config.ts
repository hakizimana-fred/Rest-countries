module.exports = {
    mode: "production",
    resolve: {
        extensions: [ '.ts', '.js' ],
        fallback: { "path": require.resolve("path-browserify") }
    }
}