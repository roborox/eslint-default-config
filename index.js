module.exports = {
	extends: [
		"airbnb-typescript",
		"plugin:eslint-comments/recommended",
		"plugin:jest/recommended",
	],
	env: {
		browser: true,
		es6: true,
	},
	plugins: [
		"jest",
		"unicorn",
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		/** Eslint basic */
		"no-useless-constructor": "off",
		"eslint-comments/no-unused-disable": "error",
		"max-classes-per-file": "off",
		"max-len": [
			"error",
			{
				code: 120,
				tabWidth: 2,
				ignorePattern: "^import.*$",
			},
		],
		"no-tabs": "off",
		"no-plusplus": [
			"error",
			{
				allowForLoopAfterthoughts: true,
			},
		],
		"arrow-body-style": "off",
		"no-underscore-dangle": "off",
		"object-curly-newline": "off",
		"no-restricted-globals": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 1,
			},
		],

		/** Import options */
		"import/prefer-default-export": "off",
		"import/no-unresolved": "off",
		"import/no-default-export": [
			"error",
			"always",
		],
		"import/no-extraneous-dependencies": "off",

		/** React extension */
		"react/jsx-props-no-spreading": "off",
		"react/jsx-no-bind": "off",
		"react/no-array-index-key": "off",
		"react/jsx-indent": [
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/static-property-placement": [
			"error",
			"static public field",
		],

		/** Typescript extension */
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-misused-new": "off",
		"@typescript-eslint/indent": [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true,
			},
		],
		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: true,
				allowHigherOrderFunctions: true,
			},
		],

		/** Filenames */
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase",
			},
		],
	},
};

