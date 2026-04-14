'use strict';

const [major = 0, minor = 0, patch = 0] = process.versions.node
  .split('.')
  .map((part) => Number(part));

const required = { major: 20, minor: 19, patch: 4 };

function isSupported() {
  if (major !== required.major) {
    return major > required.major;
  }
  if (minor !== required.minor) {
    return minor > required.minor;
  }
  return patch >= required.patch;
}

if (!isSupported()) {
  console.error(
    [
      `Unsupported Node.js version: ${process.versions.node}`,
      `This Expo SDK 54 project needs Node ${required.major}.${required.minor}.${required.patch} or newer.`,
      'Metro uses modern Array helpers like toReversed(), which are not available in Node 18.',
      'Switch to Node 20+ and run npm install again if dependencies were installed with the older runtime.',
    ].join('\n')
  );
  process.exit(1);
}
