module.exports = {
    env: {
        browser: true,
    },
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
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
