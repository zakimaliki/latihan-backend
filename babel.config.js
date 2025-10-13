module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
                modules: 'auto', // This allows mixing of ES modules and CommonJS
            },
        ],
    ],
}
