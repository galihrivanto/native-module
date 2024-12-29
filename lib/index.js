"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const binary = require('@mapbox/node-pre-gyp');
const path = require('path');
// Change this line to look for package.json in the project root
const bindingPath = binary.find(path.resolve(path.join(__dirname, '../package.json')));
const native = require(bindingPath);
exports.add = native.add;
