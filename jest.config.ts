import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "^next/navigation$": "<rootDir>/__mocks__/next/navigation.ts",
        "^next/headers$": "<rootDir>/__mocks__/next/headers.ts",
        "^next/cache$": "<rootDir>/__mocks__/next/cache.ts",
    }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
