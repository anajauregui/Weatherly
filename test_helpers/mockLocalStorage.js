const mockLocalStorage = ( function() {

  let store = {};

  return {
    store: store,
    getItem: function(key) {
      return store[key];
    },

    setItem: function(key, value) {
      store[key] = value;
    },

    clear: function() {
      store = {};
    },

    removeItem: function(key) {
      delete store[key];
    }
  };

})();


global.localStorage = mockLocalStorage;

// Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

// export default mockLocalStorage;

// class mockLocalStorage {
//   constructor() {
//     this.store = {};
//   }
//
//     getItem: function(key) {
//       return this.store[key];
//     },
//
//     setItem: function(key, value) {
//       this.store[key] = string;
//     },
//
//     clear: function() {
//       store = {};
//     },
//
//     removeItem: function(key) {
//       delete store[key];
//     }
//   };
//
// });
//
// Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });
//
// export default mockLocalStorage;
//
//
// class LocalStorage {
//   constructor() {
//     this.store = {}
//   }
//
//   getItem(key) {
//     return this.store[key]
//   }
//
//   setItem(key, string) {
//     this.store[key] = string
//   }
//
//   clear() {
//     this.store = {}
//   }
// }
//
// global.localStorage = new LocalStorage;
