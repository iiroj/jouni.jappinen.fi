const linters = ['rome check --apply-unsafe', 'rome format --write'];

export default {
    '*.{js,mjs}': linters,
    '*.json': linters,
    '*.jsx': linters,
};
