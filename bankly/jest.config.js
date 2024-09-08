module.exports = {
  // The root directory that Jest should scan for tests and modules within
  roots: ['<rootDir>'],

  // A list of paths to directories that Jest should use to search for files in
  moduleDirectories: ['node_modules', '<rootDir>'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'node'],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
