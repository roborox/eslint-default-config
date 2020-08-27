# Roborox Eslint config

> This config extends airbnb-typescript, plugin:eslint-comments/recommended

## Installation

### 1. Install npm module

Run following command with terminal

```
npm install eslint@^7.7.0 @roborox/eslint-config-default --save-dev
```	

### 2. Applying

To apply this config to your existing eslint configuration just add `@roborox/default` in
your `.eslintrc.js` file

```
module.exports = {
	extends: ["@roborox/default"],
	/* your config goes here.. */
}
```
