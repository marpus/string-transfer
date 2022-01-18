# string-transfer v1.0.0
> This is a function for parsing into specified string pattern 
based on the parameters of function to pass.

> 这是一个解析功能，它根据要传递的函数参数指定的字符串模式。

> How to get start
```
npm i string-transfer@latest
```

> How to get function of 'string-transfer' package. 
```
const stringmode = require('string-transfer');
// or 
import stringmode from 'string-transfer'; 
// only support for 14+ of node.
```

> How to use

> Following down which are list of functions can call.
```
const 
var listA = [
    camel, class, lower, upper, const,
    underln, underlnIncludeFirst, 
    midln, midlnIncludeFirst,
    doller, dollerIncludeFirst,
    reverse, upperlower, upperlowerAndReverse, 
    reverseByWord, upperlowerByWord, upperlowerAndReverseByWord
]

EX 
/*
Following down two situations you will get the string of null.
1. You are passing a parameter which is a string of null;
2. You a't passed any parameter.
在以下两种情况下你会得到一个空的字符串：
1. 你传了一个空的字符串作为参数；
2. 你没有传入任何参数。
 */
xxx['listA'][index of listA]('') => ''
xxx['listA'][index of listA]() => ''
```

> More detail How to use the function please to see the example of the file which is in the foleder of test => test/stringmode.test.js.