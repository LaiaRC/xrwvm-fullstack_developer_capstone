export default defineConfig([
    {
      ignores: ["**/node_modules/**"],
    },
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      rules: {
        "no-unused-vars": "off",
      },
      plugins: { js },
      extends: ["js/recommended"],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
        },
        ecmaVersion: "latest"
      },
    },
    pluginReact.configs.flat.recommended,
  ]);
  