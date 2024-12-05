/** @type {import('prettier').Config} */
const config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    '<BUILTIN_MODULES>',      // Node builtin modules
    "^(hono/(.*)$)|^(hono$)", // Match hono imports first
    "<THIRD_PARTY_MODULES>",  // Third-party modules
    "",                       // Blank line
    "^@/lib/(.*)$",           // Custom aliases
    "^@/middlewares/(.*)$",
    "^@/openapi/(.*)$",
    "^@/(.*)$",
    "",                       // Blank line
    "^[./]",                  // Relative imports
    "",                       // Blank line
    "^types$",                // Special `types` import
    "^@/types/(.*)$",         // Custom types directory
  ],
  importOrderSeparation: true, // Ensure blank lines between groups
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}

export default config
