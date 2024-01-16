
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      file: './lib/index.esm.js',
      format: 'esm',
    },
    {
      file: './lib/index.cjs.js',
      format: 'cjs'
    },
    {
      file: './lib/index.umd.js',
      format: 'umd',
      name: 'OhMyUtils'
    },
    {
      file: './lib/index.min.js',
      format: 'iife',
      plugins: [terser()]
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs(),
    resolve(),
  ]
})