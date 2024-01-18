import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      dir: undefined,
      file: './lib/index.esm.js',
      format: 'esm',
    },
    {
      dir: undefined,
      file: './lib/index.cjs.js',
      format: 'cjs'
    },
    {
      dir: undefined,
      file: './lib/index.umd.js',
      format: 'umd',
      name: 'OhMyUtils'
    },
    {
      dir: undefined,
      file: './lib/index.min.js',
      format: 'iife',
      name: 'OhMyUtils',
      plugins: [terser()]
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs(),
    nodeResolve(),
  ]
})