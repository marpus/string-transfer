# string-transfer v1.0.0
> This is a function for parsing into specified string pattern 
based on the parameters of function to pass.

> 这是一个功能，它根据要传递的函数参数转换成指定的字符串模式。

> How to get start
```
npm i string-transfer@latest
```

> How to import function of 'string-transfer'. 
```
const stringmode = require('string-transfer').method;
```

> How to use

> There are some methods to call in the listA.
```
var listA = [
    'camel', 
    'class',
    'lower', 
    'upper',
    'const',
    'underln', 
    'underlnIncludeFirst',  
    'midln', 
    'midlnIncludeFirst', 
    'doller', 
    'dollerIncludeFirst', 
    'reverse', 
    'upperlower', 
    'upperlowerAndReverse', 
    'reverseByWord', 
    'upperlowerByWord', 
    'upperlowerAndReverseByWord'
]
```

> 1. Following down two situations you will get the string of null:
> a. You are passing a parameter which is a string of null;
> b. You a't passed any parameter.
```
stringmode.camel('') => '';
stringmode.underln() => '';
```

> 2. Following down you will get the same string if the function parameter is not in [A-Za-z].
```
stringmode.camel(',') => ',';
stringmode.camel(']STr') => ']Str';
stringmode.camel['is', 'NuMber,)'] => 'isNumber,)';
``` 

> 3. As examples => camel.
```
stringmode.camel('a') => 'a';
stringmode.camel('Is') => 'iS';
stringmode.camel('icaMel') => 'iCamel';
stringmode.camel('ica]Mel') => 'iCa]mel';
stringmode.camel('IS', 'caMel') => 'isCamel';
stringmode.camel('Is', 'CAmel', 'or', 'modE') => 'isCamelOrMode';
stringmode.camel('Is', 'CAmel', 'or', ',modE') => 'isCamelOr,Mode';
```

> 4. As examples => class.
```
stringmode.class('b') => 'B';
stringmode.class('Is') => 'Is';
stringmode.class('iClaSS') => 'Iclass';
stringmode.class('iCla.SS') => 'Icla.ss';
stringmode.class('is', 'cLAss') => 'IsClass';
stringmode.class('is', 'CLass', 'oR', 'Mode') => 'IsClassOrMode';
stringmode.class('is', 'CLass', 'o/R', 'Mode') => 'IsClassO/rMode';
```

> 5. As examples => lower.
```
stringmode.lower('C') => 'c';
stringmode.lower('Is') => 'is';
stringmode.lower('iLOwer') => 'ilower';
stringmode.lower('iL-Ower') => 'il-ower';
stringmode.lower('is', 'loWer') => 'islower';
stringmode.lower('is', 'LOwEr', 'oR', 'mode') => 'islowerormode';
stringmode.lower('is', 'LOwE;r', 'oR', 'mode') => 'islowe;rormode';
```

> 6. As examples => upper(the same as function of const).
```
stringmode.upper('D') => 'D';
stringmode.upper('Is') => 'IS';
stringmode.upper('iUppER') => 'IUPPER';
stringmode.const('iUpp=ER') => 'IUPP=ER';
stringmode.const('is', 'upper') => 'ISUPPER';
stringmode.const('is', 'UPPer', 'or', 'moDe') => 'ISUPPERORMODE';
stringmode.const('is', 'UP?Per', 'or', 'moDe') => 'ISUP?PERORMODE';
```

> 7. As examples => underln | underlnIncludeFirst
```
// underln
stringmode.underln('E') => 'E';
stringmode.underln('Is') => 'I_s';
stringmode.underln('IunderLN') => 'I_underLN';
stringmode.underln('IunderL<>N') => 'I_underL<>N';
stringmode.underln('is', 'underLN') => 'is_underLN';
stringmode.underln('is', 'underLN', 'or', 'modE') => 'is_underLN_or_modE';
stringmode.underln('is', 'underL<>N', 'or', 'modE') => 'is_underL<>N_or_modE';

// underlnIncludeFirst
stringmode.underlnIncludeFirst('E') => '_E';
stringmode.underlnIncludeFirst('Is') => '_I_s';
stringmode.underlnIncludeFirst('IunderLN') => '_I_underLN';
stringmode.underlnIncludeFirst('IunderL<>N') => '_I_underL<>N';
stringmode.underlnIncludeFirst('is', 'underLN') => '_is_underLN';
stringmode.underlnIncludeFirst('is', 'underLN', 'or', 'modE') => '_is_underLN_or_modE';
stringmode.underlnIncludeFirst('is', 'underL<>N', 'or', 'modE') => '_is_underL<>N_or_modE';
```

> 8. As examples => midln | midlnIncludeFirst
```
// midln
stringmode.midln('f') => 'f';
stringmode.midln('Is') => 'I-s';
stringmode.midln('iMIDln') => 'i-MIDln';
stringmode.midln('iM==IDln') => 'i-M==IDln';
stringmode.midln('is', 'MIDln') => 'is-MIDln';
stringmode.midln('is', 'MIDln', 'or', 'mODe') => 'is-MIDln-or-mODe';
stringmode.midln('is', 'MID''ln', 'or', 'mODe') => 'is-MID''ln-or-mODe';

// midlnIncludeFirst
stringmode.midlnIncludeFirst('f') => '-f';
stringmode.midlnIncludeFirst('Is') => '-I-s';
stringmode.midlnIncludeFirst('iMIDln') => '-i-MIDln';
stringmode.midlnIncludeFirst('iM==IDln') => '-i-M==IDln';
stringmode.midlnIncludeFirst('is', 'MidLN') => '-is-MidLN';
stringmode.midlnIncludeFirst('is', 'MidLN', 'or', 'modE') => '-is-MidLN-or-modE';
stringmode.midlnIncludeFirst('is', 'iM==IDln', 'or', 'modE') => '-is-iM==IDln-or-modE';
```

> 9. As examples => doller | dollerIncludeFirst
```
// doller
stringmode.doller('g') => 'g';
stringmode.doller('IS') => 'I$S';
stringmode.doller('iDOLLer') => 'i$DOLLer';
stringmode.doller('i{}DOLLer') => 'i${}DOLLer';
stringmode.doller('is', 'DOLLer') => 'is$DOLLer';
stringmode.doller('is', 'DOLLer', 'or', 'mODe') => 'is$DOLLer$or$mODe';
stringmode.doller('i[]s', 'DOLLer', 'or', 'mODe') => 'i[]s$DOLLer$or$mODe';

// dollerIncludeFirst
stringmode.dollerIncludeFirst('g') => '$g';
stringmode.dollerIncludeFirst('IS') => '$I$S';
stringmode.dollerIncludeFirst('iDOLLer') => '$i$DOLLer';
stringmode.dollerIncludeFirst('i{}DOLLer') => '$i${}DOLLer';
stringmode.dollerIncludeFirst('is', 'DOLLer') => '$is$DOLLer';
stringmode.dollerIncludeFirst('is', 'DOLLer', 'or', 'mODe') => '$is$DOLLer$or$mODe';
stringmode.dollerIncludeFirst('i[]s', 'DOLLer', 'or', 'mODe') => '$i[]s$DOLLer$or$mODe';
```

> 10. As examples => reverse | upperlower | upperlowerAndReverse
```
// reverse
stringmode.reverse('h') => 'h';
stringmode.reverse('is') => 'si';
stringmode.reverse('iReverse') => 'esreveRi';
stringmode.reverse('iRever.,se') => 'es,.reveRi';
stringmode.reverse('is', 'reverse') => 'esreversi';
stringmode.reverse('is', 'reverse', 'or', 'mODe') => 'eDOmroesreversi';
stringmode.reverse('is', 'rever()se', 'or', 'mODe') => 'eDOmroes)(reversi';

// upperlower
stringmode.upperlower('h') => 'H';
stringmode.upperlower('is') => 'IS';
stringmode.upperlower('iReverse') => 'IrEVERSE';
stringmode.upperlower('iRever.,se') => 'IrEVER.,SE';
stringmode.upperlower('is', 'reverse') => 'ISREVERSE';
stringmode.upperlower('is', 'reverse', 'or', 'mODe') => 'ISREVERSEORModE';
stringmode.upperlower('is', 'rever()se', 'or', 'mODe') => 'ISREVER()SEORModE';

// upperlowerAndReverse
stringmode.upperlowerAndReverse('h') => 'h';
stringmode.upperlowerAndReverse('is') => 'SI';
stringmode.upperlowerAndReverse('iReverse') => 'ESREVErI';
stringmode.upperlowerAndReverse('iRever.,se') => 'ES,.REVErI';
stringmode.upperlowerAndReverse('is', 'reverse') => 'ESREVERSI';
stringmode.upperlowerAndReverse('is', 'reverse', 'or', 'mODe') => 'EdoMROESREVERSI';
stringmode.upperlowerAndReverse('is', 'rever()se', 'or', 'mODe') => 'EdoMROES)(REVERSI';
```

> 11. As examples => reverseByWord | upperlowerByWord | upperlowerAndReverseByWord
```
// reverseByWord
stringmode.reverseByWord('i') => 'i';
stringmode.reverseByWord('is') => 'si';
stringmode.reverseByWord('iReverse') => 'esreveRi';
stringmode.reverseByWord('iRever.,se') => 'es,.reveRi';
stringmode.reverseByWord('is', 'reverse') => 'reverseis';
stringmode.reverseByWord('is', 'reverse', 'or', 'mODe') => 'mODeorreverseis';
stringmode.reverseByWord('is', 'rever()se', 'or', 'mODe') => 'mODeorrever()seis';

// upperlowerByWord
stringmode.upperlowerByWord('i') => 'I';
stringmode.upperlowerByWord('is') => 'IS';
stringmode.upperlowerByWord('iReverse') => 'IrEVERSE';
stringmode.upperlowerByWord('iRever.,se') => 'IrEVER.,SE';
stringmode.upperlowerByWord('is', 'reverse') => 'ISREVERSE';
stringmode.upperlowerByWord('is', 'reverse', 'or', 'mODe') => 'ISREVERSEORModE';
stringmode.upperlowerByWord('is', 'rever()se', 'or', 'mODe') => 'ISREVER()SEORModE';

// upperlowerAndReverseByWord
stringmode.upperlowerAndReverseByWord('i') => 'I';
stringmode.upperlowerAndReverseByWord('is') => 'SI';
stringmode.upperlowerAndReverseByWord('iReverse') => 'ESREVErI';
stringmode.upperlowerAndReverseByWord('iRever.,se') => 'ES,.REVErI';
stringmode.upperlowerAndReverseByWord('is', 'reverse') => 'REVERSEIS';
stringmode.upperlowerAndReverseByWord('is', 'reverse', 'or', 'mODe') => 'ModEORREVERSEIS';
stringmode.upperlowerAndReverseByWord('is', 'rever()se', 'or', 'mODe') => 'ModEORREVER()SEIS';
```

> 12. As examples => Union of the functions.
```
stringmode.lower(stringmode.underln('lower', 'AND', 'underLN')) => 'lower_and_underln' 
stringmode.upper(stringmode.midln('uppEr', 'AND', 'midln')) => 'UPPER-AND-MIDLN' 
```

> More detail: How to use the function please to see the example of the file which is in the foleder of test => test/stringmode.test.js.