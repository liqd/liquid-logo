import initDistort from './src/js/init/distort.js'

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['liquid-logo'], initDistort);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = initDistort;
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, initDistort));