# rollup-closure-cli

Some experiments comparing setups using Angular CLI, Rollup with Terser, and Rollup with Closure.

The Rollup with Closure currently suffers from (at least) these issues:
  - `Console` and `Location` class/let definitions cause `JSC_BLOCK_SCOPED_DECL_MULTIPLY_DECLARED_ERROR` error (https://github.com/ampproject/rollup-plugin-closure-compiler/issues/92, workaround via `node patch-bo-to-make-var-iife.js`)
  - UTF-8 exports are bugged https://github.com/ampproject/rollup-plugin-closure-compiler/issues/240
