module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  extends: [
    'plugin:vue/recommended'
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "indent": ["error", 2]
  }
};
