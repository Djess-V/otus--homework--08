module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreUrls: true,
        code: 150,
      },
    ],
    "no-unused-vars": "off",
  },
};
