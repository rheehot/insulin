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
            '@primary-1': 'color(~`colorPalette("@{geekblue-6}", 1) `)', // replace tint(@primary-color, 90%)
            '@primary-2': 'color(~`colorPalette("@{geekblue-6}", 2) `)', // replace tint(@primary-color, 80%)
            '@primary-3': 'color(~`colorPalette("@{geekblue-6}", 3) `)', // unused
            '@primary-4': 'color(~`colorPalette("@{geekblue-6}", 4) `)', // unused
            '@primary-5': 'color(~`colorPalette("@{geekblue-6}", 5) `)', // color used to control the text color in many active and hover states, replace tint(@primary-color, 20%)
            '@primary-6': '@geekblue-6', // color used to control the text color of active buttons, don't use, use @primary-color
            '@primary-7': 'color(~`colorPalette("@{geekblue-6}", 7) `)', // replace shade(@primary-color, 5%)
            '@primary-8': 'color(~`colorPalette("@{geekblue-6}", 8) `)', // unused
            '@primary-9': 'color(~`colorPalette("@{geekblue-6}", 9) `)', // unused
            '@primary-10': 'color(~`colorPalette("@{geekblue-6}", 10) `)', // unused
            '@tooltip-bg': '@primary-color',
            '@background-color-light': 'hsv(0, 0, 98%)', // background of header and selected item
            '@background-color-base':'hsv(0, 0, 92%)', // Default grey background color
            // Slider
// ---
            '@slider-margin': '14px 6px 10px',
            '@slider-rail-background-color': '@background-color-base',
            '@slider-rail-background-color-hover': '#e1e1e1',
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