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
      this.score++;
      this.checkLevel();
      this.growSnake(snake);
      this.food = this.placeFood();
    }
  }, {
    key: 'checkLevel',
    value: function checkLevel() {
      if (this.score % 5 === 0) {
        this.playLevelSound();
        this.level++;
      } else {
        this.playNomSound();
      }
    }
  }, {
    key: 'playLevelSound',
    value: function playLevelSound() {
      var audio = new Audio('./assets/sounds/levelup.mp3');

      audio.play();
    }
  }, {
    key: 'playNomSound',
    value: function playNomSound() {
      var nomSounds = Math.floor(Math.random() * 4 + 1);
      var audio = new Audio('./assets/sounds/nom' + nomSounds + '.wav');

      audio.play();
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
  canvas.style.cursor = 'pointer';
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
  currentList.forEach(function (item) {
    highScoreList.innerHTML += '<li aria-label="high-score-rank">\n                  <span class="initials" aria-label="high-score-initials">\n                    ' + item.initials + '\n                  </span>\n                  <span class="score" aria-label="high-score">\n                        ' + item.score + '\n                  </span>\n                </li>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiY3R4IiwiU25ha2UiLCJGb29kIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzbmFrZSIsImZvb2QiLCJtYWtlRm9vZCIsInNjb3JlIiwibGV2ZWwiLCJrZXlQYWQiLCJwcmV2ZW50RG91YmxlQmFjayIsInRvZ2dsZVBhdXNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3Rm9vZCIsImkiLCJ0YWlsIiwibGVuZ3RoIiwiaXNDb2xsaWRpbmdXaXRoIiwicGxhY2VGb29kIiwiY2FudmFzIiwiY2hlY2tUYWlsQ29sbGlzaW9uIiwiY2hlY2tDb2xsaXNpb24iLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsImVhdEZvb2QiLCJwb3B1bGF0ZSIsInBsYXlHYW1lT3ZlclNvdW5kIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJjaGVja0xldmVsIiwiZ3Jvd1NuYWtlIiwicGxheUxldmVsU291bmQiLCJwbGF5Tm9tU291bmQiLCJub21Tb3VuZHMiLCJmbG9vciIsInRhaWxMZW5ndGgiLCJtb3ZlIiwiYW5pbWF0ZSIsImRyYXciLCJlIiwicHJldmVudEFycm93U3BhY2VEZWZhdWx0T25seSIsInByb3BlcnR5IiwiY29kZSIsInBlbmRpbmdEaXJlY3Rpb24iLCJwcmV2ZW50RGVmYXVsdCIsImdhbWVQYXVzZSIsInBlbmRYIiwicGVuZFkiLCJwZW5kaW5nRGlyIiwiZHgiLCJkeSIsIm9iamVjdCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkeHYiLCJkeXYiLCJmb3JFYWNoIiwiY2h1bmsiLCJwdXNoIiwiY2hhbmdlRGlyZWN0aW9uIiwibWFrZUNodW5rIiwic2hpZnQiLCJkaXJlY3Rpb24iLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJnYW1lU2NvcmUiLCJoaWdoU2NvcmVMaXN0IiwiZ2FtZUxldmVsIiwic3RhcnRpbmdHYW1lU3BlZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiLCJwdWxsSGlnaFNjb3JlIiwicmVxdWVzdEZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZU91dCIsInNldFRpbWVvdXQiLCJnYW1lTG9vcCIsImlubmVyVGV4dCIsImdhbWVPdmVyU2VxdWVuY2UiLCJwbGF5R2FtZSIsImNsZWFyQ2FudmFzIiwicHJpbnRHYW1lT3ZlciIsInN0eWxlIiwiY3Vyc29yIiwiY2hlY2tIaWdoU2NvcmUiLCJjbGVhclJlY3QiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJwcmludE5ld0dhbWUiLCJtYWtlTmV3R2FtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja0xldmVsU3BlZWQiLCJoYW5kbGVTbmFrZSIsInBhcnNlSW50IiwicGFyc2VTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdlbmVyYXRlRmFrZVNjb3JlcyIsImZha2VIaWdoU2NvcmVzIiwiZmFrZUluaXRzIiwiZmFrZVNjb3JlcyIsImluaXQiLCJpbmRleCIsImluaXRpYWxzIiwicmVwZWF0IiwiY3VycmVudEhpZ2hTY29yZUxpc3QiLCJnZW5lcmF0ZUhpZ2hTY29yZUxpc3QiLCJjdXJyZW50TGlzdCIsImNsZWFyQ3VycmVudExpc3QiLCJzZXRIaWdoU2NvcmVMaXN0IiwicmVuZGVySGlnaFNjb3JlTGlzdCIsImlubmVySFRNTCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpdGVtIiwiY3VycmVudFNjb3JlIiwic3BsaWNlTmV3U2NvcmUiLCJzcGxpY2VCZWdpbiIsImZpbmRCZWdpblNwbGljZUluZGV4IiwibmV3SGlnaFNjb3JlT2JqZWN0IiwiZ2V0SW5pdGlhbHMiLCJzcGxpY2UiLCJwb3AiLCJmaW5kSW5kZXgiLCJtZXNzYWdlIiwiZGVmYXVsdEluaXRzIiwibmV3SW5pdGlhbHMiLCJwcm9tcHQiLCJtYWtlTmV3U2NvcmVPYmoiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLFlBQVksbUJBQUFDLENBQVEsdUNBQVIsQ0FBbEI7O0FBRUFDLE9BQU9DLE9BQVA7QUFBQTs7QUFDRSxnQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxNQUFsQixFQUEwQkMsS0FBMUIsRUFBaUND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LFlBQXJCLEVBQW1DUixXQUFuQyxDQUFsQjs7QUFFQSxNQUFJVSxjQUFjLENBQUMsQ0FBbkIsRUFBc0I7QUFDcEIsUUFBSUUscUJBQXFCQyxZQUFZTCxZQUFaLENBQXpCOztBQUVBUixnQkFBWWMsTUFBWixDQUFtQkosV0FBbkIsRUFBZ0MsQ0FBaEMsRUFBbUNFLGtCQUFuQztBQUNBWixnQkFBWWUsR0FBWjtBQUNBaEIsMEJBQXNCQyxXQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1csb0JBQVQsQ0FBOEJILFlBQTlCLEVBQTRDUixXQUE1QyxFQUF5RDtBQUN2RCxTQUFPQSxZQUFZZ0IsU0FBWixDQUFzQixVQUFDVCxJQUFELEVBQVU7QUFDckMsV0FBT0EsS0FBS3ZILEtBQUwsR0FBYXdILFlBQXBCO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBU0ssV0FBVCxDQUFxQkwsWUFBckIsRUFBbUM7QUFDakMsTUFBSVMsVUFBVSxzREFBZDtBQUNBLE1BQUlDLGVBQWUsS0FBbkI7QUFDQSxNQUFJQyxjQUFjQyxPQUFPSCxPQUFQLEVBQWdCQyxZQUFoQixDQUFsQjs7QUFFQSxTQUFPRyxnQkFBZ0JGLFdBQWhCLEVBQTZCRCxZQUE3QixFQUEyQ1YsWUFBM0MsQ0FBUDtBQUNEOztBQUVELFNBQVNhLGVBQVQsQ0FBeUJGLFdBQXpCLEVBQXNDRCxZQUF0QyxFQUFvRFYsWUFBcEQsRUFBa0U7QUFDaEUsU0FBTztBQUNMWixjQUFVLENBQUN1QixlQUFlRCxZQUFoQixFQUE4QkksV0FBOUIsR0FBNENDLEtBQTVDLENBQWtELENBQWxELEVBQXFELENBQXJELENBREw7QUFFTHZJLFdBQU93SDtBQUZGLEdBQVA7QUFJRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZvb2QgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG59OyIsImNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9TbmFrZScpO1xuY29uc3QgRm9vZCA9IHJlcXVpcmUoJy4vRm9vZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNuYWtlID0gbmV3IFNuYWtlKDUwLCAyNTAsIDI1LCAyNSwgJ2dyZWVuJyk7XG4gICAgdGhpcy5mb29kID0gdGhpcy5tYWtlRm9vZCgpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMua2V5UGFkID0ge1xuICAgICAgJ0Fycm93VXAnOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAwLCAtMSksXG4gICAgICAnQXJyb3dSaWdodCc6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIDEsIDApLFxuICAgICAgJ0Fycm93RG93bic6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIDAsIDEpLFxuICAgICAgJ0Fycm93TGVmdCc6ICgpID0+IHRoaXMucHJldmVudERvdWJsZUJhY2soZmFsc2UsIC0xLCAwKSxcbiAgICAgICdTcGFjZSc6ICgpID0+IHRoaXMudG9nZ2xlUGF1c2UoKVxuICAgIH07XG4gIH1cblxuICBtYWtlRm9vZCgpIHtcbiAgICByZXR1cm4gbmV3IEZvb2QoXG4gICAgICAoTWF0aC5yb3VuZChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA0NzUpIC8gMjUpICogMjUpLFxuICAgICAgKE1hdGgucm91bmQoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNDc1KSAvIDI1KSAqIDI1KSxcbiAgICAgIDI1LCAyNSwgJ3JlZCcpO1xuICB9XG5cbiAgcGxhY2VGb29kKCkge1xuICAgIGxldCBuZXdGb29kID0gdGhpcy5tYWtlRm9vZCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlLnRhaWwubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAobmV3Rm9vZC5pc0NvbGxpZGluZ1dpdGgodGhpcy5zbmFrZS50YWlsW2ldKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZUZvb2QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Rm9vZDtcbiAgfVxuXG4gIGhhbmRsZVNuYWtlKHNuYWtlKSB7XG4gICAgY29uc3QgeyBjYW52YXMgfSA9IHRoaXMuY3R4O1xuXG4gICAgdGhpcy5jaGVja1RhaWxDb2xsaXNpb24oc25ha2UpO1xuICAgIHRoaXMuY2hlY2tDb2xsaXNpb24oc25ha2UsIGNhbnZhcyk7XG4gIH1cblxuICBjaGVja1RhaWxDb2xsaXNpb24oc25ha2UpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYWtlLnRhaWwubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoKHNuYWtlLnRhaWxbaV0pKSB7XG4gICAgICAgIHRoaXMuZW5kR2FtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9uKHNuYWtlLCBjYW52YXMpIHtcbiAgICBpZiAoc25ha2UuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKHNuYWtlLmlzQ29sbGlkaW5nV2l0aCh0aGlzLmZvb2QpKSB7XG4gICAgICB0aGlzLmVhdEZvb2Qoc25ha2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVsYXRlKHNuYWtlKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMucGxheUdhbWVPdmVyU291bmQoKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIHBsYXlHYW1lT3ZlclNvdW5kKCkge1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9zb3VuZHMvZXhwbG9zaW9uLndhdicpO1xuXG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgZWF0Rm9vZChzbmFrZSkge1xuICAgIHRoaXMuc2NvcmUrKztcbiAgICB0aGlzLmNoZWNrTGV2ZWwoKTtcbiAgICB0aGlzLmdyb3dTbmFrZShzbmFrZSk7XG4gICAgdGhpcy5mb29kID0gdGhpcy5wbGFjZUZvb2QoKTtcbiAgfVxuXG4gIGNoZWNrTGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmUgJSA1ID09PSAwKSB7XG4gICAgICB0aGlzLnBsYXlMZXZlbFNvdW5kKCk7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheU5vbVNvdW5kKCk7XG4gICAgfVxuICB9XG5cbiAgcGxheUxldmVsU291bmQoKSB7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9sZXZlbHVwLm1wMycpO1xuXG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgcGxheU5vbVNvdW5kKCkge1xuICAgIGxldCBub21Tb3VuZHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMSk7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC4vYXNzZXRzL3NvdW5kcy9ub20ke25vbVNvdW5kc30ud2F2YCk7XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBncm93U25ha2Uoc25ha2UpIHtcbiAgICBzbmFrZS50YWlsTGVuZ3RoICs9IDI7XG4gICAgdGhpcy5wb3B1bGF0ZShzbmFrZSk7XG4gIH1cblxuICBwb3B1bGF0ZShzbmFrZSkge1xuICAgIHNuYWtlLm1vdmUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5mb29kLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuc25ha2UuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgdGhpcy5wcmV2ZW50QXJyb3dTcGFjZURlZmF1bHRPbmx5KGUpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYCR7ZS5jb2RlfWA7XG5cbiAgICBpZiAodGhpcy5rZXlQYWRbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSAnU3BhY2UnKSB7XG4gICAgICB0aGlzLnNuYWtlLnBlbmRpbmdEaXJlY3Rpb24gPSB0aGlzLmtleVBhZFtwcm9wZXJ0eV0oKTtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnU3BhY2UnKSB7XG4gICAgICB0aGlzLmtleVBhZFtwcm9wZXJ0eV0oKTtcbiAgICB9XG4gIH1cblxuICBwcmV2ZW50QXJyb3dTcGFjZURlZmF1bHRPbmx5KGUpIHtcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgICAgZS5jb2RlID09PSAnQXJyb3dMZWZ0JyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd1VwJyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd0Rvd24nIHx8XG4gICAgICAgIGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREb3VibGVCYWNrKGdhbWVQYXVzZSwgcGVuZFgsIHBlbmRZKSB7XG4gICAgY29uc3QgcGVuZGluZ0RpciA9IHtcbiAgICAgIGR4OiB0aGlzLnNuYWtlLmR4LFxuICAgICAgZHk6IHRoaXMuc25ha2UuZHlcbiAgICB9O1xuXG4gICAgaWYgKHBlbmRYICE9PSAodGhpcy5zbmFrZS5keCAqIC0xKSB8fCBwZW5kWSAhPT0gKHRoaXMuc25ha2UuZHkgKiAtMSkpIHtcbiAgICAgIHRoaXMucGF1c2VkID0gZ2FtZVBhdXNlO1xuICAgICAgcGVuZGluZ0Rpci5keCA9IHBlbmRYO1xuICAgICAgcGVuZGluZ0Rpci5keSA9IHBlbmRZO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nRGlyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJlxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNuYWtlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyNTtcbiAgICB0aGlzLmR5diA9IDI1O1xuICAgIHRoaXMudGFpbCA9IFtdO1xuICAgIHRoaXMudGFpbExlbmd0aCA9IDU7XG4gICAgdGhpcy5wZW5kaW5nRGlyZWN0aW9uO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgdGhpcy50YWlsLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgICBjdHguZmlsbFJlY3QoY2h1bmsueCwgY2h1bmsueSwgY2h1bmsuaGVpZ2h0LCBjaHVuay53aWR0aCwgY2h1bmsuY29sb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZUNodW5rKCkge1xuICAgIGNvbnN0IGNodW5rID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9O1xuXG4gICAgdGhpcy50YWlsLnB1c2goY2h1bmspO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nRGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLnBlbmRpbmdEaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgICB0aGlzLm1ha2VDaHVuaygpO1xuICAgIGlmICh0aGlzLnRhaWwubGVuZ3RoID09PSB0aGlzLnRhaWxMZW5ndGgpIHtcbiAgICAgIHRoaXMudGFpbC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gIH1cbn07IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xubGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdhbWUtc2NvcmUnKTtcbmxldCBoaWdoU2NvcmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhpZ2gtc2NvcmUtbGlzdCcpO1xuY29uc3QgZ2FtZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdhbWUtbGV2ZWwnKTtcbmxldCBzdGFydGluZ0dhbWVTcGVlZCA9IDEyMDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxucHVsbEhpZ2hTY29yZSgpO1xucmVxdWVzdEZyYW1lKCk7XG5cbi8vIGdhbWUgYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZSgpIHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lT3V0KTtcbn1cblxuZnVuY3Rpb24gdGltZU91dCgpIHtcbiAgaWYgKCFnYW1lLnBhdXNlZCkge1xuICAgIHNldFRpbWVvdXQoZ2FtZUxvb3AsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KHRpbWVPdXQsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgZ2FtZVNjb3JlLmlubmVyVGV4dCA9IGdhbWUuc2NvcmU7XG4gIGlmIChnYW1lLmdhbWVPdmVyKSB7XG4gICAgZ2FtZU92ZXJTZXF1ZW5jZSgpO1xuICB9IGVsc2Uge1xuICAgIHBsYXlHYW1lKCk7XG4gIH1cbn1cblxuLy8gZ2FtZSBvdmVyIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gZ2FtZU92ZXJTZXF1ZW5jZSgpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgcHJpbnRHYW1lT3ZlcigpO1xuICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICBjaGVja0hpZ2hTY29yZShnYW1lLnNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gcHJpbnRHYW1lT3ZlcigpIHtcbiAgY3R4LmZvbnQgPSAnNHJlbSBcIlN1cGVyc2NyaXB0XCInO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgY3R4LmZpbGxUZXh0KCdHYW1lIE92ZXInLCAyNTAsIDI1MCk7XG4gIHByaW50TmV3R2FtZSgpO1xufVxuXG5mdW5jdGlvbiBwcmludE5ld0dhbWUoKSB7XG4gIGN0eC5mb250ID0gJzJyZW0gXCJWVDMyM1wiJztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gIGN0eC5maWxsVGV4dCgnQ2xpY2sgaGVyZSB0byBzdGFydCBuZXcgZ2FtZScsIDI1MCwgMzAwKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU5ld0dhbWUpO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3R2FtZSgpIHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU5ld0dhbWUpO1xuICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xuICBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgc3RhcnRpbmdHYW1lU3BlZWQgPSAxMjA7XG4gIGdhbWVMb29wKCk7XG59XG5cbi8vIGdhbWUgcGxheSBmdW5jdGlvbmFsaXR5XG5cbmZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuICBjbGVhckNhbnZhcygpO1xuICBjaGVja0xldmVsU3BlZWQoKTtcbiAgZ2FtZS5oYW5kbGVTbmFrZShnYW1lLnNuYWtlKTtcbiAgcmVxdWVzdEZyYW1lKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWxTcGVlZCgpIHtcbiAgaWYgKHBhcnNlSW50KGdhbWVMZXZlbC5pbm5lclRleHQpICE9PSBnYW1lLmxldmVsKSB7XG4gICAgZ2FtZUxldmVsLmlubmVyVGV4dCA9IGdhbWUubGV2ZWw7XG4gICAgc3RhcnRpbmdHYW1lU3BlZWQgLT0gNTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG5cbi8vIGhpZ2ggc2NvcmUgZnVuY3Rpb25hbGl0eVxuXG5mdW5jdGlvbiBwYXJzZVN0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoU2NvcmVMaXN0JykpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZha2VTY29yZXMoKSB7XG4gIGNvbnN0IGZha2VIaWdoU2NvcmVzID0gW107XG4gIGNvbnN0IGZha2VJbml0cyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCBmYWtlU2NvcmVzID0gWzEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXTtcblxuICBmYWtlSW5pdHMuZm9yRWFjaCgoaW5pdCwgaW5kZXgpID0+IHtcbiAgICBmYWtlSGlnaFNjb3Jlcy5wdXNoKHtpbml0aWFsczogaW5pdC5yZXBlYXQoMyksXG4gICAgICBzY29yZTogZmFrZVNjb3Jlc1tpbmRleF19KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZha2VIaWdoU2NvcmVzO1xufVxuXG5mdW5jdGlvbiBwdWxsSGlnaFNjb3JlKCkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKSB8fCBnZW5lcmF0ZUZha2VTY29yZXMoKTtcblxuICBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudEhpZ2hTY29yZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgY2xlYXJDdXJyZW50TGlzdCgpO1xuICBzZXRIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KTtcbiAgcmVuZGVySGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ3VycmVudExpc3QoKSB7XG4gIGhpZ2hTY29yZUxpc3QuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNldEhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hTY29yZUxpc3QnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50TGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KSB7XG4gIGN1cnJlbnRMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBoaWdoU2NvcmVMaXN0LmlubmVySFRNTCArPSAgYDxsaSBhcmlhLWxhYmVsPVwiaGlnaC1zY29yZS1yYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCIgYXJpYS1sYWJlbD1cImhpZ2gtc2NvcmUtaW5pdGlhbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLmluaXRpYWxzfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZVwiIGFyaWEtbGFiZWw9XCJoaWdoLXNjb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uc2NvcmV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5gO1xuICB9KTtcbn1cblxuLy8gb24gZ2FtZSBvdmVyXG5cbmZ1bmN0aW9uIGNoZWNrSGlnaFNjb3JlKGN1cnJlbnRTY29yZSkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKTtcblxuICBzcGxpY2VOZXdTY29yZShjdXJyZW50U2NvcmUsIGN1cnJlbnRIaWdoU2NvcmVMaXN0KTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlTmV3U2NvcmUoY3VycmVudFNjb3JlLCBjdXJyZW50TGlzdCkge1xuICBsZXQgc3BsaWNlQmVnaW4gPSBmaW5kQmVnaW5TcGxpY2VJbmRleChjdXJyZW50U2NvcmUsIGN1cnJlbnRMaXN0KTtcblxuICBpZiAoc3BsaWNlQmVnaW4gPiAtMSkge1xuICAgIGxldCBuZXdIaWdoU2NvcmVPYmplY3QgPSBnZXRJbml0aWFscyhjdXJyZW50U2NvcmUpO1xuXG4gICAgY3VycmVudExpc3Quc3BsaWNlKHNwbGljZUJlZ2luLCAwLCBuZXdIaWdoU2NvcmVPYmplY3QpO1xuICAgIGN1cnJlbnRMaXN0LnBvcCgpO1xuICAgIGdlbmVyYXRlSGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEJlZ2luU3BsaWNlSW5kZXgoY3VycmVudFNjb3JlLCBjdXJyZW50TGlzdCkge1xuICByZXR1cm4gY3VycmVudExpc3QuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0uc2NvcmUgPCBjdXJyZW50U2NvcmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFscyhjdXJyZW50U2NvcmUpIHtcbiAgbGV0IG1lc3NhZ2UgPSAnWW91IGVhcm5lZCBhIGhpZ2ggc2NvcmUhIFBsZWFzZSBlbnRlciB5b3VyIGluaXRpYWxzLic7XG4gIGxldCBkZWZhdWx0SW5pdHMgPSAnQUFBJztcbiAgbGV0IG5ld0luaXRpYWxzID0gcHJvbXB0KG1lc3NhZ2UsIGRlZmF1bHRJbml0cyk7XG5cbiAgcmV0dXJuIG1ha2VOZXdTY29yZU9iaihuZXdJbml0aWFscywgZGVmYXVsdEluaXRzLCBjdXJyZW50U2NvcmUpO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3U2NvcmVPYmoobmV3SW5pdGlhbHMsIGRlZmF1bHRJbml0cywgY3VycmVudFNjb3JlKSB7XG4gIHJldHVybiB7XG4gICAgaW5pdGlhbHM6IChuZXdJbml0aWFscyB8fCBkZWZhdWx0SW5pdHMpLnRvVXBwZXJDYXNlKCkuc2xpY2UoMCwgMyksXG4gICAgc2NvcmU6IGN1cnJlbnRTY29yZVxuICB9O1xufSJdLCJzb3VyY2VSb290IjoiIn0=