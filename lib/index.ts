const binary = require('@mapbox/node-pre-gyp');
const path = require('path');
// Change this line to look for package.json in the project root
const bindingPath = binary.find(path.resolve(path.join(__dirname, '../package.json')));
const native = require(bindingPath);

export interface NativeAddon {
  add(a: number, b: number): number;
}

export const add = native.add;