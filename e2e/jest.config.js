module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\e2e.test\\.ts$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
