const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#06599F', '@border-radius-base': '5px', '@font-size-base': '18px'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};