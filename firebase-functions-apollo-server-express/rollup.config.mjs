//https://github.com/GoogleChromeLabs/so-pwa/blob/master/rollup.config.mjs

import babel from 'rollup-plugin-babel';
import os from 'os';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import string from 'rollup-plugin-string';

// The version of Chroumium used by Samsung Internet 5.x.
const BROWSER_TARGET = {
  browsers: ['chrome >= 51'],
};

// The version of node used in Firebase Cloud Functions.
const NODE_TARGET = {
  node: '6.14.0',
}

export default [{
  input: 'src/server.mjs',
  external: [
    'express',
    'firebase-functions',
  ],
  plugins: [
    string({
      include: 'build/partials/**/*.html',
    }),
    babel({
      presets: [['env', {
        targets: NODE_TARGET,
        modules: false,
      }]],
    }),
  ],
  output: {
    file: 'functions/index.js',
    format: 'cjs',
  },
}, {
  input: 'src/app.mjs',
  plugins: [
    babel({
      presets: [['env', {
        targets: BROWSER_TARGET,
        modules: false,
      }], 'minify'],
    }),
  ],
  output: {
    file: 'build/app.js',
    format: 'iife',
    sourcemap: true,
  },
}];
