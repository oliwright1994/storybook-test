global.WEBPACK_ASSET_PREFIX = '';

const _Date = Date;
global.Date = jest.fn(() => new Date(2020));
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;

// // Mock for window.location.assign so we can 'navigate'
// // within tests without JSDOM 'Not implemented' errors
global.location.assign = jest.fn();

// match media mocks
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

// localStorage mocks
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => {
      return store[key] || null;
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();
global.localStorage = localStorage;
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
