const opts = require('./src/operators.js');
const mode = require('./src/mode.js');

module.exports = {
    camel: (...args) =>mode(opts.CAMEL, ...args),
    class: (...args) => mode(opts.CLASS, ...args),
    lower: (...args) => mode(opts.LOWER, ...args),
    upper: (...args) => mode(opts.UPPER, ...args),
    const: (...args) => mode(opts.UPPER, ...args),
    underln: (...args) => mode(opts.UNLN, ...args),
    underlnIncludeFirst: (...args) => mode(opts.PREUNLN, ...args),
    midln: (...args) => mode(opts.MIDLN, ...args),
    midlnIncludeFirst: (...args) => mode(opts.PREMIDLN, ...args),
    doller: (...args) => mode(opts.DOLLER, ...args),
    dollerIncludeFirst: (...args) => mode(opts.PREDOLLER, ...args),
    reverse: (...args) => mode(opts.REVERSE, ...args),
    upperlower: (...args) => mode(opts.UPPERLOWER, ...args),
    upperlowerAndReverse: (...args) => mode(opts.UPPERLOWERANDREVERSE, ...args),
    reverseByWord: (...args) => mode(opts.REVERSEBYWORD, ...args),
    upperlowerByWord: (...args) => mode(opts.UPPERLOWERBYWORD, ...args),
    upperlowerAndReverseByWord: (...args) => mode(opts.UPPERLOWERANDREVERSEBYWORD, ...args)
};