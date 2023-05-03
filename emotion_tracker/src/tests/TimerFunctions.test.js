import {timerStart, timerTick} from '../utils/TimerFunctions';

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => store[key] = value.toString(),
    clear: () => store = {}
  };
})();
global.localStorage = localStorageMock;

describe('timerStart', () => {
  beforeEach(() => {
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => store[key] = value.toString(),
        clear: () => store = {}
      };
    })();
    global.localStorage = localStorageMock;
  });
  it('should set buttonActive to false and save current time in local storage', () => {
    // Arrange
    const e = {preventDefault: jest.fn()};
    const setButtonActive = jest.fn();
    // Act
    timerStart(e, setButtonActive);

    // Assert
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(setButtonActive).toHaveBeenCalledWith(false);
    expect(localStorageMock.setItem).toHaveBeenCalledWith("timer", expect.any(Number));
  });
});

describe('timerTick', () => {
  beforeEach(() => {
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => store[key] = value.toString(),
        clear: () => store = {}
      };
    })();
    global.localStorage = localStorageMock;
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should set time and buttonActive correctly when there is a stored timer', () => {
    // Arrange
    const setTime = jest.fn();
    const timerTimeMs = 5000;
    const setButtonActive = jest.fn();
    const setClicked = jest.fn();
    localStorageMock.setItem('timer', Date.now() - 2000);

    // Act
    timerTick(setTime, timerTimeMs, setButtonActive, setClicked);

    // Assert
    expect(setTime).toHaveBeenCalledWith(3000);
    expect(setButtonActive).toHaveBeenCalledWith(false);
    expect(console.log).not.toHaveBeenCalled();
    expect(setClicked).not.toHaveBeenCalled();
  });

  it('should set time and buttonActive correctly when the timer has expired', () => {
    // Arrange
    const setTime = jest.fn();
    const timerTimeMs = 5000;
    const setButtonActive = jest.fn();
    const setClicked = jest.fn();
    localStorageMock.setItem('timer', Date.now() - 6000);

    // Act
    timerTick(setTime, timerTimeMs, setButtonActive, setClicked);

    // Assert
    expect(setTime).toHaveBeenCalledWith(0);
    expect(setButtonActive).toHaveBeenCalledWith(true);
    expect(setClicked).toHaveBeenCalledWith(0);
    expect(console.log).not.toHaveBeenCalled();
  });

  it('should set time and buttonActive correctly when the timer is still running', () => {
    // Arrange
    const setTime = jest.fn();
    const timerTimeMs = 5000;
    const setButtonActive = jest.fn();
    const setClicked = jest.fn();
    localStorageMock.setItem('timer', Date.now() - 1000);

    // Act
    timerTick(setTime, timerTimeMs, setButtonActive, setClicked);

    // Assert
    expect(setTime).toHaveBeenCalledWith(4000);
    expect(setButtonActive).toHaveBeenCalledWith(false);
    expect(setClicked).not.toHaveBeenCalled();
    expect(console.log).not.toHaveBeenCalled();
  });
});
