module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        // 禁止在代码中出现console，允许console.log, console.warn, console.error, console.dir
        'no-console': ['error', {
            allow: ['warn', 'error', 'dir', 'log']
        }],
        // tab和空格混用
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
        // 未使用的变量
        'no-unused-vars': ['warn'],
        'quotes': ['error', 'single'],
        // 分号
        'semi': ['warn', 'always'],
    },
};
