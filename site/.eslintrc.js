module.exports = {
    env: {
        browser: true,
    },
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            // Make sure babel finds config file from this directory
            cwd: __dirname,
        },
    },
    plugins: ['react-hooks'],
    rules: {
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
