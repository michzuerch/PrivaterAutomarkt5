module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  plugins: ["tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-negative-arbitrary-values": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/migration-from-tailwind-2": "warn",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
