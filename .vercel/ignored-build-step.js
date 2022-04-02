const VERCEL_ENV = process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_MESSAGE = process.env.VERCEL_GIT_COMMIT_MESSAGE,
    VERCEL_GIT_COMMIT_SHA = process.env.VERCEL_GIT_COMMIT_SHA

console.log(`ℹ VERCEL_ENV="${VERCEL_ENV || ''}"`)
console.log(`ℹ VERCEL_GIT_COMMIT_MESSAGE="${VERCEL_GIT_COMMIT_MESSAGE || ''}"`)

const isProductionBuild = VERCEL_ENV === 'production'
const isReleaseCommit = /^chore\(release\): /.test(VERCEL_GIT_COMMIT_MESSAGE)

if (isProductionBuild && isReleaseCommit) {
    console.log(`✓ Creating deployment for commit "${VERCEL_GIT_COMMIT_SHA || 'undefined'}"`)
    process.exit(1)
} else {
    console.log(`→ Skipping deployment for commit "${VERCEL_GIT_COMMIT_SHA || 'undefined'}"`)
}
