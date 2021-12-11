import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'


export default [
  {
    input: 'src/deployer/index.ts',
    output: {
      file: 'lib/lotterydeployer.js',
      format: 'iife',
      name: 'lotteryDeployer',
    },
    plugins: [
      json(),
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
      }),
      typescript({
        typescript: require('typescript'),
      }),
      babel({
        runtimeHelpers: true,
      }),
      uglify(),
    ],
  },
]
