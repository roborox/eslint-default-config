module.exports = {
	extends: ["react-app"],
	parser: "@typescript-eslint/parser",
	plugins: ["unicorn", "jest", "prettier"],
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
		"max-len": [
			"error",
			{
				code: 120,
				tabWidth: 2,
				ignorePattern: "^import.*$"
			}
		],
		"no-tabs": "off",
		quotes: "off",

		/** Typescript extension */
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true
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

		/* Prettier options */
		"prettier/prettier": "error",

		/* React options */
		"react-hooks/exhaustive-deps": "off"
	}
}
