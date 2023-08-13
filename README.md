# clipboard-image
> Read/write clipboard image.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/clipboard-image
```

## usage
```js
import ClipboardImage from '@jswork/clipboard-image';

// only testing on macos
const buf = ClipboardImage.read();

// <Buffer xxxx> OR null
```

## license
Code released under [the MIT license](https://github.com/afeiship/clipboard-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/clipboard-image
[version-url]: https://npmjs.org/package/@jswork/clipboard-image

[license-image]: https://img.shields.io/npm/l/@jswork/clipboard-image
[license-url]: https://github.com/afeiship/clipboard-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/clipboard-image
[size-url]: https://github.com/afeiship/clipboard-image/blob/master/dist/clipboard-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/clipboard-image
[download-url]: https://www.npmjs.com/package/@jswork/clipboard-image
