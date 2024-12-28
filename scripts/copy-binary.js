const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');  // You might need to install this package

const platform = process.platform;
const arch = process.arch;
const nodeVersion = process.versions.modules;

const buildPath = path.join(__dirname, '../build/Release/native_addon.node');
const targetDir = path.join(__dirname, '../lib/binding/Release', `node-v${nodeVersion}-${platform}-${arch}`);
const targetPath = path.join(targetDir, 'native_addon.node');

// Create target directory
mkdirp.sync(targetDir);

// Copy the file
fs.copyFileSync(buildPath, targetPath);
console.log(`Copied native addon to ${targetPath}`);