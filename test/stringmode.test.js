const mode = require('../index.js').method;
var assert = require('assert');

describe('Turns string to specify the mode', () => {
    let m;
    it('simple camel mode', () => {
        m = mode.camel;
        assert.equal(m(), '');
        assert.equal(m('a'), 'a');
        assert.equal(m('Is'), 'iS');
        assert.equal(m('aaa'), 'aAa');
        assert.equal(m('icaMel'), 'iCamel');
        assert.equal(m('ica]Mel'), 'iCa]mel');
    });
    it('multiple camel mode', () => {
        m = mode.camel; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'aDdd');
        assert.equal(m('ST', 'abcd'), 'stAbcd');
        assert.equal(m('IS', 'caMel'), 'isCamel');
        assert.equal(m('Is', 'CAmel', 'or', 'modE'), 'isCamelOrMode');
        assert.equal(m('Is', 'CAmel', 'or', ',modE'), 'isCamelOr,mode');
    });
    it('simple class mode', () => {
        m = mode.class; 
        assert.equal(m(), ''); 
        assert.equal(m('b'), 'B');
        assert.equal(m('aaa'), 'Aaa');
        assert.equal(m('Is'), 'Is');
        assert.equal(m('iClaSS'), 'Iclass');
        assert.equal(m('iCla.SS'), 'Icla.ss');
    });
    it('multiple class mode', () => {
        m = mode.class; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADdd');
        assert.equal(m('ST', 'abcd'), 'StAbcd');
        assert.equal(m('is', 'cLAss'), 'IsClass');
        assert.equal(m('is', 'CLass', 'oR', 'Mode'), 'IsClassOrMode');
        assert.equal(m('is', 'CLass', 'o/R', 'Mode'), 'IsClassO/rMode');
    });
    it('simple lower mode', () => {
        m = mode.lower; 
        assert.equal(m(), ''); 
        assert.equal(m('C'), 'c');
        assert.equal(m('ST'), 'st');
        assert.equal(m('Is'), 'is');
        assert.equal(m('iLOwer'), 'ilower');
        assert.equal(m('iL-Ower'), 'il-ower');
    });
    it('multiple lower mode', () => {
        m = mode.lower; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'addd');
        assert.equal(m('ST', 'abcd'), 'stabcd');
        assert.equal(m('is', 'loWer'), 'islower');
        assert.equal(m('is', 'LOwEr', 'oR', 'mode'), 'islowerormode');
        assert.equal(m('is', 'LOwE;r', 'oR', 'mode'), 'islowe;rormode');
    });
    it('simple upper mode', () => {
        m = mode.upper; 
        assert.equal(m(), ''); 
        assert.equal(m('D'), 'D');
        assert.equal(m('ST'), 'ST');
        assert.equal(m('Is'), 'IS');
        assert.equal(m('iUppER'), 'IUPPER');
        assert.equal(m('iUpp=ER'), 'IUPP=ER');
    });
    it('multiple upper mode', () => {
        m = mode.upper; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'STABCD');
        assert.equal(m('is', 'upper'), 'ISUPPER');
        assert.equal(m('is', 'UPPer', 'or', 'moDe'), 'ISUPPERORMODE');
        assert.equal(m('is', 'UP?Per', 'or', 'moDe'), 'ISUP?PERORMODE');
    });
    it('simple const mode', () => {
        m = mode.const; 
        assert.equal(m(), ''); 
        assert.equal(m('D'), 'D');
        assert.equal(m('ST'), 'ST');
        assert.equal(m('Is'), 'IS');
        assert.equal(m('iUppER'), 'IUPPER');
        assert.equal(m('iUpp=ER'), 'IUPP=ER');
    });
    it('multiple const mode', () => {
        m = mode.const; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'STABCD');
        assert.equal(m('is', 'upper'), 'ISUPPER');
        assert.equal(m('is', 'UPPer', 'or', 'moDe'), 'ISUPPERORMODE');
        assert.equal(m('is', 'UP?Per', 'or', 'moDe'), 'ISUP?PERORMODE');
    });
    it('simple underline mode', () => {
        m = mode.underln; 
        assert.equal(m(), ''); 
        assert.equal(m('E'), 'E');
        assert.equal(m('ST'), 'S_T');
        assert.equal(m('Is'), 'I_s');
        assert.equal(m('IunderLN'), 'I_underLN');
        assert.equal(m('IunderL<>N'), 'I_underL<>N');
    });
    it('multiple underline mode', () => {
        m = mode.underln; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'a_ddd');
        assert.equal(m('ST', 'abcd'), 'ST_abcd');
        assert.equal(m('is', 'underLN'), 'is_underLN');
        assert.equal(m('is', 'underLN', 'or', 'modE'), 'is_underLN_or_modE');
        assert.equal(m('is', 'underL<>N', 'or', 'modE'), 'is_underL<>N_or_modE');
    });
    it('simple underlnIncludeFirst mode', () => {
        m = mode.underlnIncludeFirst; 
        assert.equal(m(), ''); 
        assert.equal(m('E'), '_E');
        assert.equal(m('ST'), '_S_T');
        assert.equal(m('Is'), '_I_s');
        assert.equal(m('IunderLN'), '_I_underLN');
        assert.equal(m('IunderL<>N'), '_I_underL<>N');
    });
    it('multiple underlnIncludeFirst mode', () => {
        m = mode.underlnIncludeFirst; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), '_a_ddd');
        assert.equal(m('ST', 'abcd'), '_ST_abcd');
        assert.equal(m('is', 'underLN'), '_is_underLN');
        assert.equal(m('is', 'underLN', 'or', 'modE'), '_is_underLN_or_modE');
        assert.equal(m('is', 'underL<>N', 'or', 'modE'), '_is_underL<>N_or_modE');
    });
    it('simple midline mode', () => {
        m = mode.midln; 
        assert.equal(m(), ''); 
        assert.equal(m('f'), 'f');
        assert.equal(m('ST'), 'S-T');
        assert.equal(m('Is'), 'I-s');
        assert.equal(m('iMIDln'), 'i-MIDln');
        assert.equal(m('iM==IDln'), 'i-M==IDln');
    });
    it('multiple midline mode', () => {
        m = mode.midln; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'a-ddd');
        assert.equal(m('ST', 'abcd'), 'ST-abcd');
        assert.equal(m('is', 'MIDln'), 'is-MIDln');
        assert.equal(m('is', 'MIDln', 'or', 'mODe'), 'is-MIDln-or-mODe');
        assert.equal(m('is', `MID''ln`, 'or', 'mODe'), `is-MID''ln-or-mODe`);
    });
    it('simple midlnIncludeFirst mode', () => {
        m = mode.midlnIncludeFirst; 
        assert.equal(m(), ''); 
        assert.equal(m('f'), '-f');
        assert.equal(m('ST'), '-S-T');
        assert.equal(m('Is'), '-I-s');
        assert.equal(m('iMIDln'), '-i-MIDln');
        assert.equal(m('iM==IDln'), '-i-M==IDln');
    });
    it('multiple midlnIncludeFirst mode', () => {
        m = mode.midlnIncludeFirst; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), '-a-ddd');
        assert.equal(m('ST', 'abcd'), '-ST-abcd');
        assert.equal(m('is', 'MidLN'), '-is-MidLN');
        assert.equal(m('is', 'MidLN', 'or', 'modE'), '-is-MidLN-or-modE');
        assert.equal(m('is', 'iM==IDln', 'or', 'modE'), '-is-iM==IDln-or-modE');
    });
    it('simple doller mode', () => {
        m = mode.doller; 
        assert.equal(m(), ''); 
        assert.equal(m('g'), 'g');
        assert.equal(m('ST'), 'S$T');
        assert.equal(m('IS'), 'I$S');
        assert.equal(m('iDOLLer'), 'i$DOLLer');
        assert.equal(m('i{}DOLLer'), 'i${}DOLLer');
    });
    it('multiple doller mode', () => {
        m = mode.doller; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'a$ddd');
        assert.equal(m('ST', 'abcd'), 'ST$abcd');
        assert.equal(m('is', 'DOLLer'), 'is$DOLLer');
        assert.equal(m('is', 'DOLLer', 'or', 'mODe'), 'is$DOLLer$or$mODe');
        assert.equal(m('i[]s', 'DOLLer', 'or', 'mODe'), 'i[]s$DOLLer$or$mODe');
    });
    it('simple dollerIncludeFirst mode', () => {
        m = mode.dollerIncludeFirst; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), '$a');
        assert.equal(m('ST'), '$S$T');
        assert.equal(m('IS'), '$I$S');
        assert.equal(m('iDOLLer'), '$i$DOLLer');
        assert.equal(m('i{}DOLLer'), '$i${}DOLLer');
    });
    it('multiple dollerIncludeFirst mode', () => {
        m = mode.dollerIncludeFirst; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), '$a$ddd');
        assert.equal(m('ST', 'abcd'), '$ST$abcd');
        assert.equal(m('is', 'DOLLer'), '$is$DOLLer');
        assert.equal(m('is', 'DOLLer', 'or', 'mODe'), '$is$DOLLer$or$mODe');
        assert.equal(m('i[]s', 'DOLLer', 'or', 'mODe'), '$i[]s$DOLLer$or$mODe');
    });
    it('simple string reverse mode', () => {
        m = mode.reverse; 
        assert.equal(m(), ''); 
        assert.equal(m('h'), 'h');
        assert.equal(m('ST'), 'TS');
        assert.equal(m('is'), 'si');
        assert.equal(m('iReverse'), 'esreveRi');
        assert.equal(m('iRever.,se'), 'es,.reveRi');
    });
    it('multiple string reverse mode', () => {
        m = mode.reverse; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ddda');
        assert.equal(m('ST', 'abcd'), 'dcbaTS');
        assert.equal(m('is', 'reverse'), 'esreversi');
        assert.equal(m('is', 'reverse', 'or', 'mODe'), 'eDOmroesreversi');
        assert.equal(m('is', 'rever()se', 'or', 'mODe'), 'eDOmroes)(reversi');
    });
    it('simple upperlower reverse mode', () => {
        m = mode.upperlower; 
        assert.equal(m(), ''); 
        assert.equal(m('h'), 'H');
        assert.equal(m('ST'), 'st');
        assert.equal(m('is'), 'IS');
        assert.equal(m('iReverse'), 'IrEVERSE');
        assert.equal(m('iRever.,se'), 'IrEVER.,SE');
    });
    it('multiple upperlower reverse mode', () => {
        m = mode.upperlower; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'stABCD');
        assert.equal(m('is', 'reverse'), 'ISREVERSE');
        assert.equal(m('is', 'reverse', 'or', 'mODe'), 'ISREVERSEORModE');
        assert.equal(m('is', 'rever()se', 'or', 'mODe'), 'ISREVER()SEORModE');
    });
    it('simple upperlower and string reverse mode', () => {
        m = mode.upperlowerAndReverse; 
        assert.equal(m(''), ''); 
        assert.equal(m('h'), 'H');
        assert.equal(m('ST'), 'ts');
        assert.equal(m('is'), 'SI');
        assert.equal(m('iReverse'), 'ESREVErI');
        assert.equal(m('iRever.,se'), 'ES,.REVErI');
    });
    it('multiple upperlower and string reverse mode', () => {
        m = mode.upperlowerAndReverse; 
        assert.equal(m(''), '');
        assert.equal(m('a', 'ddd'), 'DDDA');
        assert.equal(m('ST', 'abcd'), 'DCBAts');
        assert.equal(m('is', 'reverse'), 'ESREVERSI');
        assert.equal(m('is', 'reverse', 'or', 'mODe'), 'EdoMROESREVERSI');
        assert.equal(m('is', 'rever()se', 'or', 'mODe'), 'EdoMROES)(REVERSI');
    });
    it('simple string reverse by word mode', () => {
        m = mode.reverseByWord; 
        assert.equal(m(), ''); 
        assert.equal(m('I'), 'I');
        assert.equal(m('ST'), 'TS');
        assert.equal(m('is'), 'si');
        assert.equal(m('iReverse'), 'esreveRi');
        assert.equal(m('iRever.,se'), 'es,.reveRi');
    });
    it('multiple string reverse by word mode', () => {
        m = mode.reverseByWord; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ddda');
        assert.equal(m('ST', 'abcd'), 'abcdST');
        assert.equal(m('is', 'reverse'), 'reverseis');
        assert.equal(m('is', 'reverse', 'or', 'mODe'), 'mODeorreverseis');
        assert.equal(m('is', 'rever()se', 'or', 'mODe'), 'mODeorrever()seis');
    });
    it('simple upperlower by word mode', () => {
        m = mode.upperlowerByWord; 
        assert.equal(m(), '');
        assert.equal(m('i'), 'I');
        assert.equal(m('ST'), 'st');
        assert.equal(m('is'), 'IS');
        assert.equal(m('iReverse'), 'IrEVERSE');
        assert.equal(m('iRever.,se'), 'IrEVER.,SE');
    });
    it('multiple upperlower by word mode', () => {
        m = mode.upperlowerByWord; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'stABCD');
        assert.equal(m('is', 'reverse'), 'ISREVERSE');
        assert.equal(m('is', 'reverse', 'or', 'mODe'), 'ISREVERSEORModE');
        assert.equal(m('is', 'rever()se', 'or', 'mODe'), 'ISREVER()SEORModE');
    });
    it('simple upperlower and string reverse by word mode', () => {
        m = mode.upperlowerAndReverseByWord; 
        assert.equal(m(''), ''); 
        assert.equal(m('i'), 'I');
        assert.equal(m('ST'), 'ts');
        assert.equal(m('is'), 'SI');
        assert.equal(m('iReverse'), 'ESREVErI');
        assert.equal(m('iRever.,se'), 'ES,.REVErI');
    });
    it('multiple upperlower and string reverse by word mode', () => {
        m = mode.upperlowerAndReverseByWord; 
        assert.equal(m(''), '');
        assert.equal(m('a', 'ddd'), 'DDDA');
        assert.equal(m('ST', 'abcd'), 'ABCDst');
        assert.equal(m('is', 'reverse'), 'REVERSEIS');
        assert.equal(m('is', 'reverse', 'or', 'mODe'), 'ModEORREVERSEIS');
        assert.equal(m('is', 'rever()se', 'or', 'mODe'), 'ModEORREVER()SEIS');
    });
    it('union of the functions', () => {
        assert.equal(mode.lower(mode.underln('lower', 'AND', 'underLN')), 'lower_and_underln'); 
        assert.equal(mode.upper(mode.midln('uppEr', 'AND', 'midln')), 'UPPER-AND-MIDLN'); 
    });
});