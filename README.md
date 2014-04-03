# Zequals [![Build Status](https://travis-ci.org/GamingCoder/zequals.png)](https://travis-ci.org/GamingCoder/zequals)
Zequalizing is a simple method to transform numbers like 97.253536 into simple numbers like 100.

## Samples
```js
var zequals = require('zequals');
console.log(zequals(97));
// prints 100
```

| Number    | Result |
|-----------|--------|
| 0         | 1      |
| 1234,5678 | 1000   |
| 10001     | 10000  |

## License
The MIT License (MIT)

Copyright (c) 2014 Tobias Meyer @GamingCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
