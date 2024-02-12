// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
        // Add a rule to handle .mp4 files
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/media', // Output path for the files
                        publicPath: '/_next/static/media', // Public URL for the files
                    },
            },
        });

        return config;
    },
};
