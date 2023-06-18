module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  root: true,
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
      ],
    },
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
  rules: {
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,
    "import/no-duplicates": 2,
    "import/order": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [`^(${require("module").builtinModules.join("|")})(/.*|$)`],
          ["^react", "^react-dom", "^next"],
          ["^@?\\w"],
          [
            "^api(/.*|$)",
            "^components(/.*|$)",
            "^hooks(/.*|$)",
            "^utils(/.*|$)",
            "^styles(/.*|$)",
          ],
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
          ["^\\u0000"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
};
