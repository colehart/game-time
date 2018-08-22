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
      this.playGameOverSound();
      this.gameOver = true;
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
  changeCanvasPointer();
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
  canvas.style.cursor = 'none';
  game = new Game(ctx);
  startingGameSpeed = 120;
  gameLoop();
}

function changeCanvasPointer() {
  canvas.style.cursor = 'pointer';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiY3R4IiwiU25ha2UiLCJGb29kIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzbmFrZSIsImZvb2QiLCJtYWtlRm9vZCIsInNjb3JlIiwibGV2ZWwiLCJrZXlQYWQiLCJwcmV2ZW50RG91YmxlQmFjayIsInRvZ2dsZVBhdXNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3Rm9vZCIsImkiLCJ0YWlsIiwibGVuZ3RoIiwiaXNDb2xsaWRpbmdXaXRoIiwicGxhY2VGb29kIiwiY2FudmFzIiwiY2hlY2tUYWlsQ29sbGlzaW9uIiwiY2hlY2tDb2xsaXNpb24iLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsImVhdEZvb2QiLCJwb3B1bGF0ZSIsInBsYXlHYW1lT3ZlclNvdW5kIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJwbGF5Tm9tU291bmQiLCJjaGVja0xldmVsIiwiZ3Jvd1NuYWtlIiwibm9tU291bmRzIiwiZmxvb3IiLCJ0YWlsTGVuZ3RoIiwibW92ZSIsImFuaW1hdGUiLCJkcmF3IiwiZSIsInByZXZlbnRBcnJvd1NwYWNlRGVmYXVsdE9ubHkiLCJwcm9wZXJ0eSIsImNvZGUiLCJwZW5kaW5nRGlyZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJnYW1lUGF1c2UiLCJwZW5kWCIsInBlbmRZIiwicGVuZGluZ0RpciIsImR4IiwiZHkiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHh2IiwiZHl2IiwiZm9yRWFjaCIsImNodW5rIiwicHVzaCIsImNoYW5nZURpcmVjdGlvbiIsIm1ha2VDaHVuayIsInNoaWZ0IiwiZGlyZWN0aW9uIiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwiZ2FtZVNjb3JlIiwiaGlnaFNjb3JlTGlzdCIsImdhbWVMZXZlbCIsInN0YXJ0aW5nR2FtZVNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVByZXNzIiwicHVsbEhpZ2hTY29yZSIsInJlcXVlc3RGcmFtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWVPdXQiLCJzZXRUaW1lb3V0IiwiZ2FtZUxvb3AiLCJpbm5lclRleHQiLCJnYW1lT3ZlclNlcXVlbmNlIiwicGxheUdhbWUiLCJjbGVhckNhbnZhcyIsInByaW50R2FtZU92ZXIiLCJjaGFuZ2VDYW52YXNQb2ludGVyIiwiY2hlY2tIaWdoU2NvcmUiLCJjbGVhclJlY3QiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJwcmludE5ld0dhbWUiLCJtYWtlTmV3R2FtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImN1cnNvciIsImNoZWNrTGV2ZWxTcGVlZCIsImhhbmRsZVNuYWtlIiwicGFyc2VJbnQiLCJwYXJzZVN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVGYWtlU2NvcmVzIiwiZmFrZUhpZ2hTY29yZXMiLCJmYWtlSW5pdHMiLCJmYWtlU2NvcmVzIiwiaW5pdCIsImluZGV4IiwiaW5pdGlhbHMiLCJyZXBlYXQiLCJjdXJyZW50SGlnaFNjb3JlTGlzdCIsImdlbmVyYXRlSGlnaFNjb3JlTGlzdCIsImN1cnJlbnRMaXN0IiwiY2xlYXJDdXJyZW50TGlzdCIsInNldEhpZ2hTY29yZUxpc3QiLCJyZW5kZXJIaWdoU2NvcmVMaXN0IiwiaW5uZXJIVE1MIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIml0ZW0iLCJjdXJyZW50U2NvcmUiLCJzcGxpY2VOZXdTY29yZSIsInNwbGljZUJlZ2luIiwiZmluZEJlZ2luU3BsaWNlSW5kZXgiLCJuZXdIaWdoU2NvcmVPYmplY3QiLCJnZXRJbml0aWFscyIsInNwbGljZSIsInBvcCIsImZpbmRJbmRleCIsIm1lc3NhZ2UiLCJkZWZhdWx0SW5pdHMiLCJuZXdJbml0aWFscyIsInByb21wdCIsIm1ha2VOZXdTY29yZU9iaiIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztBQUNFLGdCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixF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QUFzQjtBQUNwQixRQUFJRSxxQkFBcUJDLFlBQVlMLFlBQVosQ0FBekI7O0FBRUFSLGdCQUFZYyxNQUFaLENBQW1CSixXQUFuQixFQUFnQyxDQUFoQyxFQUFtQ0Usa0JBQW5DO0FBQ0FaLGdCQUFZZSxHQUFaO0FBQ0FoQiwwQkFBc0JDLFdBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTVyxvQkFBVCxDQUE4QkgsWUFBOUIsRUFBNENSLFdBQTVDLEVBQXlEO0FBQ3ZELFNBQU9BLFlBQVlnQixTQUFaLENBQXNCLFVBQUNULElBQUQsRUFBVTtBQUNyQyxXQUFPQSxLQUFLdkgsS0FBTCxHQUFhd0gsWUFBcEI7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFRCxTQUFTSyxXQUFULENBQXFCTCxZQUFyQixFQUFtQztBQUNqQyxNQUFJUyxVQUFVLHNEQUFkO0FBQ0EsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQUlDLGNBQWNDLE9BQU9ILE9BQVAsRUFBZ0JDLFlBQWhCLENBQWxCOztBQUVBLFNBQU9HLGdCQUFnQkYsV0FBaEIsRUFBNkJELFlBQTdCLEVBQTJDVixZQUEzQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU2EsZUFBVCxDQUF5QkYsV0FBekIsRUFBc0NELFlBQXRDLEVBQW9EVixZQUFwRCxFQUFrRTtBQUNoRSxTQUFPO0FBQ0xaLGNBQVUsQ0FBQ3VCLGVBQWVELFlBQWhCLEVBQThCSSxXQUE5QixHQUE0Q0MsS0FBNUMsQ0FBa0QsQ0FBbEQsRUFBcUQsQ0FBckQsQ0FETDtBQUVMdkksV0FBT3dIO0FBRkYsR0FBUDtBQUlELEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRm9vZCBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gIH1cbn07IiwiY29uc3QgU25ha2UgPSByZXF1aXJlKCcuL1NuYWtlJyk7XG5jb25zdCBGb29kID0gcmVxdWlyZSgnLi9Gb29kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UoNTAsIDI1MCwgMjUsIDI1LCAnZ3JlZW4nKTtcbiAgICB0aGlzLmZvb2QgPSB0aGlzLm1ha2VGb29kKCk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5rZXlQYWQgPSB7XG4gICAgICAnQXJyb3dVcCc6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIDAsIC0xKSxcbiAgICAgICdBcnJvd1JpZ2h0JzogKCkgPT4gdGhpcy5wcmV2ZW50RG91YmxlQmFjayhmYWxzZSwgMSwgMCksXG4gICAgICAnQXJyb3dEb3duJzogKCkgPT4gdGhpcy5wcmV2ZW50RG91YmxlQmFjayhmYWxzZSwgMCwgMSksXG4gICAgICAnQXJyb3dMZWZ0JzogKCkgPT4gdGhpcy5wcmV2ZW50RG91YmxlQmFjayhmYWxzZSwgLTEsIDApLFxuICAgICAgJ1NwYWNlJzogKCkgPT4gdGhpcy50b2dnbGVQYXVzZSgpXG4gICAgfTtcbiAgfVxuXG4gIG1ha2VGb29kKCkge1xuICAgIHJldHVybiBuZXcgRm9vZChcbiAgICAgIChNYXRoLnJvdW5kKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDQ3NSkgLyAyNSkgKiAyNSksXG4gICAgICAoTWF0aC5yb3VuZChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA0NzUpIC8gMjUpICogMjUpLFxuICAgICAgMjUsIDI1LCAncmVkJyk7XG4gIH1cblxuICBwbGFjZUZvb2QoKSB7XG4gICAgbGV0IG5ld0Zvb2QgPSB0aGlzLm1ha2VGb29kKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc25ha2UudGFpbC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmIChuZXdGb29kLmlzQ29sbGlkaW5nV2l0aCh0aGlzLnNuYWtlLnRhaWxbaV0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlRm9vZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdGb29kO1xuICB9XG5cbiAgaGFuZGxlU25ha2Uoc25ha2UpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICB0aGlzLmNoZWNrVGFpbENvbGxpc2lvbihzbmFrZSk7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbihzbmFrZSwgY2FudmFzKTtcbiAgfVxuXG4gIGNoZWNrVGFpbENvbGxpc2lvbihzbmFrZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc25ha2UudGFpbC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmIChzbmFrZS5pc0NvbGxpZGluZ1dpdGgoc25ha2UudGFpbFtpXSkpIHtcbiAgICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24oc25ha2UsIGNhbnZhcykge1xuICAgIGlmIChzbmFrZS5pc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkpIHtcbiAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgIH0gZWxzZSBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoKHRoaXMuZm9vZCkpIHtcbiAgICAgIHRoaXMuZWF0Rm9vZChzbmFrZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9wdWxhdGUoc25ha2UpO1xuICAgIH1cbiAgfVxuXG4gIGVuZEdhbWUoKSB7XG4gICAgdGhpcy5wbGF5R2FtZU92ZXJTb3VuZCgpO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgcGxheUdhbWVPdmVyU291bmQoKSB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9leHBsb3Npb24ud2F2Jyk7XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBlYXRGb29kKHNuYWtlKSB7XG4gICAgdGhpcy5wbGF5Tm9tU291bmQoKTtcbiAgICB0aGlzLnNjb3JlKys7XG4gICAgdGhpcy5jaGVja0xldmVsKCk7XG4gICAgdGhpcy5ncm93U25ha2Uoc25ha2UpO1xuICAgIHRoaXMuZm9vZCA9IHRoaXMucGxhY2VGb29kKCk7XG4gIH1cblxuICBwbGF5Tm9tU291bmQoKSB7XG4gICAgbGV0IG5vbVNvdW5kcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAxKTtcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhgLi9hc3NldHMvc291bmRzL25vbSR7bm9tU291bmRzfS53YXZgKTtcblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGNoZWNrTGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmUgJSA1ID09PSAwKSB7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgfVxuICB9XG5cbiAgZ3Jvd1NuYWtlKHNuYWtlKSB7XG4gICAgc25ha2UudGFpbExlbmd0aCArPSAyO1xuICAgIHRoaXMucG9wdWxhdGUoc25ha2UpO1xuICB9XG5cbiAgcG9wdWxhdGUoc25ha2UpIHtcbiAgICBzbmFrZS5tb3ZlKCk7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuZm9vZC5kcmF3KHRoaXMuY3R4KTtcbiAgICB0aGlzLnNuYWtlLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIHRoaXMucHJldmVudEFycm93U3BhY2VEZWZhdWx0T25seShlKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGAke2UuY29kZX1gO1xuXG4gICAgaWYgKHRoaXMua2V5UGFkW3Byb3BlcnR5XSAmJiBwcm9wZXJ0eSAhPT0gJ1NwYWNlJykge1xuICAgICAgdGhpcy5zbmFrZS5wZW5kaW5nRGlyZWN0aW9uID0gdGhpcy5rZXlQYWRbcHJvcGVydHldKCk7XG4gICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gJ1NwYWNlJykge1xuICAgICAgdGhpcy5rZXlQYWRbcHJvcGVydHldKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmVudEFycm93U3BhY2VEZWZhdWx0T25seShlKSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93UmlnaHQnIHx8XG4gICAgICAgIGUuY29kZSA9PT0gJ0Fycm93TGVmdCcgfHxcbiAgICAgICAgZS5jb2RlID09PSAnQXJyb3dVcCcgfHxcbiAgICAgICAgZS5jb2RlID09PSAnQXJyb3dEb3duJyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2ZW50RG91YmxlQmFjayhnYW1lUGF1c2UsIHBlbmRYLCBwZW5kWSkge1xuICAgIGNvbnN0IHBlbmRpbmdEaXIgPSB7XG4gICAgICBkeDogdGhpcy5zbmFrZS5keCxcbiAgICAgIGR5OiB0aGlzLnNuYWtlLmR5XG4gICAgfTtcblxuICAgIGlmIChwZW5kWCAhPT0gKHRoaXMuc25ha2UuZHggKiAtMSkgfHwgcGVuZFkgIT09ICh0aGlzLnNuYWtlLmR5ICogLTEpKSB7XG4gICAgICB0aGlzLnBhdXNlZCA9IGdhbWVQYXVzZTtcbiAgICAgIHBlbmRpbmdEaXIuZHggPSBwZW5kWDtcbiAgICAgIHBlbmRpbmdEaXIuZHkgPSBwZW5kWTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZ0RpcjtcbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aChvYmplY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgb2JqZWN0LnggKyBvYmplY3Qud2lkdGggJiZcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBvYmplY3QueCAmJlxuICAgICAgdGhpcy55IDwgb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0ICYmXG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IG9iamVjdC55XG4gICAgKTtcbiAgfVxuXG4gIGlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCAwIHx8XG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzV2lkdGggfHxcbiAgICAgIHRoaXMueSA8IDAgfHxcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzSGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvciB9ID0gdGhpcztcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cbn07IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTbmFrZSBleHRlbmRzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgc3VwZXIoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpO1xuICAgIHRoaXMuZHggPSAxO1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHh2ID0gMjU7XG4gICAgdGhpcy5keXYgPSAyNTtcbiAgICB0aGlzLnRhaWwgPSBbXTtcbiAgICB0aGlzLnRhaWxMZW5ndGggPSA1O1xuICAgIHRoaXMucGVuZGluZ0RpcmVjdGlvbjtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICAgIHRoaXMudGFpbC5mb3JFYWNoKChjaHVuaykgPT4ge1xuICAgICAgY3R4LmZpbGxSZWN0KGNodW5rLngsIGNodW5rLnksIGNodW5rLmhlaWdodCwgY2h1bmsud2lkdGgsIGNodW5rLmNvbG9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VDaHVuaygpIHtcbiAgICBjb25zdCBjaHVuayA9IHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXG4gICAgfTtcblxuICAgIHRoaXMudGFpbC5wdXNoKGNodW5rKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZ0RpcmVjdGlvbikge1xuICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24odGhpcy5wZW5kaW5nRGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5keXY7XG4gICAgdGhpcy5tYWtlQ2h1bmsoKTtcbiAgICBpZiAodGhpcy50YWlsLmxlbmd0aCA9PT0gdGhpcy50YWlsTGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhaWwuc2hpZnQoKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5keCA9IGRpcmVjdGlvbi5keDtcbiAgICB0aGlzLmR5ID0gZGlyZWN0aW9uLmR5O1xuICB9XG59OyIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUnKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmxldCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGdhbWVTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1nYW1lLXNjb3JlJyk7XG5sZXQgaGlnaFNjb3JlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1oaWdoLXNjb3JlLWxpc3QnKTtcbmNvbnN0IGdhbWVMZXZlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1nYW1lLWxldmVsJyk7XG5sZXQgc3RhcnRpbmdHYW1lU3BlZWQgPSAxMjA7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XG5cbnB1bGxIaWdoU2NvcmUoKTtcbnJlcXVlc3RGcmFtZSgpO1xuXG4vLyBnYW1lIGFuaW1hdGlvblxuXG5mdW5jdGlvbiByZXF1ZXN0RnJhbWUoKSB7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZU91dCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVPdXQoKSB7XG4gIGlmICghZ2FtZS5wYXVzZWQpIHtcbiAgICBzZXRUaW1lb3V0KGdhbWVMb29wLCBzdGFydGluZ0dhbWVTcGVlZCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dCh0aW1lT3V0LCBzdGFydGluZ0dhbWVTcGVlZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGdhbWVTY29yZS5pbm5lclRleHQgPSBnYW1lLnNjb3JlO1xuICBpZiAoZ2FtZS5nYW1lT3Zlcikge1xuICAgIGdhbWVPdmVyU2VxdWVuY2UoKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5R2FtZSgpO1xuICB9XG59XG5cbi8vIGdhbWUgb3ZlciBmdW5jdGlvbmFsaXR5XG5cbmZ1bmN0aW9uIGdhbWVPdmVyU2VxdWVuY2UoKSB7XG4gIGNsZWFyQ2FudmFzKCk7XG4gIHByaW50R2FtZU92ZXIoKTtcbiAgY2hhbmdlQ2FudmFzUG9pbnRlcigpO1xuICBjaGVja0hpZ2hTY29yZShnYW1lLnNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gcHJpbnRHYW1lT3ZlcigpIHtcbiAgY3R4LmZvbnQgPSAnNHJlbSBcIlN1cGVyc2NyaXB0XCInO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgY3R4LmZpbGxUZXh0KCdHYW1lIE92ZXInLCAyNTAsIDI1MCk7XG4gIHByaW50TmV3R2FtZSgpO1xufVxuXG5mdW5jdGlvbiBwcmludE5ld0dhbWUoKSB7XG4gIGN0eC5mb250ID0gJzJyZW0gXCJWVDMyM1wiJztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gIGN0eC5maWxsVGV4dCgnQ2xpY2sgaGVyZSB0byBzdGFydCBuZXcgZ2FtZScsIDI1MCwgMzAwKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU5ld0dhbWUpO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3R2FtZSgpIHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU5ld0dhbWUpO1xuICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xuICBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgc3RhcnRpbmdHYW1lU3BlZWQgPSAxMjA7XG4gIGdhbWVMb29wKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNhbnZhc1BvaW50ZXIoKSB7XG4gIGNhbnZhcy5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG59XG5cbi8vIGdhbWUgcGxheSBmdW5jdGlvbmFsaXR5XG5cbmZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuICBjbGVhckNhbnZhcygpO1xuICBjaGVja0xldmVsU3BlZWQoKTtcbiAgZ2FtZS5oYW5kbGVTbmFrZShnYW1lLnNuYWtlKTtcbiAgcmVxdWVzdEZyYW1lKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWxTcGVlZCgpIHtcbiAgaWYgKHBhcnNlSW50KGdhbWVMZXZlbC5pbm5lclRleHQpICE9PSBnYW1lLmxldmVsKSB7XG4gICAgZ2FtZUxldmVsLmlubmVyVGV4dCA9IGdhbWUubGV2ZWw7XG4gICAgc3RhcnRpbmdHYW1lU3BlZWQgLT0gNTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG5cbi8vIGhpZ2ggc2NvcmUgZnVuY3Rpb25hbGl0eVxuXG5mdW5jdGlvbiBwYXJzZVN0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoU2NvcmVMaXN0JykpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZha2VTY29yZXMoKSB7XG4gIGNvbnN0IGZha2VIaWdoU2NvcmVzID0gW107XG4gIGNvbnN0IGZha2VJbml0cyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCBmYWtlU2NvcmVzID0gWzEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXTtcblxuICBmYWtlSW5pdHMuZm9yRWFjaCgoaW5pdCwgaW5kZXgpID0+IHtcbiAgICBmYWtlSGlnaFNjb3Jlcy5wdXNoKHtpbml0aWFsczogaW5pdC5yZXBlYXQoMyksXG4gICAgICBzY29yZTogZmFrZVNjb3Jlc1tpbmRleF19KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZha2VIaWdoU2NvcmVzO1xufVxuXG5mdW5jdGlvbiBwdWxsSGlnaFNjb3JlKCkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKSB8fCBnZW5lcmF0ZUZha2VTY29yZXMoKTtcblxuICBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudEhpZ2hTY29yZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgY2xlYXJDdXJyZW50TGlzdCgpO1xuICBzZXRIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KTtcbiAgcmVuZGVySGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ3VycmVudExpc3QoKSB7XG4gIGhpZ2hTY29yZUxpc3QuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNldEhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hTY29yZUxpc3QnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50TGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KSB7XG4gIGN1cnJlbnRMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGlnaFNjb3JlTGlzdC5pbm5lckhUTUwgKz0gIGA8bGkgY2xhc3M9XCJwbGFjZS0ke2luZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPiR7aXRlbS5pbml0aWFsc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCI+JHtpdGVtLnNjb3JlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH0pO1xufVxuXG4vLyBvbiBnYW1lIG92ZXJcblxuZnVuY3Rpb24gY2hlY2tIaWdoU2NvcmUoY3VycmVudFNjb3JlKSB7XG4gIGxldCBjdXJyZW50SGlnaFNjb3JlTGlzdCA9IHBhcnNlU3RvcmFnZSgpO1xuXG4gIHNwbGljZU5ld1Njb3JlKGN1cnJlbnRTY29yZSwgY3VycmVudEhpZ2hTY29yZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBzcGxpY2VOZXdTY29yZShjdXJyZW50U2NvcmUsIGN1cnJlbnRMaXN0KSB7XG4gIGxldCBzcGxpY2VCZWdpbiA9IGZpbmRCZWdpblNwbGljZUluZGV4KGN1cnJlbnRTY29yZSwgY3VycmVudExpc3QpO1xuXG4gIGlmIChzcGxpY2VCZWdpbiA+IC0xKSB7XG4gICAgbGV0IG5ld0hpZ2hTY29yZU9iamVjdCA9IGdldEluaXRpYWxzKGN1cnJlbnRTY29yZSk7XG5cbiAgICBjdXJyZW50TGlzdC5zcGxpY2Uoc3BsaWNlQmVnaW4sIDAsIG5ld0hpZ2hTY29yZU9iamVjdCk7XG4gICAgY3VycmVudExpc3QucG9wKCk7XG4gICAgZ2VuZXJhdGVIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQmVnaW5TcGxpY2VJbmRleChjdXJyZW50U2NvcmUsIGN1cnJlbnRMaXN0KSB7XG4gIHJldHVybiBjdXJyZW50TGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gaXRlbS5zY29yZSA8IGN1cnJlbnRTY29yZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxzKGN1cnJlbnRTY29yZSkge1xuICBsZXQgbWVzc2FnZSA9ICdZb3UgZWFybmVkIGEgaGlnaCBzY29yZSEgUGxlYXNlIGVudGVyIHlvdXIgaW5pdGlhbHMuJztcbiAgbGV0IGRlZmF1bHRJbml0cyA9ICdBQUEnO1xuICBsZXQgbmV3SW5pdGlhbHMgPSBwcm9tcHQobWVzc2FnZSwgZGVmYXVsdEluaXRzKTtcblxuICByZXR1cm4gbWFrZU5ld1Njb3JlT2JqKG5ld0luaXRpYWxzLCBkZWZhdWx0SW5pdHMsIGN1cnJlbnRTY29yZSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdTY29yZU9iaihuZXdJbml0aWFscywgZGVmYXVsdEluaXRzLCBjdXJyZW50U2NvcmUpIHtcbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsczogKG5ld0luaXRpYWxzIHx8IGRlZmF1bHRJbml0cykudG9VcHBlckNhc2UoKS5zbGljZSgwLCAzKSxcbiAgICBzY29yZTogY3VycmVudFNjb3JlXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==