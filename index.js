const opts = require('./src/operators.js');
const mode = require('./src/mode.js');
const op = opts.opts;

module.exports.list = opts.methodlist;
module.exports.method = {
    camel: (...args) => mode(op.CAMEL, ...args),
    class: (...args) => mode(op.CLASS, ...args),
    lower: (...args) => mode(op.LOWER, ...args),
    upper: (...args) => mode(op.UPPER, ...args),
    const: (...args) => mode(op.UPPER, ...args),
    underln: (...args) => mode(op.UNLN, ...args),
    underlnIncludeFirst: (...args) => mode(op.PREUNLN, ...args),
    midln: (...args) => mode(op.MIDLN, ...args),
    midlnIncludeFirst: (...args) => mode(op.PREMIDLN, ...args),
    doller: (...args) => mode(op.DOLLER, ...args),
    dollerIncludeFirst: (...args) => mode(op.PREDOLLER, ...args),
    reverse: (...args) => mode(op.REVERSE, ...args),
    upperlower: (...args) => mode(op.UPPERLOWER, ...args),
    upperlowerAndReverse: (...args) => mode(op.UPPERLOWERANDREVERSE, ...args),
    reverseByWord: (...args) => mode(op.REVERSEBYWORD, ...args),
    upperlowerByWord: (...args) => mode(op.UPPERLOWERBYWORD, ...args),
    upperlowerAndReverseByWord: (...args) => mode(op.UPPERLOWERANDREVERSEBYWORD, ...args)
};