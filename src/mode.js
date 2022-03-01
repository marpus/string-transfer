const opts = require('./operators.js').opts;
const UPPER = 65;
const LOWER = 91; 

let isObject = obj => typeof obj === 'object' && obj != null; 
let isArray = o => Array.isArray(o) && o.length !== 0; 
let isNullString = str => typeof str === 'string' && str !== '';

function simpleMode() {
    let opt = arguments[0], str = arguments[1], str2;
    switch(opt) {
        case opts.CAMEL: 
            str = str.toLowerCase();
            str.length === 1 ? false : str = str[0] + str[1].toUpperCase() + str.substring(2);
            break;  
        case opts.CLASS: 
            str = str.toLowerCase();
            str = str.length === 1 ? str.toUpperCase() : str[0].toUpperCase() + str.substring(1);
            break;  
        case opts.LOWER:
            str = str.toLowerCase();
            break;
        case opts.UPPER:
            str = str.toUpperCase();
            break;
        case opts.UNLN: 
            str.length === 1 ? '' : str = `${str[0]}_${str.substring(1)}`;
            break;
        case opts.PREUNLN:
            str = str.length === 1 ? `_${str}` :`_${str[0]}_${str.substring(1)}`;
            break;
        case opts.MIDLN: 
            str.length === 1 ? '' : str = `${str[0]}-${str.substring(1)}`;
            break;
        case opts.PREMIDLN:
            str = str.length === 1 ? `-${str}` :`-${str[0]}-${str.substring(1)}`;
            break;
        case opts.DOLLER:
            str.length === 1 ? '' : str = `${str[0]}$${str.substring(1)}`;
            break;
        case opts.PREDOLLER:
            str = str.length === 1 ? `$${str}` :`$${str[0]}$${str.substring(1)}`;
            break;
        case opts.REVERSE:
        case opts.REVERSEBYWORD:
            str.length === 1 ? null : str = [...str].reverse().join('');
            break;
        case opts.UPPERLOWER:
        case opts.UPPERLOWERBYWORD:
            str2 = '';
            for(let i=0; i<str.length; i++) {
                str2 += str[i].charCodeAt() >= UPPER && str[i].charCodeAt() < LOWER ? str[i].toLowerCase() : str[i].toUpperCase();
            }
            break;
        case opts.UPPERLOWERANDREVERSE:
        case opts.UPPERLOWERANDREVERSEBYWORD:
            str = simpleMode(opts.UPPERLOWER, ...[...arguments].slice(1));
            if(str.length !== 1) str = simpleMode(opts.REVERSE, str);
            break;
    }
    return str2 || str;
}

function multipleMode() {
    let opt = arguments[0], strArr = [], str = '', len = arguments.length - 1, len2 = arguments.length;
    switch(opt) {
        case opts.CAMEL: 
            for(let i=1; i<len2; i++) { 
                i === 1 ? strArr.push(arguments[i].toLowerCase()) :
                strArr.push(arguments[i][0].toUpperCase() + arguments[i].substring(1).toLowerCase());
            }
            break;  
        case opts.CLASS: 
            for(let i=1; i<len2; i++) { 
                strArr.push(arguments[i][0].toUpperCase() + arguments[i].substring(1).toLowerCase());
            }
            break;  
        case opts.LOWER:
            for(let i=1; i<len2; i++) {
                strArr.push(arguments[i].toLowerCase());
            }
            break;
        case opts.UPPER:
            for(let i=1; i<len2; i++) {
                strArr.push(arguments[i].toUpperCase());
            }
            break;
        case opts.UNLN: 
            strArr.push(arguments[1]);
            for(let i=2; i<len2; i++) { 
                strArr.push(`_${arguments[i]}`);
            }
            break;
        case opts.PREUNLN:
            for(let i=1; i<len2; i++) { 
                strArr.push(`_${arguments[i]}`);
            }
            break;
        case opts.MIDLN: 
            strArr.push(arguments[1]);
            for(let i=2; i<len2; i++) {
                strArr.push(`-${arguments[i]}`);
            }
            break;
        case opts.PREMIDLN:
            for(let i=1; i<len2; i++) { 
                strArr.push(`-${arguments[i]}`);
            }
            break;
        case opts.DOLLER:
            strArr.push(arguments[1]);
            for(let i=2; i<len2; i++) {
                strArr.push(`$${arguments[i]}`);
            }
            break;
        case opts.PREDOLLER:
            for(let i=1; i<len2; i++) { 
                strArr.push(`$${arguments[i]}`);
            }
            break;
        case opts.UPPERLOWER:
        case opts.UPPERLOWERBYWORD:
            for(let i=1; i<len2; i++) {
                str = ''; 
                for(let j=0; j<arguments[i].length; j++) {
                    str += arguments[i][j].charCodeAt() >= UPPER && arguments[i][j].charCodeAt() < LOWER ? 
                    arguments[i][j].toLowerCase() : 
                    arguments[i][j].toUpperCase();  
                }
                strArr.push(str);
            }
            break;
        case opts.REVERSE:
            for(let i=len; i>0; i--) {
                strArr.push([...arguments[i]].reverse().join(''));
            } 
            break;
        case opts.REVERSEBYWORD:
            strArr.push(...[...arguments].slice(1).reverse());
            break;
        case opts.UPPERLOWERANDREVERSE: 
            str2 = multipleMode(opts.REVERSE, ...[...arguments].slice(1));
            strArr.push(simpleMode(opts.UPPERLOWER, str2));
            break;
        case opts.UPPERLOWERANDREVERSEBYWORD:
            str2 = multipleMode(opts.REVERSEBYWORD, ...[...arguments].slice(1));
            strArr.push(simpleMode(opts.UPPERLOWERBYWORD, str2));
            break;
    }
    return strArr.join('');
}

module.exports = (...args) => {
    let len = args.length;
    if(!args[1] || len === 1) return '';
    switch(len) {
        case 2: return simpleMode(...args); break;
        default: return multipleMode(...args); 
    }
};