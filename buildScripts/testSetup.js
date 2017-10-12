//the javascript code is not transpiled so we should use ES5 javascript code

//register the babel
require('babel-register');

//remove webpack related codes that mocha wont run
require.extensions['.css'] = function () {

};