module.exports = function (bundler) {
    bundler.addAssetType('ehtml', require.resolve('./ehtml.js'));
};