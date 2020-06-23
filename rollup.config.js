import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      // using to resolve "Error: ____ is not exported by node_modules/____" errors
      namedExports: {
        'react-table': [
          'ColumnInstance',
          'useResizeColumns',
          'UseResizeColumnsColumnProps',
          'useTable',
          'UseTableCellProps',
        ],
        exenv: ['canUseDOM'],
        'prop-types': ['object', 'func', 'oneOfType', 'node', 'string'],
      },
    }),
    typescript({ useTsconfigDeclarationDir: true, rollupCommonJSResolveHack: true }),
  ],
}
