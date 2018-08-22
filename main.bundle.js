/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Food.js":
/*!*********************!*\
  !*** ./lib/Food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Food, _GamePiece);

  function Food(x, y, height, width, color) {
    _classCallCheck(this, Food);

    return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, x, y, height, width, color));
  }

  _createClass(Food, [{
    key: 'draw',
    value: function draw(ctx) {
      _get(Food.prototype.__proto__ || Object.getPrototypeOf(Food.prototype), 'draw', this).call(this, ctx);
    }
  }]);

  return Food;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = __webpack_require__(/*! ./Snake */ "./lib/Snake.js");
var Food = __webpack_require__(/*! ./Food */ "./lib/Food.js");

module.exports = function () {
  function Game(ctx) {
    var _this = this;

    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.snake = new Snake(50, 250, 25, 25, 'green');
    this.food = this.makeFood();
    this.score = 0;
    this.level = 1;
    this.keyPad = {
      'ArrowUp': function ArrowUp() {
        return _this.preventDoubleBack(false, 0, -1);
      },
      'ArrowRight': function ArrowRight() {
        return _this.preventDoubleBack(false, 1, 0);
      },
      'ArrowDown': function ArrowDown() {
        return _this.preventDoubleBack(false, 0, 1);
      },
      'ArrowLeft': function ArrowLeft() {
        return _this.preventDoubleBack(false, -1, 0);
      },
      'Space': function Space() {
        return _this.togglePause();
      }
    };
  }

  _createClass(Game, [{
    key: 'makeFood',
    value: function makeFood() {
      return new Food(Math.round(Math.round(Math.random() * 475) / 25) * 25, Math.round(Math.round(Math.random() * 475) / 25) * 25, 25, 25, 'red');
    }
  }, {
    key: 'placeFood',
    value: function placeFood() {
      var newFood = this.makeFood();

      for (var i = 0; i < this.snake.tail.length - 1; i++) {
        if (newFood.isCollidingWith(this.snake.tail[i])) {
          return this.placeFood();
        }
      }

      return newFood;
    }
  }, {
    key: 'handleSnake',
    value: function handleSnake(snake) {
      var canvas = this.ctx.canvas;


      this.checkTailCollision(snake);
      this.checkCollision(snake, canvas);
    }
  }, {
    key: 'checkTailCollision',
    value: function checkTailCollision(snake) {
      for (var i = 0; i < snake.tail.length - 1; i++) {
        if (snake.isCollidingWith(snake.tail[i])) {
          this.endGame();
        }
      }
    }
  }, {
    key: 'checkCollision',
    value: function checkCollision(snake, canvas) {
      if (snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
      } else if (snake.isCollidingWith(this.food)) {
        this.eatFood(snake);
      } else {
        this.populate(snake);
      }
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
      this.playGameOverSound();
    }
  }, {
    key: 'playGameOverSound',
    value: function playGameOverSound() {
      var audio = new Audio('./assets/sounds/explosion.wav');

      audio.play();
    }
  }, {
    key: 'eatFood',
    value: function eatFood(snake) {
      this.playNomSound();
      this.score++;
      this.checkLevel();
      this.growSnake(snake);
      this.food = this.placeFood();
    }
  }, {
    key: 'playNomSound',
    value: function playNomSound() {
      var nomSounds = Math.floor(Math.random() * 4 + 1);
      var audio = new Audio('./assets/sounds/nom' + nomSounds + '.wav');

      audio.play();
    }
  }, {
    key: 'checkLevel',
    value: function checkLevel() {
      if (this.score % 5 === 0) {
        this.level++;
      }
    }
  }, {
    key: 'growSnake',
    value: function growSnake(snake) {
      snake.tailLength += 2;
      this.populate(snake);
    }
  }, {
    key: 'populate',
    value: function populate(snake) {
      snake.move();
      this.animate();
    }
  }, {
    key: 'animate',
    value: function animate() {
      this.food.draw(this.ctx);
      this.snake.draw(this.ctx);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      this.preventArrowSpaceDefaultOnly(e);
      var property = '' + e.code;

      if (this.keyPad[property] && property !== 'Space') {
        this.snake.pendingDirection = this.keyPad[property]();
      } else if (property === 'Space') {
        this.keyPad[property]();
      }
    }
  }, {
    key: 'preventArrowSpaceDefaultOnly',
    value: function preventArrowSpaceDefaultOnly(e) {
      if (e.code === 'ArrowRight' || e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'ArrowDown' || e.code === 'Space') {
        e.preventDefault();
      }
    }
  }, {
    key: 'preventDoubleBack',
    value: function preventDoubleBack(gamePause, pendX, pendY) {
      var pendingDir = {
        dx: this.snake.dx,
        dy: this.snake.dy
      };

      if (pendX !== this.snake.dx * -1 || pendY !== this.snake.dy * -1) {
        this.paused = gamePause;
        pendingDir.dx = pendX;
        pendingDir.dy = pendY;
      }

      return pendingDir;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Snake.js":
/*!**********************!*\
  !*** ./lib/Snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Snake, _GamePiece);

  function Snake(x, y, height, width, color) {
    _classCallCheck(this, Snake);

    var _this = _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, x, y, height, width, color));

    _this.dx = 1;
    _this.dy = 0;
    _this.dxv = 25;
    _this.dyv = 25;
    _this.tail = [];
    _this.tailLength = 5;
    _this.pendingDirection;
    return _this;
  }

  _createClass(Snake, [{
    key: 'draw',
    value: function draw(ctx) {
      _get(Snake.prototype.__proto__ || Object.getPrototypeOf(Snake.prototype), 'draw', this).call(this, ctx);
      this.tail.forEach(function (chunk) {
        ctx.fillRect(chunk.x, chunk.y, chunk.height, chunk.width, chunk.color);
      });
    }
  }, {
    key: 'makeChunk',
    value: function makeChunk() {
      var chunk = {
        x: this.x,
        y: this.y,
        height: this.height,
        width: this.width,
        color: this.color
      };

      this.tail.push(chunk);
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.pendingDirection) {
        this.changeDirection(this.pendingDirection);
      }

      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
      this.makeChunk();
      if (this.tail.length === this.tailLength) {
        this.tail.shift();
      }
    }
  }, {
    key: 'changeDirection',
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }]);

  return Snake;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");
var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);
var gameScore = document.querySelector('.js-game-score');
var highScoreList = document.querySelector('.js-high-score-list');
var gameLevel = document.querySelector('.js-game-level');
var startingGameSpeed = 120;

document.addEventListener('keydown', handleKeyPress);

pullHighScore();
requestFrame();

// game animation

function requestFrame() {
  window.requestAnimationFrame(timeOut);
}

function timeOut() {
  if (!game.paused) {
    setTimeout(gameLoop, startingGameSpeed);
  } else {
    setTimeout(timeOut, startingGameSpeed);
  }
}

function gameLoop() {
  gameScore.innerText = game.score;
  if (game.gameOver) {
    gameOverSequence();
  } else {
    playGame();
  }
}

// game over functionality

function gameOverSequence() {
  clearCanvas();
  printGameOver();
  checkHighScore(game.score);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function printGameOver() {
  ctx.font = '4rem "Superscript"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Game Over', 250, 250);
  printNewGame();
}

function printNewGame() {
  ctx.font = '2rem "VT323"';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'red';
  ctx.fillText('Click here to start new game', 250, 300);
  canvas.addEventListener('click', makeNewGame);
}

function makeNewGame() {
  canvas.removeEventListener('click', makeNewGame);
  game = new Game(ctx);
  startingGameSpeed = 120;
  gameLoop();
}

// game play functionality

function playGame() {
  clearCanvas();
  checkLevelSpeed();
  game.handleSnake(game.snake);
  requestFrame();
}

function checkLevelSpeed() {
  if (parseInt(gameLevel.innerText) !== game.level) {
    gameLevel.innerText = game.level;
    startingGameSpeed -= 5;
  }
}

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

// high score functionality

function parseStorage() {
  return JSON.parse(localStorage.getItem('highScoreList'));
}

function generateFakeScores() {
  var fakeHighScores = [];
  var fakeInits = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  var fakeScores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  fakeInits.forEach(function (init, index) {
    fakeHighScores.push({ initials: init.repeat(3),
      score: fakeScores[index] });
  });

  return fakeHighScores;
}

function pullHighScore() {
  var currentHighScoreList = parseStorage() || generateFakeScores();

  generateHighScoreList(currentHighScoreList);
}

function generateHighScoreList(currentList) {
  clearCurrentList();
  setHighScoreList(currentList);
  renderHighScoreList(currentList);
}

function clearCurrentList() {
  highScoreList.innerHTML = '';
}

function setHighScoreList(currentList) {
  localStorage.setItem('highScoreList', JSON.stringify(currentList));
}

function renderHighScoreList(currentList) {
  currentList.forEach(function (item, index) {
    highScoreList.innerHTML += '<li class="place-' + index + '">\n                        <span class="initials">' + item.initials + '</span>\n                        <span class="score">' + item.score + '</span>\n                      </li>';
  });
}

// on game over

function checkHighScore(currentScore) {
  var currentHighScoreList = parseStorage();

  spliceNewScore(currentScore, currentHighScoreList);
}

function spliceNewScore(currentScore, currentList) {
  var spliceBegin = findBeginSpliceIndex(currentScore, currentList);

  if (spliceBegin > -1) {
    var newHighScoreObject = getInitials(currentScore);

    currentList.splice(spliceBegin, 0, newHighScoreObject);
    currentList.pop();
    generateHighScoreList(currentList);
  }
}

function findBeginSpliceIndex(currentScore, currentList) {
  return currentList.findIndex(function (item) {
    return item.score < currentScore;
  });
}

function getInitials(currentScore) {
  var message = 'You earned a high score! Please enter your initials.';
  var defaultInits = 'AAA';
  var newInitials = prompt(message, defaultInits);

  return makeNewScoreObj(newInitials, defaultInits, currentScore);
}

function makeNewScoreObj(newInitials, defaultInits, currentScore) {
  return {
    initials: (newInitials || defaultInits).toUpperCase().slice(0, 3),
    score: currentScore
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiY3R4IiwiU25ha2UiLCJGb29kIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzbmFrZSIsImZvb2QiLCJtYWtlRm9vZCIsInNjb3JlIiwibGV2ZWwiLCJrZXlQYWQiLCJwcmV2ZW50RG91YmxlQmFjayIsInRvZ2dsZVBhdXNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3Rm9vZCIsImkiLCJ0YWlsIiwibGVuZ3RoIiwiaXNDb2xsaWRpbmdXaXRoIiwicGxhY2VGb29kIiwiY2FudmFzIiwiY2hlY2tUYWlsQ29sbGlzaW9uIiwiY2hlY2tDb2xsaXNpb24iLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsImVhdEZvb2QiLCJwb3B1bGF0ZSIsInBsYXlHYW1lT3ZlclNvdW5kIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJwbGF5Tm9tU291bmQiLCJjaGVja0xldmVsIiwiZ3Jvd1NuYWtlIiwibm9tU291bmRzIiwiZmxvb3IiLCJ0YWlsTGVuZ3RoIiwibW92ZSIsImFuaW1hdGUiLCJkcmF3IiwiZSIsInByZXZlbnRBcnJvd1NwYWNlRGVmYXVsdE9ubHkiLCJwcm9wZXJ0eSIsImNvZGUiLCJwZW5kaW5nRGlyZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJnYW1lUGF1c2UiLCJwZW5kWCIsInBlbmRZIiwicGVuZGluZ0RpciIsImR4IiwiZHkiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHh2IiwiZHl2IiwiZm9yRWFjaCIsImNodW5rIiwicHVzaCIsImNoYW5nZURpcmVjdGlvbiIsIm1ha2VDaHVuayIsInNoaWZ0IiwiZGlyZWN0aW9uIiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwiZ2FtZVNjb3JlIiwiaGlnaFNjb3JlTGlzdCIsImdhbWVMZXZlbCIsInN0YXJ0aW5nR2FtZVNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVByZXNzIiwicHVsbEhpZ2hTY29yZSIsInJlcXVlc3RGcmFtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWVPdXQiLCJzZXRUaW1lb3V0IiwiZ2FtZUxvb3AiLCJpbm5lclRleHQiLCJnYW1lT3ZlclNlcXVlbmNlIiwicGxheUdhbWUiLCJjbGVhckNhbnZhcyIsInByaW50R2FtZU92ZXIiLCJjaGVja0hpZ2hTY29yZSIsImNsZWFyUmVjdCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInByaW50TmV3R2FtZSIsIm1ha2VOZXdHYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrTGV2ZWxTcGVlZCIsImhhbmRsZVNuYWtlIiwicGFyc2VJbnQiLCJwYXJzZVN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVGYWtlU2NvcmVzIiwiZmFrZUhpZ2hTY29yZXMiLCJmYWtlSW5pdHMiLCJmYWtlU2NvcmVzIiwiaW5pdCIsImluZGV4IiwiaW5pdGlhbHMiLCJyZXBlYXQiLCJjdXJyZW50SGlnaFNjb3JlTGlzdCIsImdlbmVyYXRlSGlnaFNjb3JlTGlzdCIsImN1cnJlbnRMaXN0IiwiY2xlYXJDdXJyZW50TGlzdCIsInNldEhpZ2hTY29yZUxpc3QiLCJyZW5kZXJIaWdoU2NvcmVMaXN0IiwiaW5uZXJIVE1MIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIml0ZW0iLCJjdXJyZW50U2NvcmUiLCJzcGxpY2VOZXdTY29yZSIsInNwbGljZUJlZ2luIiwiZmluZEJlZ2luU3BsaWNlSW5kZXgiLCJuZXdIaWdoU2NvcmVPYmplY3QiLCJnZXRJbml0aWFscyIsInNwbGljZSIsInBvcCIsImZpbmRJbmRleCIsIm1lc3NhZ2UiLCJkZWZhdWx0SW5pdHMiLCJuZXdJbml0aWFscyIsInByb21wdCIsIm1ha2VOZXdTY29yZU9iaiIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztBQUNFLGdCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixFQUFpQ0MsS0FBakMsRUFBd0M7QUFBQTs7QUFBQSx1R0FDaENKLENB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b0JBQVQsQ0FBOEJILFlBQTlCLEVBQTRDUixXQUE1QyxFQUF5RDtBQUN2RCxTQUFPQSxZQUFZZ0IsU0FBWixDQUFzQixVQUFDVCxJQUFELEVBQVU7QUFDckMsV0FBT0EsS0FBS3BILEtBQUwsR0FBYXFILFlBQXBCO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBU0ssV0FBVCxDQUFxQkwsWUFBckIsRUFBbUM7QUFDakMsTUFBSVMsVUFBVSxzREFBZDtBQUNBLE1BQUlDLGVBQWUsS0FBbkI7QUFDQSxNQUFJQyxjQUFjQyxPQUFPSCxPQUFQLEVBQWdCQyxZQUFoQixDQUFsQjs7QUFFQSxTQUFPRyxnQkFBZ0JGLFdBQWhCLEVBQTZCRCxZQUE3QixFQUEyQ1YsWUFBM0MsQ0FBUDtBQUNEOztBQUVELFNBQVNhLGVBQVQsQ0FBeUJGLFdBQXpCLEVBQXNDRCxZQUF0QyxFQUFvRFYsWUFBcEQsRUFBa0U7QUFDaEUsU0FBTztBQUNMWixjQUFVLENBQUN1QixlQUFlRCxZQUFoQixFQUE4QkksV0FBOUIsR0FBNENDLEtBQTVDLENBQWtELENBQWxELEVBQXFELENBQXJELENBREw7QUFFTHBJLFdBQU9xSDtBQUZGLEdBQVA7QUFJRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZvb2QgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG59OyIsImNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9TbmFrZScpO1xuY29uc3QgRm9vZCA9IHJlcXVpcmUoJy4vRm9vZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKDUwLCAyNTAsIDI1LCAyNSwgJ2dyZWVuJyk7XG4gICAgdGhpcy5mb29kID0gdGhpcy5tYWtlRm9vZCgpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMua2V5UGFkID0ge1xuICAgICAgJ0Fycm93VXAnOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAwLCAtMSksXG4gICAgICAnQXJyb3dSaWdodCc6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIDEsIDApLFxuICAgICAgJ0Fycm93RG93bic6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIDAsIDEpLFxuICAgICAgJ0Fycm93TGVmdCc6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIC0xLCAwKSxcbiAgICAgICdTcGFjZSc6ICgpID0+IHRoaXMudG9nZ2xlUGF1c2UoKVxuICAgIH07XG4gIH1cblxuICBtYWtlRm9vZCgpIHtcbiAgICByZXR1cm4gbmV3IEZvb2QoXG4gICAgICAoTWF0aC5yb3VuZChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA0NzUpIC8gMjUpICogMjUpLFxuICAgICAgKE1hdGgucm91bmQoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNDc1KSAvIDI1KSAqIDI1KSxcbiAgICAgIDI1LCAyNSwgJ3JlZCcpO1xuICB9XG5cbiAgcGxhY2VGb29kKCkge1xuICAgIGxldCBuZXdGb29kID0gdGhpcy5tYWtlRm9vZCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlLnRhaWwubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAobmV3Rm9vZC5pc0NvbGxpZGluZ1dpdGgodGhpcy5zbmFrZS50YWlsW2ldKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZUZvb2QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Rm9vZDtcbiAgfVxuXG4gIGhhbmRsZVNuYWtlKHNuYWtlKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5jaGVja1RhaWxDb2xsaXNpb24oc25ha2UpO1xuICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oc25ha2UsIGNhbnZhcyk7XG4gIH1cblxuICBjaGVja1RhaWxDb2xsaXNpb24oc25ha2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYWtlLnRhaWwubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoKHNuYWtlLnRhaWxbaV0pKSB7XG4gICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uKHNuYWtlLCBjYW52YXMpIHtcbiAgICBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKHNuYWtlLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZvb2QpKSB7XG4gICAgICB0aGlzLmVhdEZvb2Qoc25ha2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVsYXRlKHNuYWtlKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIHRoaXMucGxheUdhbWVPdmVyU291bmQoKTtcbiAgfVxuXG4gIHBsYXlHYW1lT3ZlclNvdW5kKCkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9zb3VuZHMvZXhwbG9zaW9uLndhdicpO1xuICAgIFxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGVhdEZvb2Qoc25ha2UpIHtcbiAgICB0aGlzLnBsYXlOb21Tb3VuZCgpO1xuICAgIHRoaXMuc2NvcmUrKztcbiAgICB0aGlzLmNoZWNrTGV2ZWwoKTtcbiAgICB0aGlzLmdyb3dTbmFrZShzbmFrZSk7XG4gICAgdGhpcy5mb29kID0gdGhpcy5wbGFjZUZvb2QoKTtcbiAgfVxuXG4gIHBsYXlOb21Tb3VuZCgpIHtcbiAgICBsZXQgbm9tU291bmRzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpO1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAuL2Fzc2V0cy9zb3VuZHMvbm9tJHtub21Tb3VuZHN9LndhdmApO1xuXG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgY2hlY2tMZXZlbCgpIHtcbiAgICBpZiAodGhpcy5zY29yZSAlIDUgPT09IDApIHtcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICB9XG4gIH1cblxuICBncm93U25ha2Uoc25ha2UpIHtcbiAgICBzbmFrZS50YWlsTGVuZ3RoICs9IDI7XG4gICAgdGhpcy5wb3B1bGF0ZShzbmFrZSk7XG4gIH1cblxuICBwb3B1bGF0ZShzbmFrZSkge1xuICAgIHNuYWtlLm1vdmUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5mb29kLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuc25ha2UuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgdGhpcy5wcmV2ZW50QXJyb3dTcGFjZURlZmF1bHRPbmx5KGUpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYCR7ZS5jb2RlfWA7XG5cbiAgICBpZiAodGhpcy5rZXlQYWRbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSAnU3BhY2UnKSB7XG4gICAgICB0aGlzLnNuYWtlLnBlbmRpbmdEaXJlY3Rpb24gPSB0aGlzLmtleVBhZFtwcm9wZXJ0eV0oKTtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnU3BhY2UnKSB7XG4gICAgICB0aGlzLmtleVBhZFtwcm9wZXJ0eV0oKTtcbiAgICB9XG4gIH1cblxuICBwcmV2ZW50QXJyb3dTcGFjZURlZmF1bHRPbmx5KGUpIHtcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgICAgZS5jb2RlID09PSAnQXJyb3dMZWZ0JyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd1VwJyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd0Rvd24nIHx8XG4gICAgICAgIGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREb3VibGVCYWNrKGdhbWVQYXVzZSwgcGVuZFgsIHBlbmRZKSB7XG4gICAgY29uc3QgcGVuZGluZ0RpciA9IHtcbiAgICAgIGR4OiB0aGlzLnNuYWtlLmR4LFxuICAgICAgZHk6IHRoaXMuc25ha2UuZHlcbiAgICB9O1xuXG4gICAgaWYgKHBlbmRYICE9PSAodGhpcy5zbmFrZS5keCAqIC0xKSB8fCBwZW5kWSAhPT0gKHRoaXMuc25ha2UuZHkgKiAtMSkpIHtcbiAgICAgIHRoaXMucGF1c2VkID0gZ2FtZVBhdXNlO1xuICAgICAgcGVuZGluZ0Rpci5keCA9IHBlbmRYO1xuICAgICAgcGVuZGluZ0Rpci5keSA9IHBlbmRZO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nRGlyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJlxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNuYWtlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyNTtcbiAgICB0aGlzLmR5diA9IDI1O1xuICAgIHRoaXMudGFpbCA9IFtdO1xuICAgIHRoaXMudGFpbExlbmd0aCA9IDU7XG4gICAgdGhpcy5wZW5kaW5nRGlyZWN0aW9uO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgdGhpcy50YWlsLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgICBjdHguZmlsbFJlY3QoY2h1bmsueCwgY2h1bmsueSwgY2h1bmsuaGVpZ2h0LCBjaHVuay53aWR0aCwgY2h1bmsuY29sb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZUNodW5rKCkge1xuICAgIGNvbnN0IGNodW5rID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9O1xuXG4gICAgdGhpcy50YWlsLnB1c2goY2h1bmspO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nRGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLnBlbmRpbmdEaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgICB0aGlzLm1ha2VDaHVuaygpO1xuICAgIGlmICh0aGlzLnRhaWwubGVuZ3RoID09PSB0aGlzLnRhaWxMZW5ndGgpIHtcbiAgICAgIHRoaXMudGFpbC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gIH1cbn07IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xubGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdhbWUtc2NvcmUnKTtcbmxldCBoaWdoU2NvcmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhpZ2gtc2NvcmUtbGlzdCcpO1xuY29uc3QgZ2FtZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdhbWUtbGV2ZWwnKTtcbmxldCBzdGFydGluZ0dhbWVTcGVlZCA9IDEyMDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxucHVsbEhpZ2hTY29yZSgpO1xucmVxdWVzdEZyYW1lKCk7XG5cbi8vIGdhbWUgYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZSgpIHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lT3V0KTtcbn1cblxuZnVuY3Rpb24gdGltZU91dCgpIHtcbiAgaWYgKCFnYW1lLnBhdXNlZCkge1xuICAgIHNldFRpbWVvdXQoZ2FtZUxvb3AsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KHRpbWVPdXQsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgZ2FtZVNjb3JlLmlubmVyVGV4dCA9IGdhbWUuc2NvcmU7XG4gIGlmIChnYW1lLmdhbWVPdmVyKSB7XG4gICAgZ2FtZU92ZXJTZXF1ZW5jZSgpO1xuICB9IGVsc2Uge1xuICAgIHBsYXlHYW1lKCk7XG4gIH1cbn1cblxuLy8gZ2FtZSBvdmVyIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gZ2FtZU92ZXJTZXF1ZW5jZSgpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgcHJpbnRHYW1lT3ZlcigpO1xuICBjaGVja0hpZ2hTY29yZShnYW1lLnNjb3JlKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIHByaW50R2FtZU92ZXIoKSB7XG4gIGN0eC5mb250ID0gJzRyZW0gXCJTdXBlcnNjcmlwdFwiJztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gIGN0eC5maWxsVGV4dCgnR2FtZSBPdmVyJywgMjUwLCAyNTApO1xuICBwcmludE5ld0dhbWUoKTtcbn1cblxuZnVuY3Rpb24gcHJpbnROZXdHYW1lKCkge1xuICBjdHguZm9udCA9ICcycmVtIFwiVlQzMjNcIic7XG4gIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICBjdHguZmlsbFRleHQoJ0NsaWNrIGhlcmUgdG8gc3RhcnQgbmV3IGdhbWUnLCAyNTAsIDMwMCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VOZXdHYW1lKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5ld0dhbWUoKSB7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VOZXdHYW1lKTtcbiAgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIHN0YXJ0aW5nR2FtZVNwZWVkID0gMTIwO1xuICBnYW1lTG9vcCgpO1xufVxuXG4vLyBnYW1lIHBsYXkgZnVuY3Rpb25hbGl0eVxuXG5mdW5jdGlvbiBwbGF5R2FtZSgpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgY2hlY2tMZXZlbFNwZWVkKCk7XG4gIGdhbWUuaGFuZGxlU25ha2UoZ2FtZS5zbmFrZSk7XG4gIHJlcXVlc3RGcmFtZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja0xldmVsU3BlZWQoKSB7XG4gIGlmIChwYXJzZUludChnYW1lTGV2ZWwuaW5uZXJUZXh0KSAhPT0gZ2FtZS5sZXZlbCkge1xuICAgIGdhbWVMZXZlbC5pbm5lclRleHQgPSBnYW1lLmxldmVsO1xuICAgIHN0YXJ0aW5nR2FtZVNwZWVkIC09IDU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICBnYW1lLmhhbmRsZUtleVByZXNzKGUpO1xufVxuXG4vLyBoaWdoIHNjb3JlIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gcGFyc2VTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlTGlzdCcpKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGYWtlU2NvcmVzKCkge1xuICBjb25zdCBmYWtlSGlnaFNjb3JlcyA9IFtdO1xuICBjb25zdCBmYWtlSW5pdHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgY29uc3QgZmFrZVNjb3JlcyA9IFsxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XG5cbiAgZmFrZUluaXRzLmZvckVhY2goKGluaXQsIGluZGV4KSA9PiB7XG4gICAgZmFrZUhpZ2hTY29yZXMucHVzaCh7aW5pdGlhbHM6IGluaXQucmVwZWF0KDMpLFxuICAgICAgc2NvcmU6IGZha2VTY29yZXNbaW5kZXhdfSk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWtlSGlnaFNjb3Jlcztcbn1cblxuZnVuY3Rpb24gcHVsbEhpZ2hTY29yZSgpIHtcbiAgbGV0IGN1cnJlbnRIaWdoU2NvcmVMaXN0ID0gcGFyc2VTdG9yYWdlKCkgfHwgZ2VuZXJhdGVGYWtlU2NvcmVzKCk7XG5cbiAgZ2VuZXJhdGVIaWdoU2NvcmVMaXN0KGN1cnJlbnRIaWdoU2NvcmVMaXN0KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KSB7XG4gIGNsZWFyQ3VycmVudExpc3QoKTtcbiAgc2V0SGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG4gIHJlbmRlckhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhckN1cnJlbnRMaXN0KCkge1xuICBoaWdoU2NvcmVMaXN0LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBzZXRIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoU2NvcmVMaXN0JywgSlNPTi5zdHJpbmdpZnkoY3VycmVudExpc3QpKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCkge1xuICBjdXJyZW50TGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGhpZ2hTY29yZUxpc3QuaW5uZXJIVE1MICs9ICBgPGxpIGNsYXNzPVwicGxhY2UtJHtpbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIj4ke2l0ZW0uaW5pdGlhbHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZVwiPiR7aXRlbS5zY29yZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICB9KTtcbn1cblxuLy8gb24gZ2FtZSBvdmVyXG5cbmZ1bmN0aW9uIGNoZWNrSGlnaFNjb3JlKGN1cnJlbnRTY29yZSkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKTtcblxuICBzcGxpY2VOZXdTY29yZShjdXJyZW50U2NvcmUsIGN1cnJlbnRIaWdoU2NvcmVMaXN0KTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlTmV3U2NvcmUoY3VycmVudFNjb3JlLCBjdXJyZW50TGlzdCkge1xuICBsZXQgc3BsaWNlQmVnaW4gPSBmaW5kQmVnaW5TcGxpY2VJbmRleChjdXJyZW50U2NvcmUsIGN1cnJlbnRMaXN0KTtcblxuICBpZiAoc3BsaWNlQmVnaW4gPiAtMSkge1xuICAgIGxldCBuZXdIaWdoU2NvcmVPYmplY3QgPSBnZXRJbml0aWFscyhjdXJyZW50U2NvcmUpO1xuXG4gICAgY3VycmVudExpc3Quc3BsaWNlKHNwbGljZUJlZ2luLCAwLCBuZXdIaWdoU2NvcmVPYmplY3QpO1xuICAgIGN1cnJlbnRMaXN0LnBvcCgpO1xuICAgIGdlbmVyYXRlSGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEJlZ2luU3BsaWNlSW5kZXgoY3VycmVudFNjb3JlLCBjdXJyZW50TGlzdCkge1xuICByZXR1cm4gY3VycmVudExpc3QuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0uc2NvcmUgPCBjdXJyZW50U2NvcmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFscyhjdXJyZW50U2NvcmUpIHtcbiAgbGV0IG1lc3NhZ2UgPSAnWW91IGVhcm5lZCBhIGhpZ2ggc2NvcmUhIFBsZWFzZSBlbnRlciB5b3VyIGluaXRpYWxzLic7XG4gIGxldCBkZWZhdWx0SW5pdHMgPSAnQUFBJztcbiAgbGV0IG5ld0luaXRpYWxzID0gcHJvbXB0KG1lc3NhZ2UsIGRlZmF1bHRJbml0cyk7XG5cbiAgcmV0dXJuIG1ha2VOZXdTY29yZU9iaihuZXdJbml0aWFscywgZGVmYXVsdEluaXRzLCBjdXJyZW50U2NvcmUpO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3U2NvcmVPYmoobmV3SW5pdGlhbHMsIGRlZmF1bHRJbml0cywgY3VycmVudFNjb3JlKSB7XG4gIHJldHVybiB7XG4gICAgaW5pdGlhbHM6IChuZXdJbml0aWFscyB8fCBkZWZhdWx0SW5pdHMpLnRvVXBwZXJDYXNlKCkuc2xpY2UoMCwgMyksXG4gICAgc2NvcmU6IGN1cnJlbnRTY29yZVxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=