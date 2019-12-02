import nodeResolve from 'rollup-plugin-node-resolve';
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

const closureConfig = {
  // Uncomment to se more information.
  // warning_level: 'VERBOSE',
  // Angular code contains a lot of non-standard JSDoc tags, like @publicApi.
  // These warnings won't appear anyway unless you set warning_level to verbose.
  jscomp_off: ['nonStandardJsDocs'],

  // Uncomment to attempt advanced optimizations.
  // compilation_level: 'ADVANCED',
  // Angular uses 'System', which needs an extern in advanced mode.
  externs: ['./externs.js'],
}


export default {
  input: './out-tsc/app/src/main-rollup.js',
  output: {
    dir: './dist-rollup-closure/',
    format: 'esm',
    sourcemap: true,
  },
  treeshake: true,
  plugins: [
    nodeResolve({ mainFields: ['es2015', 'browser', 'module', 'main'] }),
    buildOptimizer({
      sideEffectFreeModules: [
        `node_modules/@angular/core/`,
        `node_modules/@angular/platform-browser/`,
        `node_modules/@angular/common/`,
        `node_modules/@angular/compiler/`,
        `node_modules/@angular/router/`,
        `node_modules/rxjs/`,
      ]
    }),
    compiler(closureConfig)
  ]
};
