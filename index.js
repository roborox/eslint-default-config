module.exports = {
	extends: ["react-app"],
	parser: "@typescript-eslint/parser",
	plugins: ["unicorn", "jest"],
	overrides: [
		{
			files: ["**/*.tsx"],
			rules: {
				"react/prop-types": "off"
			}
		}
	],
	rules: {
		/* General options */
		"eol-last": "off",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
				maxEOF: 1
			}
		],
		"no-plusplus": [
			"error",
			{
				allowForLoopAfterthoughts: true
			}
		],
		"comma-dangle": ["error", "always"],

		/** Typescript extension */
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true
			}
		],
		"@typescript-eslint/semi": ["error", "never"],
		"@typescript-eslint/indent": [
			"error",
			"tab",
			{
				SwitchCase: 1
			}
		],
		"@typescript-eslint/max-len": [
			"error",
			{
				code: 120,
				tabWidth: 2,
				ignorePattern: "^import.*$"
			}
		],
		"@typescript-eslint/comma-spacing": [
			"error",
			{
				before: false,
				after: true
			}
		],

		/* Import options */
		"import/no-default-export": "error",

		/* Unicorn options */
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase"
			}
		],

		/* React options */
		"react-hooks/exhaustive-deps": "off"
	}
};
