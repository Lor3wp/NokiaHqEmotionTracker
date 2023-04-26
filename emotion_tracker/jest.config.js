module.exports = {
    // ...
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    setupFilesAfterEnv: ["jest-localstorage-mock"]
  };
  