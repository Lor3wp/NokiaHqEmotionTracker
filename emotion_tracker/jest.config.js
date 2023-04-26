module.exports = {
        "transform": {
          "^.+\\.jsx?$": "babel-jest",
          "^.+\\.css$": "<rootDir>/node_modules/jest-css-modules-transform"
        },
        "setupFilesAfterEnv": [
            "<rootDir>/src/setupTests.js"
          ],
        "moduleNameMapper": {
          "\\.(css|less)$": "<rootDir>/src/styleMock.js"
        },
        "testEnvironment": "jsdom"
      }

