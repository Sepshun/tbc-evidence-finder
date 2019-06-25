module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        disableHostCheck: true
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/_tokens.scss";
                    @import "@/styles/_helpers.scss";
                `
            }
        }
    }
};
