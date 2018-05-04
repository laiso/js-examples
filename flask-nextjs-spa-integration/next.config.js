const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()

module.exports.distDir = 'public';
module.exports.outdir = 'public';

module.exports.exportPathMap = () => ({
    "/": { page: "/" },
    "/about": { page: "/about" }
});