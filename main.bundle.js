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

    var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, x, y, height, width, color));

    _this.x = _this.randomPlacement(x);
    _this.y = _this.randomPlacement(y);
    return _this;
  }

  _createClass(Food, [{
    key: 'randomPlacement',
    value: function randomPlacement(axisValue) {
      return Math.round(Math.round(Math.random() * axisValue) / 25) * 25;
    }
  }, {
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
      return new Food(475, 475, 25, 25, 'red');
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

    // called from index.js event listener

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

    // called from index.js

  }, {
    key: 'handleSnake',
    value: function handleSnake() {
      var canvas = this.ctx.canvas;


      if (this.snake.checkTailCollision()) {
        this.endGame();
      }

      this.checkCollision(canvas);
    }
  }, {
    key: 'checkCollision',
    value: function checkCollision(canvas) {
      if (this.snake.isCollidingWithWall(canvas.width, canvas.height)) {
        this.endGame();
      } else if (this.snake.isCollidingWith(this.food)) {
        this.eatFood();
      } else {
        this.populate();
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
    value: function eatFood() {
      this.score++;
      this.checkLevel();
      this.growSnake();
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
      // this.playLevelSound = true;
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
    value: function growSnake() {
      this.snake.tailLength += 2;
      this.populate();
    }
  }, {
    key: 'populate',
    value: function populate() {
      this.snake.move();
      this.animate();
    }
  }, {
    key: 'animate',
    value: function animate() {
      this.food.draw(this.ctx);
      this.snake.draw(this.ctx);
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
  }, {
    key: 'checkTailCollision',
    value: function checkTailCollision() {
      for (var i = 0; i < this.tail.length - 1; i++) {
        if (this.isCollidingWith(this.tail[i])) {
          return true;
        }
      }
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

document.addEventListener('keydown', game.handleKeyPress.bind(game));

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
  canvas.style.cursor = 'none';
  game = new Game(ctx);
  resetEventListeners();
  startingGameSpeed = 120;
  gameLoop();
}

function resetEventListeners() {
  canvas.removeEventListener('click', makeNewGame);
  document.removeEventListener('keydown', game.handleKeyPress.bind(game));
  document.addEventListener('keydown', game.handleKeyPress.bind(game));
}

// game play functionality

function playGame() {
  clearCanvas();
  checkLevelSpeed();
  game.handleSnake();
  requestFrame();
}

function checkLevelSpeed() {
  if (parseInt(gameLevel.innerText) !== game.level) {
    gameLevel.innerText = game.level;
    startingGameSpeed -= 5;
  }
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
    fakeHighScores.push({
      initials: init.repeat(3),
      score: fakeScores[index]
    });
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
    var newHighScoreObject = makeNewScoreObj(currentScore);

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

function makeNewScoreObj(currentScore) {
  var newInitials = getInitials();

  return {
    initials: newInitials.toUpperCase().slice(0, 3),
    score: currentScore
  };
}

function getInitials() {
  var message = 'You earned a high score! Please enter your initials.';
  var defaultInits = 'AAA';

  return prompt(message, defaultInits) || defaultInits;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwicmFuZG9tUGxhY2VtZW50IiwiYXhpc1ZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY3R4IiwiU25ha2UiLCJGb29kIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzbmFrZSIsImZvb2QiLCJtYWtlRm9vZCIsInNjb3JlIiwibGV2ZWwiLCJrZXlQYWQiLCJwcmV2ZW50RG91YmxlQmFjayIsInRvZ2dsZVBhdXNlIiwiZ2FtZVBhdXNlIiwicGVuZFgiLCJwZW5kWSIsInBlbmRpbmdEaXIiLCJkeCIsImR5IiwiZSIsInByZXZlbnRBcnJvd1NwYWNlRGVmYXVsdE9ubHkiLCJwcm9wZXJ0eSIsImNvZGUiLCJwZW5kaW5nRGlyZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJjYW52YXMiLCJjaGVja1RhaWxDb2xsaXNpb24iLCJlbmRHYW1lIiwiY2hlY2tDb2xsaXNpb24iLCJpc0NvbGxpZGluZ1dpdGhXYWxsIiwiaXNDb2xsaWRpbmdXaXRoIiwiZWF0Rm9vZCIsInBvcHVsYXRlIiwicGxheUdhbWVPdmVyU291bmQiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsImNoZWNrTGV2ZWwiLCJncm93U25ha2UiLCJwbGFjZUZvb2QiLCJwbGF5TGV2ZWxTb3VuZCIsInBsYXlOb21Tb3VuZCIsIm5vbVNvdW5kcyIsImZsb29yIiwidGFpbExlbmd0aCIsIm1vdmUiLCJhbmltYXRlIiwiZHJhdyIsIm5ld0Zvb2QiLCJpIiwidGFpbCIsImxlbmd0aCIsIm9iamVjdCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkeHYiLCJkeXYiLCJmb3JFYWNoIiwiY2h1bmsiLCJwdXNoIiwiY2hhbmdlRGlyZWN0aW9uIiwibWFrZUNodW5rIiwic2hpZnQiLCJkaXJlY3Rpb24iLCJHYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJnYW1lU2NvcmUiLCJoaWdoU2NvcmVMaXN0IiwiZ2FtZUxldmVsIiwic3RhcnRpbmdHYW1lU3BlZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiLCJiaW5kIiwicHVsbEhpZ2hTY29yZSIsInJlcXVlc3RGcmFtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWVPdXQiLCJzZXRUaW1lb3V0IiwiZ2FtZUxvb3AiLCJpbm5lclRleHQiLCJnYW1lT3ZlclNlcXVlbmNlIiwicGxheUdhbWUiLCJjbGVhckNhbnZhcyIsInByaW50R2FtZU92ZXIiLCJzdHlsZSIsImN1cnNvciIsImNoZWNrSGlnaFNjb3JlIiwiY2xlYXJSZWN0IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwicHJpbnROZXdHYW1lIiwibWFrZU5ld0dhbWUiLCJyZXNldEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrTGV2ZWxTcGVlZCIsImhhbmRsZVNuYWtlIiwicGFyc2VJbnQiLCJwYXJzZVN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVGYWtlU2NvcmVzIiwiZmFrZUhpZ2hTY29yZXMiLCJmYWtlSW5pdHMiLCJmYWtlU2NvcmVzIiwiaW5pdCIsImluZGV4IiwiaW5pdGlhbHMiLCJyZXBlYXQiLCJjdXJyZW50SGlnaFNjb3JlTGlzdCIsImdlbmVyYXRlSGlnaFNjb3JlTGlzdCIsImN1cnJlbnRMaXN0IiwiY2xlYXJDdXJyZW50TGlzdCIsInNldEhpZ2hTY29yZUxpc3QiLCJyZW5kZXJIaWdoU2NvcmVMaXN0IiwiaW5uZXJIVE1MIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIml0ZW0iLCJjdXJyZW50U2NvcmUiLCJzcGxpY2VOZXdTY29yZSIsInNwbGljZUJlZ2luIiwiZmluZEJlZ2luU3BsaWNlSW5kZXgiLCJuZXdIaWdoU2NvcmVPYmplY3QiLCJtYWtlTmV3U2NvcmVPYmoiLCJzcGxpY2UiLCJwb3AiLCJmaW5kSW5kZXgiLCJuZXdJbml0aWFscyIsImdldEluaXRpYWxzIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm1lc3NhZ2UiLCJkZWZhdWx0SW5pdHMiLCJwcm9tcHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztB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aW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZvb2QgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLnggPSB0aGlzLnJhbmRvbVBsYWNlbWVudCh4KTtcbiAgICB0aGlzLnkgPSB0aGlzLnJhbmRvbVBsYWNlbWVudCh5KTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlbWVudChheGlzVmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBheGlzVmFsdWUpIC8gMjUpICogMjU7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxufTsiLCJjb25zdCBTbmFrZSA9IHJlcXVpcmUoJy4vU25ha2UnKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKCcuL0Zvb2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSg1MCwgMjUwLCAyNSwgMjUsICdncmVlbicpO1xuICAgIHRoaXMuZm9vZCA9IHRoaXMubWFrZUZvb2QoKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmxldmVsID0gMTtcbiAgICB0aGlzLmtleVBhZCA9IHtcbiAgICAgICdBcnJvd1VwJzogKCkgPT4gdGhpcy5wcmV2ZW50RG91YmxlQmFjayhmYWxzZSwgMCwgLTEpLFxuICAgICAgJ0Fycm93UmlnaHQnOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAxLCAwKSxcbiAgICAgICdBcnJvd0Rvd24nOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAwLCAxKSxcbiAgICAgICdBcnJvd0xlZnQnOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAtMSwgMCksXG4gICAgICAnU3BhY2UnOiAoKSA9PiB0aGlzLnRvZ2dsZVBhdXNlKClcbiAgICB9O1xuICB9XG5cbiAgbWFrZUZvb2QoKSB7XG4gICAgcmV0dXJuIG5ldyBGb29kKDQ3NSwgNDc1LCAyNSwgMjUsICdyZWQnKTtcbiAgfVxuXG4gIHByZXZlbnREb3VibGVCYWNrKGdhbWVQYXVzZSwgcGVuZFgsIHBlbmRZKSB7XG4gICAgY29uc3QgcGVuZGluZ0RpciA9IHtcbiAgICAgIGR4OiB0aGlzLnNuYWtlLmR4LFxuICAgICAgZHk6IHRoaXMuc25ha2UuZHlcbiAgICB9O1xuXG4gICAgaWYgKHBlbmRYICE9PSAodGhpcy5zbmFrZS5keCAqIC0xKSB8fCBwZW5kWSAhPT0gKHRoaXMuc25ha2UuZHkgKiAtMSkpIHtcbiAgICAgIHRoaXMucGF1c2VkID0gZ2FtZVBhdXNlO1xuICAgICAgcGVuZGluZ0Rpci5keCA9IHBlbmRYO1xuICAgICAgcGVuZGluZ0Rpci5keSA9IHBlbmRZO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nRGlyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICAvLyBjYWxsZWQgZnJvbSBpbmRleC5qcyBldmVudCBsaXN0ZW5lclxuXG4gIGhhbmRsZUtleVByZXNzKGUpIHtcbiAgICB0aGlzLnByZXZlbnRBcnJvd1NwYWNlRGVmYXVsdE9ubHkoZSk7XG4gICAgY29uc3QgcHJvcGVydHkgPSBgJHtlLmNvZGV9YDtcblxuICAgIGlmICh0aGlzLmtleVBhZFtwcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09ICdTcGFjZScpIHtcbiAgICAgIHRoaXMuc25ha2UucGVuZGluZ0RpcmVjdGlvbiA9IHRoaXMua2V5UGFkW3Byb3BlcnR5XSgpO1xuICAgIH0gZWxzZSBpZiAocHJvcGVydHkgPT09ICdTcGFjZScpIHtcbiAgICAgIHRoaXMua2V5UGFkW3Byb3BlcnR5XSgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnRBcnJvd1NwYWNlRGVmYXVsdE9ubHkoZSkge1xuICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1JpZ2h0JyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd0xlZnQnIHx8XG4gICAgICAgIGUuY29kZSA9PT0gJ0Fycm93VXAnIHx8XG4gICAgICAgIGUuY29kZSA9PT0gJ0Fycm93RG93bicgfHxcbiAgICAgICAgZS5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbGVkIGZyb20gaW5kZXguanNcblxuICBoYW5kbGVTbmFrZSgpIHtcbiAgICBjb25zdCB7IGNhbnZhcyB9ID0gdGhpcy5jdHg7XG5cbiAgICBpZiAodGhpcy5zbmFrZS5jaGVja1RhaWxDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbihjYW52YXMpO1xuICB9XG5cbiAgY2hlY2tDb2xsaXNpb24oY2FudmFzKSB7XG4gICAgaWYgKHRoaXMuc25ha2UuaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc25ha2UuaXNDb2xsaWRpbmdXaXRoKHRoaXMuZm9vZCkpIHtcbiAgICAgIHRoaXMuZWF0Rm9vZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcHVsYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZW5kR2FtZSgpIHtcbiAgICB0aGlzLnBsYXlHYW1lT3ZlclNvdW5kKCk7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gIH1cblxuICBwbGF5R2FtZU92ZXJTb3VuZCgpIHtcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvc291bmRzL2V4cGxvc2lvbi53YXYnKTtcblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGVhdEZvb2QoKSB7XG4gICAgdGhpcy5zY29yZSsrO1xuICAgIHRoaXMuY2hlY2tMZXZlbCgpO1xuICAgIHRoaXMuZ3Jvd1NuYWtlKCk7XG4gICAgdGhpcy5mb29kID0gdGhpcy5wbGFjZUZvb2QoKTtcbiAgfVxuXG4gIGNoZWNrTGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmUgJSA1ID09PSAwKSB7XG4gICAgICB0aGlzLnBsYXlMZXZlbFNvdW5kKCk7XG4gICAgICB0aGlzLmxldmVsKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheU5vbVNvdW5kKCk7XG4gICAgfVxuICB9XG5cbiAgcGxheUxldmVsU291bmQoKSB7XG4gICAgLy8gdGhpcy5wbGF5TGV2ZWxTb3VuZCA9IHRydWU7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9sZXZlbHVwLm1wMycpO1xuXG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgcGxheU5vbVNvdW5kKCkge1xuICAgIGxldCBub21Tb3VuZHMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMSk7XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oYC4vYXNzZXRzL3NvdW5kcy9ub20ke25vbVNvdW5kc30ud2F2YCk7XG5cbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBncm93U25ha2UoKSB7XG4gICAgdGhpcy5zbmFrZS50YWlsTGVuZ3RoICs9IDI7XG4gICAgdGhpcy5wb3B1bGF0ZSgpO1xuICB9XG5cbiAgcG9wdWxhdGUoKSB7XG4gICAgdGhpcy5zbmFrZS5tb3ZlKCk7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuZm9vZC5kcmF3KHRoaXMuY3R4KTtcbiAgICB0aGlzLnNuYWtlLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgcGxhY2VGb29kKCkge1xuICAgIGxldCBuZXdGb29kID0gdGhpcy5tYWtlRm9vZCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlLnRhaWwubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAobmV3Rm9vZC5pc0NvbGxpZGluZ1dpdGgodGhpcy5zbmFrZS50YWlsW2ldKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGFjZUZvb2QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Rm9vZDtcbiAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWVQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmXG4gICAgICB0aGlzLnggKyB0aGlzLndpZHRoID4gb2JqZWN0LnggJiZcbiAgICAgIHRoaXMueSA8IG9iamVjdC55ICsgb2JqZWN0LmhlaWdodCAmJlxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBvYmplY3QueVxuICAgICk7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGhXYWxsKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy54IDwgMCB8fFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IGNhbnZhc1dpZHRoIHx8XG4gICAgICB0aGlzLnkgPCAwIHx8XG4gICAgICB0aGlzLnkgKyB0aGlzLmhlaWdodCA+IGNhbnZhc0hlaWdodFxuICAgICk7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IgfSA9IHRoaXM7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59OyIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU25ha2UgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcbiAgICB0aGlzLmR4ID0gMTtcbiAgICB0aGlzLmR5ID0gMDtcbiAgICB0aGlzLmR4diA9IDI1O1xuICAgIHRoaXMuZHl2ID0gMjU7XG4gICAgdGhpcy50YWlsID0gW107XG4gICAgdGhpcy50YWlsTGVuZ3RoID0gNTtcbiAgICB0aGlzLnBlbmRpbmdEaXJlY3Rpb247XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgICB0aGlzLnRhaWwuZm9yRWFjaCgoY2h1bmspID0+IHtcbiAgICAgIGN0eC5maWxsUmVjdChjaHVuay54LCBjaHVuay55LCBjaHVuay5oZWlnaHQsIGNodW5rLndpZHRoLCBjaHVuay5jb2xvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYWtlQ2h1bmsoKSB7XG4gICAgY29uc3QgY2h1bmsgPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvclxuICAgIH07XG5cbiAgICB0aGlzLnRhaWwucHVzaChjaHVuayk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICh0aGlzLnBlbmRpbmdEaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKHRoaXMucGVuZGluZ0RpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICAgIHRoaXMubWFrZUNodW5rKCk7XG4gICAgaWYgKHRoaXMudGFpbC5sZW5ndGggPT09IHRoaXMudGFpbExlbmd0aCkge1xuICAgICAgdGhpcy50YWlsLnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgfVxuXG4gIGNoZWNrVGFpbENvbGxpc2lvbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFpbC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGlkaW5nV2l0aCh0aGlzLnRhaWxbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5sZXQgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG5jb25zdCBnYW1lU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZ2FtZS1zY29yZScpO1xubGV0IGhpZ2hTY29yZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGlnaC1zY29yZS1saXN0Jyk7XG5jb25zdCBnYW1lTGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZ2FtZS1sZXZlbCcpO1xubGV0IHN0YXJ0aW5nR2FtZVNwZWVkID0gMTIwO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2FtZS5oYW5kbGVLZXlQcmVzcy5iaW5kKGdhbWUpKTtcblxucHVsbEhpZ2hTY29yZSgpO1xucmVxdWVzdEZyYW1lKCk7XG5cbi8vIGdhbWUgYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZSgpIHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lT3V0KTtcbn1cblxuZnVuY3Rpb24gdGltZU91dCgpIHtcbiAgaWYgKCFnYW1lLnBhdXNlZCkge1xuICAgIHNldFRpbWVvdXQoZ2FtZUxvb3AsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KHRpbWVPdXQsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgZ2FtZVNjb3JlLmlubmVyVGV4dCA9IGdhbWUuc2NvcmU7XG4gIGlmIChnYW1lLmdhbWVPdmVyKSB7XG4gICAgZ2FtZU92ZXJTZXF1ZW5jZSgpO1xuICB9IGVsc2Uge1xuICAgIHBsYXlHYW1lKCk7XG4gIH1cbn1cblxuLy8gZ2FtZSBvdmVyIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gZ2FtZU92ZXJTZXF1ZW5jZSgpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgcHJpbnRHYW1lT3ZlcigpO1xuICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICBjaGVja0hpZ2hTY29yZShnYW1lLnNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gcHJpbnRHYW1lT3ZlcigpIHtcbiAgY3R4LmZvbnQgPSAnNHJlbSBcIlN1cGVyc2NyaXB0XCInO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgY3R4LmZpbGxUZXh0KCdHYW1lIE92ZXInLCAyNTAsIDI1MCk7XG4gIHByaW50TmV3R2FtZSgpO1xufVxuXG5mdW5jdGlvbiBwcmludE5ld0dhbWUoKSB7XG4gIGN0eC5mb250ID0gJzJyZW0gXCJWVDMyM1wiJztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gIGN0eC5maWxsVGV4dCgnQ2xpY2sgaGVyZSB0byBzdGFydCBuZXcgZ2FtZScsIDI1MCwgMzAwKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZU5ld0dhbWUpO1xufVxuXG5mdW5jdGlvbiBtYWtlTmV3R2FtZSgpIHtcbiAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdub25lJztcbiAgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIHJlc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgc3RhcnRpbmdHYW1lU3BlZWQgPSAxMjA7XG4gIGdhbWVMb29wKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VOZXdHYW1lKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdhbWUuaGFuZGxlS2V5UHJlc3MuYmluZChnYW1lKSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnYW1lLmhhbmRsZUtleVByZXNzLmJpbmQoZ2FtZSkpO1xufVxuXG4vLyBnYW1lIHBsYXkgZnVuY3Rpb25hbGl0eVxuXG5mdW5jdGlvbiBwbGF5R2FtZSgpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgY2hlY2tMZXZlbFNwZWVkKCk7XG4gIGdhbWUuaGFuZGxlU25ha2UoKTtcbiAgcmVxdWVzdEZyYW1lKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWxTcGVlZCgpIHtcbiAgaWYgKHBhcnNlSW50KGdhbWVMZXZlbC5pbm5lclRleHQpICE9PSBnYW1lLmxldmVsKSB7XG4gICAgZ2FtZUxldmVsLmlubmVyVGV4dCA9IGdhbWUubGV2ZWw7XG4gICAgc3RhcnRpbmdHYW1lU3BlZWQgLT0gNTtcbiAgfVxufVxuXG4vLyBoaWdoIHNjb3JlIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gcGFyc2VTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlTGlzdCcpKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGYWtlU2NvcmVzKCkge1xuICBjb25zdCBmYWtlSGlnaFNjb3JlcyA9IFtdO1xuICBjb25zdCBmYWtlSW5pdHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgY29uc3QgZmFrZVNjb3JlcyA9IFsxMCwgOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XG5cbiAgZmFrZUluaXRzLmZvckVhY2goKGluaXQsIGluZGV4KSA9PiB7XG4gICAgZmFrZUhpZ2hTY29yZXMucHVzaCh7XG4gICAgICBpbml0aWFsczogaW5pdC5yZXBlYXQoMyksXG4gICAgICBzY29yZTogZmFrZVNjb3Jlc1tpbmRleF1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZha2VIaWdoU2NvcmVzO1xufVxuXG5mdW5jdGlvbiBwdWxsSGlnaFNjb3JlKCkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKSB8fCBnZW5lcmF0ZUZha2VTY29yZXMoKTtcblxuICBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudEhpZ2hTY29yZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgY2xlYXJDdXJyZW50TGlzdCgpO1xuICBzZXRIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KTtcbiAgcmVuZGVySGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ3VycmVudExpc3QoKSB7XG4gIGhpZ2hTY29yZUxpc3QuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNldEhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hTY29yZUxpc3QnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50TGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KSB7XG4gIGN1cnJlbnRMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBoaWdoU2NvcmVMaXN0LmlubmVySFRNTCArPSAgYDxsaSBhcmlhLWxhYmVsPVwiaGlnaC1zY29yZS1yYW5rXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCIgYXJpYS1sYWJlbD1cImhpZ2gtc2NvcmUtaW5pdGlhbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtpdGVtLmluaXRpYWxzfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzY29yZVwiIGFyaWEtbGFiZWw9XCJoaWdoLXNjb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uc2NvcmV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5gO1xuICB9KTtcbn1cblxuLy8gb24gZ2FtZSBvdmVyXG5cbmZ1bmN0aW9uIGNoZWNrSGlnaFNjb3JlKGN1cnJlbnRTY29yZSkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKTtcblxuICBzcGxpY2VOZXdTY29yZShjdXJyZW50U2NvcmUsIGN1cnJlbnRIaWdoU2NvcmVMaXN0KTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlTmV3U2NvcmUoY3VycmVudFNjb3JlLCBjdXJyZW50TGlzdCkge1xuICBsZXQgc3BsaWNlQmVnaW4gPSBmaW5kQmVnaW5TcGxpY2VJbmRleChjdXJyZW50U2NvcmUsIGN1cnJlbnRMaXN0KTtcblxuICBpZiAoc3BsaWNlQmVnaW4gPiAtMSkge1xuICAgIGxldCBuZXdIaWdoU2NvcmVPYmplY3QgPSBtYWtlTmV3U2NvcmVPYmooY3VycmVudFNjb3JlKTtcblxuICAgIGN1cnJlbnRMaXN0LnNwbGljZShzcGxpY2VCZWdpbiwgMCwgbmV3SGlnaFNjb3JlT2JqZWN0KTtcbiAgICBjdXJyZW50TGlzdC5wb3AoKTtcbiAgICBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCZWdpblNwbGljZUluZGV4KGN1cnJlbnRTY29yZSwgY3VycmVudExpc3QpIHtcbiAgcmV0dXJuIGN1cnJlbnRMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLnNjb3JlIDwgY3VycmVudFNjb3JlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZU5ld1Njb3JlT2JqKGN1cnJlbnRTY29yZSkge1xuICBsZXQgbmV3SW5pdGlhbHMgPSBnZXRJbml0aWFscygpO1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbHM6IG5ld0luaXRpYWxzLnRvVXBwZXJDYXNlKCkuc2xpY2UoMCwgMyksXG4gICAgc2NvcmU6IGN1cnJlbnRTY29yZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFscygpIHtcbiAgbGV0IG1lc3NhZ2UgPSAnWW91IGVhcm5lZCBhIGhpZ2ggc2NvcmUhIFBsZWFzZSBlbnRlciB5b3VyIGluaXRpYWxzLic7XG4gIGxldCBkZWZhdWx0SW5pdHMgPSAnQUFBJztcblxuICByZXR1cm4gcHJvbXB0KG1lc3NhZ2UsIGRlZmF1bHRJbml0cykgfHwgZGVmYXVsdEluaXRzO1xufSJdLCJzb3VyY2VSb290IjoiIn0=