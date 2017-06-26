import initDistort from './src/js/init/distort.js'

(function (root, func) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['liquid-logo'], func);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = func;
    } else {
        // Browser globals (root is window)
        root.returnExports = func;
    }
}(this, initDistort));