// eslint-disable-next-line no-undef
module.exports = {
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 4,
  "singleQuote": true,
  "printWidth": 120,
  "trailingComma": "none",
  "bracketSpacing": true,
  "bracketSameLine": true,
  "plugins": [import('prettier-plugin-tailwindcss')]
}