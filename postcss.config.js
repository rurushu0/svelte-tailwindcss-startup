const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/**/*.html', './**/**/*.svelte'],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
