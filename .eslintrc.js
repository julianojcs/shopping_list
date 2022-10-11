module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier", "plugin:react/jsx-runtime"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "linebreak-style": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": [
      "warning",
      {
        endOfLine: "auto",
      },
    ],
  },
};
