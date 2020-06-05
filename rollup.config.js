import resolve from '@rollup/plugin-node-resolve'
import livereload from 'rollup-plugin-livereload'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import { terser } from 'rollup-plugin-terser'

const production = process.env.NODE_ENV === 'production'

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    compact: true,
  },
  plugins: [
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),

    svelte({
      dev: !production,
      include: 'src/**/*.svelte',
      preprocess: sveltePreprocess({
        postcss: true,
      }),
      css: (css) => {
        css.write('public/style.css', false)
      },
    }),

    !production && livereload('public'),

    production && terser(),
  ],
}
