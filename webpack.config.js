module.exports = {
    // Where to look for code first.
    entry: "./app/app.jsx",
    // Where to output all code.
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        // So that you don't have to specify file paths.
        alias: {
            // Paths are relative to app.jsx
            Main: "app/components/Main.jsx",
            Nav: "app/components/Nav.jsx"
        },
        // So that you don't have to specify file endings.
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        // Uses the babel loader on jsx files.
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};