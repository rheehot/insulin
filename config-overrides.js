const {
    override,
    fixBabelImports,
    addLessLoader
} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // '@primary-color': '#2f54eb'
            '@primary-color': 'rgb(31, 46, 134)',
            // Slider
// ---
            '@slider-margin': '14px 6px 10px',
            '@slider-track-background-color': 'rgba(58, 78, 206, 0.9)',
            '@slider-track-background-color-hover': '@primary-color',
            '@slider-handle-background-color': '@component-background',
            '@slider-handle-color': 'rgba(58, 78, 206, 0.9)',
            '@slider-handle-color-hover': '@primary-color',
            // @slider-handle-color-focus: tint(@primary-color, 20%);
            // @slider-handle-color-focus-shadow: fade(@primary-color, 20%);
            // @slider-dot-border-color-active: tint(@primary-color, 50%);
    
        },
    }),
);