module.exports = {
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
        ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],
        '@semantic-release/changelog',
        ['@semantic-release/npm', { npmPublish: false }],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package-lock.json', 'package.json'],
                message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
            },
        ],
        [
            '@semantic-release/github',
            {
                failTitle: false,
                labels: false,
                releasedLabels: false,
            },
        ],
    ],
    repositoryUrl: process.env.GITHUB_ACTIONS
        ? 'https://github.com/iiroj/jouni.jappinen.fi'
        : 'git@github.com:iiroj/jouni.jappinen.fi.git',
}
