const mode = require('../index.js');
var assert = require('assert');

describe('Turns string to specify the mode', () => {
    let m;
    it('simple camel mode', () => {
        m = mode.camel; 
        assert.equal(m(), '');
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'sT');
        assert.equal(m('aaa'), 'aAa');
        assert.equal(m('abcedfff'), 'aBcedfff');
        assert.equal(m('a[ceffff'), 'a[ceffff');
        assert.equal(m('ab,effff'), 'aB,effff');
    });
    it('multiple camel mode', () => {
        m = mode.camel; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'aDdd');
        assert.equal(m('ST', 'abcd'), 'stAbcd');
        assert.equal(m('aaa', 'a', 'xot'), 'aaaAXot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'abcedfffGggHijkkLmn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'abcedfffGggHijkk]lmn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'l,Mn'), 'abcedfffGggHijkkL,mn');
    });
    it('simple class mode', () => {
        m = mode.class; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'St');
        assert.equal(m('aaa'), 'Aaa');
        assert.equal(m('abcedfff'), 'Abcedfff');
        assert.equal(m('[ceffff'), '[ceffff');
        assert.equal(m('ab,effff'), 'Ab,effff');
    });
    it('multiple class mode', () => {
        m = mode.class; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADdd');
        assert.equal(m('ST', 'abcd'), 'StAbcd');
        assert.equal(m('aaa', 'a', 'xot'), 'AaaAXot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'AbcedfffGggHijkkLmn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'AbcedfffGggHijkk]lmn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',abcedfffGggHijkkLmn');
    });
    it('simple lower mode', () => {
        m = mode.lower; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'st');
        assert.equal(m('aaa'), 'aaa');
        assert.equal(m('abcedfff'), 'abcedfff');
        assert.equal(m('[ceffff'), '[ceffff');
        assert.equal(m('ab,effff'), 'ab,effff');
    });
    it('multiple lower mode', () => {
        m = mode.lower; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'addd');
        assert.equal(m('ST', 'abcd'), 'stabcd');
        assert.equal(m('aaa', 'a', 'xot'), 'aaaaxot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'abcedfffggghijkklmn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'abcedfffggghijkk]lmn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',abcedfffggghijkklmn');
    });
    it('simple upper mode', () => {
        m = mode.upper; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'ST');
        assert.equal(m('aaa'), 'AAA');
        assert.equal(m('abcedfff'), 'ABCEDFFF');
        assert.equal(m('[ceffff'), '[CEFFFF');
        assert.equal(m('ab,effff'), 'AB,EFFFF');
    });
    it('multiple upper mode', () => {
        m = mode.upper; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'STABCD');
        assert.equal(m('aaa', 'a', 'xot'), 'AAAAXOT');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'ABCEDFFFGGGHIJKKLMN');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'ABCEDFFFGGGHIJKK]LMN');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',ABCEDFFFGGGHIJKKLMN');
    });
    it('simple const mode', () => {
        m = mode.const; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'ST');
        assert.equal(m('aaa'), 'AAA');
        assert.equal(m('abcedfff'), 'ABCEDFFF');
        assert.equal(m('[ceffff'), '[CEFFFF');
        assert.equal(m('ab,effff'), 'AB,EFFFF');
    });
    it('multiple const mode', () => {
        m = mode.const; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'STABCD');
        assert.equal(m('aaa', 'a', 'xot'), 'AAAAXOT');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'ABCEDFFFGGGHIJKKLMN');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'ABCEDFFFGGGHIJKK]LMN');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',ABCEDFFFGGGHIJKKLMN');
    });
    it('simple underline mode', () => {
        m = mode.underln; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'S_T');
        assert.equal(m('aaa'), 'a_aa');
        assert.equal(m('abcedfff'), 'a_bcedfff');
        assert.equal(m('[ceffff'), '[_ceffff');
        assert.equal(m('ab,effff'), 'a_b,effff');
    });
    it('multiple underline mode', () => {
        m = mode.underln; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'a_ddd');
        assert.equal(m('ST', 'abcd'), 'ST_abcd');
        assert.equal(m('aaa', 'a', 'xot'), 'aaa_a_xot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'abcedfff_GGG_hijKK_lMn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'abcedfff_GGG_hijKK_]lMn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',abcedfff_GGG_hijKK_lMn');
    });
    it('simple underlnIncludeFirst mode', () => {
        m = mode.underlnIncludeFirst; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), '_a');
        assert.equal(m('ST'), '_S_T');
        assert.equal(m('aaa'), '_a_aa');
        assert.equal(m('abcedfff'), '_a_bcedfff');
        assert.equal(m('[ceffff'), '_[_ceffff');
        assert.equal(m('ab,effff'), '_a_b,effff');
    });
    it('multiple underlnIncludeFirst mode', () => {
        m = mode.underlnIncludeFirst; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), '_a_ddd');
        assert.equal(m('ST', 'abcd'), '_ST_abcd');
        assert.equal(m('aaa', 'a', 'xot'), '_aaa_a_xot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), '_abcedfff_GGG_hijKK_lMn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), '_abcedfff_GGG_hijKK_]lMn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), '_,abcedfff_GGG_hijKK_lMn');
    });
    it('simple midline mode', () => {
        m = mode.midln; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'S-T');
        assert.equal(m('aaa'), 'a-aa');
        assert.equal(m('abcedfff'), 'a-bcedfff');
        assert.equal(m('[ceffff'), '[-ceffff');
        assert.equal(m('ab,effff'), 'a-b,effff');
    });
    it('multiple midline mode', () => {
        m = mode.midln; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'a-ddd');
        assert.equal(m('ST', 'abcd'), 'ST-abcd');
        assert.equal(m('aaa', 'a', 'xot'), 'aaa-a-xot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'abcedfff-GGG-hijKK-lMn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'abcedfff-GGG-hijKK-]lMn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',abcedfff-GGG-hijKK-lMn');
    });
    it('simple midlnIncludeFirst mode', () => {
        m = mode.midlnIncludeFirst; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), '-a');
        assert.equal(m('ST'), '-S-T');
        assert.equal(m('aaa'), '-a-aa');
        assert.equal(m('abcedfff'), '-a-bcedfff');
        assert.equal(m('[ceffff'), '-[-ceffff');
        assert.equal(m('ab,effff'), '-a-b,effff');
    });
    it('multiple midlnIncludeFirst mode', () => {
        m = mode.midlnIncludeFirst; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), '-a-ddd');
        assert.equal(m('ST', 'abcd'), '-ST-abcd');
        assert.equal(m('aaa', 'a', 'xot'), '-aaa-a-xot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), '-abcedfff-GGG-hijKK-lMn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), '-abcedfff-GGG-hijKK-]lMn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), '-,abcedfff-GGG-hijKK-lMn');
    });
    it('simple doller mode', () => {
        m = mode.doller; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'S$T');
        assert.equal(m('aaa'), 'a$aa');
        assert.equal(m('abcedfff'), 'a$bcedfff');
        assert.equal(m('[ceffff'), '[$ceffff');
        assert.equal(m('ab,effff'), 'a$b,effff');
    });
    it('multiple doller mode', () => {
        m = mode.doller; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'a$ddd');
        assert.equal(m('ST', 'abcd'), 'ST$abcd');
        assert.equal(m('aaa', 'a', 'xot'), 'aaa$a$xot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'abcedfff$GGG$hijKK$lMn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'abcedfff$GGG$hijKK$]lMn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',abcedfff$GGG$hijKK$lMn');
    });
    it('simple dollerIncludeFirst mode', () => {
        m = mode.dollerIncludeFirst; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), '$a');
        assert.equal(m('ST'), '$S$T');
        assert.equal(m('aaa'), '$a$aa');
        assert.equal(m('abcedfff'), '$a$bcedfff');
        assert.equal(m('[ceffff'), '$[$ceffff');
        assert.equal(m('ab,effff'), '$a$b,effff');
    });
    it('multiple dollerIncludeFirst mode', () => {
        m = mode.dollerIncludeFirst; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), '$a$ddd');
        assert.equal(m('ST', 'abcd'), '$ST$abcd');
        assert.equal(m('aaa', 'a', 'xot'), '$aaa$a$xot');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), '$abcedfff$GGG$hijKK$lMn');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), '$abcedfff$GGG$hijKK$]lMn');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), '$,abcedfff$GGG$hijKK$lMn');
    });
    it('simple string reverse mode', () => {
        m = mode.reverse; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'TS');
        assert.equal(m('axd'), 'dxa');
        assert.equal(m('abcedfff'), 'fffdecba');
        assert.equal(m('[CEffFf'), 'fFffEC[');
        assert.equal(m('AB,eFfff'), 'fffFe,BA');
    });
    it('multiple string reverse mode', () => {
        m = mode.reverse; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ddda');
        assert.equal(m('ST', 'abcd'), 'dcbaTS');
        assert.equal(m('aaa', 'a', 'xot'), 'toxaaaa');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'nMlKKjihGGGfffdecba');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'nMl]KKjihGGGfffdecba');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), 'nMlKKjihGGGfffdecba,');
    });
    it('simple upperlower reverse mode', () => {
        m = mode.upperlower; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'st');
        assert.equal(m('aAa'), 'AaA');
        assert.equal(m('abcedfff'), 'ABCEDFFF');
        assert.equal(m('[CEffFf'), '[ceFFfF');
        assert.equal(m('AB,eFfff'), 'ab,EfFFF');
    });
    it('multiple upperlower reverse mode', () => {
        m = mode.upperlower; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'stABCD');
        assert.equal(m('aBa', 'a', 'xot'), 'AbAAXOT');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'ABCEDFFFgggHIJkkLmN');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'ABCEDFFFgggHIJkk]LmN');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',ABCEDFFFgggHIJkkLmN');
    });
    it('simple upperlower and string reverse mode', () => {
        m = mode.upperlowerAndReverse; 
        assert.equal(m(''), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'ts');
        assert.equal(m('aCa'), 'AcA');
        assert.equal(m('abcedfff'), 'FFFDECBA');
        assert.equal(m('[CEffFf'), 'FfFFec[');
        assert.equal(m('AB,eFfff'), 'FFFfE,ba');
    });
    it('multiple upperlower and string reverse mode', () => {
        m = mode.upperlowerAndReverse; 
        assert.equal(m(''), '');
        assert.equal(m('a', 'ddd'), 'DDDA');
        assert.equal(m('ST', 'abcd'), 'DCBAts');
        assert.equal(m('aBa', 'a', 'xot'), 'TOXAAbA');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'NmLkkJIHgggFFFDECBA');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'NmL]kkJIHgggFFFDECBA');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), 'NmLkkJIHgggFFFDECBA,');
    });
    it('simple string reverse by word mode', () => {
        m = mode.reverseByWord; 
        assert.equal(m(''), ''); 
        assert.equal(m('a'), 'a');
        assert.equal(m('ST'), 'TS');
        assert.equal(m('aCa'), 'aCa');
        assert.equal(m('abcedfff'), 'fffdecba');
        assert.equal(m('[CEffFf'), 'fFffEC[');
        assert.equal(m('AB,eFfff'), 'fffFe,BA');
    });
    it('multiple string reverse by word mode', () => {
        m = mode.reverseByWord; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ddda');
        assert.equal(m('ST', 'abcd'), 'abcdST');
        assert.equal(m('aBa', 'a', 'xot'), 'xotaaBa');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'lMnhijKKGGGabcedfff');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), ']lMnhijKKGGGabcedfff');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), 'lMnhijKKGGG,abcedfff');
    });
    it('simple upperlower by word mode', () => {
        m = mode.upperlowerByWord; 
        assert.equal(m(''), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'st');
        assert.equal(m('aCa'), 'AcA');
        assert.equal(m('abcedfff'), 'ABCEDFFF');
        assert.equal(m('[CEffFf'), '[ceFFfF');
        assert.equal(m('AB,eFfff'), 'ab,EfFFF');
    });
    it('multiple upperlower by word mode', () => {
        m = mode.upperlowerByWord; 
        assert.equal(m(), '');
        assert.equal(m('a', 'ddd'), 'ADDD');
        assert.equal(m('ST', 'abcd'), 'stABCD');
        assert.equal(m('aBa', 'a', 'xot'), 'AbAAXOT');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'ABCEDFFFgggHIJkkLmN');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), 'ABCEDFFFgggHIJkk]LmN');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), ',ABCEDFFFgggHIJkkLmN');
    });
    it('simple upperlower and string reverse by word mode', () => {
        m = mode.upperlowerAndReverseByWord; 
        assert.equal(m(), ''); 
        assert.equal(m('a'), 'A');
        assert.equal(m('ST'), 'ts');
        assert.equal(m('aCa'), 'AcA');
        assert.equal(m('abcedfff'), 'FFFDECBA');
        assert.equal(m('[CEffFf'), 'FfFFec[');
        assert.equal(m('AB,eFfff'), 'FFFfE,ba');
    });
    it('multiple upperlower and string reverse by word mode', () => {
        m = mode.upperlowerAndReverseByWord; 
        assert.equal(m(''), '');
        assert.equal(m('a', 'ddd'), 'DDDA');
        assert.equal(m('ST', 'abcd'), 'ABCDst');
        assert.equal(m('aBa', 'a', 'xot'), 'XOTAAbA');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', 'lMn'), 'LmNHIJkkgggABCEDFFF');
        assert.equal(m('abcedfff', 'GGG', 'hijKK', ']lMn'), ']LmNHIJkkgggABCEDFFF');
        assert.equal(m(',abcedfff', 'GGG', 'hijKK', 'lMn'), 'LmNHIJkkggg,ABCEDFFF');
    });
});