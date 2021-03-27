module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-control-statements/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "global": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-control-statements",
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/no-unescaped-entities": 0,
        "react/display-name": [0, { "ignoreTranspilerName": true }],
        "react/prop-types": "error",
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-no-undef": [2, { "allowGlobals": true }],
        "object-curly-spacing": [2, "always"]
    },
    "overrides": [
        {
            "files": ["src/**/*.test.js", "src/**/*.test.jsx"],
            "rules": {
                "no-console": ["error"],
                "no-restricted-globals": ["error", "fdescribe", "fit", "xdescribe", "xit"],
                "jsx-control-statements/jsx-use-if-tag": 0,
                "react/prop-types": "off",
            }
        }
    ]
}
