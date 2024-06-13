const srcFolder = './src';
const buildFolder = './build';

export const path = {
    clear: {
        build: `${buildFolder}`,
        watch: `${srcFolder}/**/*.*`
    },

    libraries: {
        src: `${srcFolder}/libraries/**/*.*`,
        build: `${buildFolder}/libraries/`,
        watch: `${srcFolder}/libraries/`,
    },

    scss: {
        src: `${srcFolder}/scss/main.scss`,
        build: `${buildFolder}/css`,
        watch: `${srcFolder}/**/*.scss`
    },

    js: {
        src: `${srcFolder}/js/main.js`,
        build: `${buildFolder}/js`,
        watch: `${srcFolder}/**/*.js`
    },

    images: {
        src: `${srcFolder}/images/*.{png,jpg,jpeg,gif,svg}`,
        build: `${buildFolder}/images`,
        watch: `${srcFolder}/images/**/*.{png,jpg,jpeg,gif,svg}`
    },

    fonts: {
        src: `${srcFolder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2}`,
        build: `${buildFolder}/fonts`,
        watch: `${srcFolder}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}`
    },
}