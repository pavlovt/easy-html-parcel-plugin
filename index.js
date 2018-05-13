module.exports = function (bundler) {
    bundler.addAssetType('md', require.resolve('./ehtml.js'));
};