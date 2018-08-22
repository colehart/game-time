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
  changeCanvasPointer();
  game = new Game(ctx);
  startingGameSpeed = 120;
  gameLoop();
}

function changeCanvasPointer() {
  if (canvas.style.cursor === 'none') {
    canvas.style.cursor = 'pointer';
  } else {
    canvas.style.cursor = 'none';
  }
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
    highScoreList.innerHTML += '<li class="place-' + index + '" aria-label="high-score-rank">\n                        <span class="initials" aria-label="high-score-initials">' + item.initials + '</span>\n                        <span class="score" aria-label="high-score">' + item.score + '</span>\n                      </li>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU25ha2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiY3R4IiwiU25ha2UiLCJGb29kIiwicGF1c2VkIiwiZ2FtZU92ZXIiLCJzbmFrZSIsImZvb2QiLCJtYWtlRm9vZCIsInNjb3JlIiwibGV2ZWwiLCJrZXlQYWQiLCJwcmV2ZW50RG91YmxlQmFjayIsInRvZ2dsZVBhdXNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwibmV3Rm9vZCIsImkiLCJ0YWlsIiwibGVuZ3RoIiwiaXNDb2xsaWRpbmdXaXRoIiwicGxhY2VGb29kIiwiY2FudmFzIiwiY2hlY2tUYWlsQ29sbGlzaW9uIiwiY2hlY2tDb2xsaXNpb24iLCJlbmRHYW1lIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsImVhdEZvb2QiLCJwb3B1bGF0ZSIsInBsYXlHYW1lT3ZlclNvdW5kIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJwbGF5Tm9tU291bmQiLCJjaGVja0xldmVsIiwiZ3Jvd1NuYWtlIiwibm9tU291bmRzIiwiZmxvb3IiLCJ0YWlsTGVuZ3RoIiwibW92ZSIsImFuaW1hdGUiLCJkcmF3IiwiZSIsInByZXZlbnRBcnJvd1NwYWNlRGVmYXVsdE9ubHkiLCJwcm9wZXJ0eSIsImNvZGUiLCJwZW5kaW5nRGlyZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJnYW1lUGF1c2UiLCJwZW5kWCIsInBlbmRZIiwicGVuZGluZ0RpciIsImR4IiwiZHkiLCJvYmplY3QiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHh2IiwiZHl2IiwiZm9yRWFjaCIsImNodW5rIiwicHVzaCIsImNoYW5nZURpcmVjdGlvbiIsIm1ha2VDaHVuayIsInNoaWZ0IiwiZGlyZWN0aW9uIiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwiZ2FtZVNjb3JlIiwiaGlnaFNjb3JlTGlzdCIsImdhbWVMZXZlbCIsInN0YXJ0aW5nR2FtZVNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVByZXNzIiwicHVsbEhpZ2hTY29yZSIsInJlcXVlc3RGcmFtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpbWVPdXQiLCJzZXRUaW1lb3V0IiwiZ2FtZUxvb3AiLCJpbm5lclRleHQiLCJnYW1lT3ZlclNlcXVlbmNlIiwicGxheUdhbWUiLCJjbGVhckNhbnZhcyIsInByaW50R2FtZU92ZXIiLCJjaGFuZ2VDYW52YXNQb2ludGVyIiwiY2hlY2tIaWdoU2NvcmUiLCJjbGVhclJlY3QiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJwcmludE5ld0dhbWUiLCJtYWtlTmV3R2FtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImN1cnNvciIsImNoZWNrTGV2ZWxTcGVlZCIsImhhbmRsZVNuYWtlIiwicGFyc2VJbnQiLCJwYXJzZVN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2VuZXJhdGVGYWtlU2NvcmVzIiwiZmFrZUhpZ2hTY29yZXMiLCJmYWtlSW5pdHMiLCJmYWtlU2NvcmVzIiwiaW5pdCIsImluZGV4IiwiaW5pdGlhbHMiLCJyZXBlYXQiLCJjdXJyZW50SGlnaFNjb3JlTGlzdCIsImdlbmVyYXRlSGlnaFNjb3JlTGlzdCIsImN1cnJlbnRMaXN0IiwiY2xlYXJDdXJyZW50TGlzdCIsInNldEhpZ2hTY29yZUxpc3QiLCJyZW5kZXJIaWdoU2NvcmVMaXN0IiwiaW5uZXJIVE1MIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIml0ZW0iLCJjdXJyZW50U2NvcmUiLCJzcGxpY2VOZXdTY29yZSIsInNwbGljZUJlZ2luIiwiZmluZEJlZ2luU3BsaWNlSW5kZXgiLCJuZXdIaWdoU2NvcmVPYmplY3QiLCJnZXRJbml0aWFscyIsInNwbGljZSIsInBvcCIsImZpbmRJbmRleCIsIm1lc3NhZ2UiLCJkZWZhdWx0SW5pdHMiLCJuZXdJbml0aWFscyIsInByb21wdCIsIm1ha2VOZXdTY29yZU9iaiIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsSUFBTUEsWUFBWSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFsQjs7QUFFQUMsT0FBT0MsT0FBUDtBQUFBOztBQUNFLGdCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLE1BQWxCLEVBQTBCQyxLQUExQixF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QUFDakQsTUFBSVUsY0FBY0MscUJBQXFCSCxZQUFyQixFQUFtQ1IsV0FBbkMsQ0FBbEI7O0FBRUEsTUFBSVUsY0FBYyxDQUFDLENBQW5CLEVBQXNCO0FBQ3BCLFFBQUlFLHFCQUFxQkMsWUFBWUwsWUFBWixDQUF6Qjs7QUFFQVIsZ0JBQVljLE1BQVosQ0FBbUJKLFdBQW5CLEVBQWdDLENBQWhDLEVBQW1DRSxrQkFBbkM7QUFDQVosZ0JBQVllLEdBQVo7QUFDQWhCLDBCQUFzQkMsV0FBdEI7QUFDRDtBQUNGOztBQUVELFNBQVNXLG9CQUFULENBQThCSCxZQUE5QixFQUE0Q1IsV0FBNUMsRUFBeUQ7QUFDdkQsU0FBT0EsWUFBWWdCLFNBQVosQ0FBc0IsVUFBQ1QsSUFBRCxFQUFVO0FBQ3JDLFdBQU9BLEtBQUt2SCxLQUFMLEdBQWF3SCxZQUFwQjtBQUNELEdBRk0sQ0FBUDtBQUdEOztBQUVELFNBQVNLLFdBQVQsQ0FBcUJMLFlBQXJCLEVBQW1DO0FBQ2pDLE1BQUlTLFVBQVUsc0RBQWQ7QUFDQSxNQUFJQyxlQUFlLEtBQW5CO0FBQ0EsTUFBSUMsY0FBY0MsT0FBT0gsT0FBUCxFQUFnQkMsWUFBaEIsQ0FBbEI7O0FBRUEsU0FBT0csZ0JBQWdCRixXQUFoQixFQUE2QkQsWUFBN0IsRUFBMkNWLFlBQTNDLENBQVA7QUFDRDs7QUFFRCxTQUFTYSxlQUFULENBQXlCRixXQUF6QixFQUFzQ0QsWUFBdEMsRUFBb0RWLFlBQXBELEVBQWtFO0FBQ2hFLFNBQU87QUFDTFosY0FBVSxDQUFDdUIsZUFBZUQsWUFBaEIsRUFBOEJJLFdBQTlCLEdBQTRDQyxLQUE1QyxDQUFrRCxDQUFsRCxFQUFxRCxDQUFyRCxDQURMO0FBRUx2SSxXQUFPd0g7QUFGRixHQUFQO0FBSUQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBGb29kIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIHN1cGVyLmRyYXcoY3R4KTtcbiAgfVxufTsiLCJjb25zdCBTbmFrZSA9IHJlcXVpcmUoJy4vU25ha2UnKTtcbmNvbnN0IEZvb2QgPSByZXF1aXJlKCcuL0Zvb2QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSg1MCwgMjUwLCAyNSwgMjUsICdncmVlbicpO1xuICAgIHRoaXMuZm9vZCA9IHRoaXMubWFrZUZvb2QoKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmxldmVsID0gMTtcbiAgICB0aGlzLmtleVBhZCA9IHtcbiAgICAgICdBcnJvd1VwJzogKCkgPT4gdGhpcy5wcmV2ZW50RG91YmxlQmFjayhmYWxzZSwgMCwgLTEpLFxuICAgICAgJ0Fycm93UmlnaHQnOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAxLCAwKSxcbiAgICAgICdBcnJvd0Rvd24nOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAwLCAxKSxcbiAgICAgICdBcnJvd0xlZnQnOiAoKSA9PiB0aGlzLnByZXZlbnREb3VibGVCYWNrKGZhbHNlLCAtMSwgMCksXG4gICAgICAnU3BhY2UnOiAoKSA9PiB0aGlzLnRvZ2dsZVBhdXNlKClcbiAgICB9O1xuICB9XG5cbiAgbWFrZUZvb2QoKSB7XG4gICAgcmV0dXJuIG5ldyBGb29kKFxuICAgICAgKE1hdGgucm91bmQoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNDc1KSAvIDI1KSAqIDI1KSxcbiAgICAgIChNYXRoLnJvdW5kKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDQ3NSkgLyAyNSkgKiAyNSksXG4gICAgICAyNSwgMjUsICdyZWQnKTtcbiAgfVxuXG4gIHBsYWNlRm9vZCgpIHtcbiAgICBsZXQgbmV3Rm9vZCA9IHRoaXMubWFrZUZvb2QoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbmFrZS50YWlsLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKG5ld0Zvb2QuaXNDb2xsaWRpbmdXaXRoKHRoaXMuc25ha2UudGFpbFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2VGb29kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0Zvb2Q7XG4gIH1cblxuICBoYW5kbGVTbmFrZShzbmFrZSkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgIHRoaXMuY2hlY2tUYWlsQ29sbGlzaW9uKHNuYWtlKTtcbiAgICB0aGlzLmNoZWNrQ29sbGlzaW9uKHNuYWtlLCBjYW52YXMpO1xuICB9XG5cbiAgY2hlY2tUYWlsQ29sbGlzaW9uKHNuYWtlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmFrZS50YWlsLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKHNuYWtlLmlzQ29sbGlkaW5nV2l0aChzbmFrZS50YWlsW2ldKSkge1xuICAgICAgICB0aGlzLmVuZEdhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGVja0NvbGxpc2lvbihzbmFrZSwgY2FudmFzKSB7XG4gICAgaWYgKHNuYWtlLmlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSkge1xuICAgICAgdGhpcy5lbmRHYW1lKCk7XG4gICAgfSBlbHNlIGlmIChzbmFrZS5pc0NvbGxpZGluZ1dpdGgodGhpcy5mb29kKSkge1xuICAgICAgdGhpcy5lYXRGb29kKHNuYWtlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wb3B1bGF0ZShzbmFrZSk7XG4gICAgfVxuICB9XG5cbiAgZW5kR2FtZSgpIHtcbiAgICB0aGlzLnBsYXlHYW1lT3ZlclNvdW5kKCk7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gIH1cblxuICBwbGF5R2FtZU92ZXJTb3VuZCgpIHtcbiAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvc291bmRzL2V4cGxvc2lvbi53YXYnKTtcblxuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIGVhdEZvb2Qoc25ha2UpIHtcbiAgICB0aGlzLnBsYXlOb21Tb3VuZCgpO1xuICAgIHRoaXMuc2NvcmUrKztcbiAgICB0aGlzLmNoZWNrTGV2ZWwoKTtcbiAgICB0aGlzLmdyb3dTbmFrZShzbmFrZSk7XG4gICAgdGhpcy5mb29kID0gdGhpcy5wbGFjZUZvb2QoKTtcbiAgfVxuXG4gIHBsYXlOb21Tb3VuZCgpIHtcbiAgICBsZXQgbm9tU291bmRzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpO1xuICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGAuL2Fzc2V0cy9zb3VuZHMvbm9tJHtub21Tb3VuZHN9LndhdmApO1xuXG4gICAgYXVkaW8ucGxheSgpO1xuICB9XG5cbiAgY2hlY2tMZXZlbCgpIHtcbiAgICBpZiAodGhpcy5zY29yZSAlIDUgPT09IDApIHtcbiAgICAgIHRoaXMubGV2ZWwrKztcbiAgICB9XG4gIH1cblxuICBncm93U25ha2Uoc25ha2UpIHtcbiAgICBzbmFrZS50YWlsTGVuZ3RoICs9IDI7XG4gICAgdGhpcy5wb3B1bGF0ZShzbmFrZSk7XG4gIH1cblxuICBwb3B1bGF0ZShzbmFrZSkge1xuICAgIHNuYWtlLm1vdmUoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5mb29kLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuc25ha2UuZHJhdyh0aGlzLmN0eCk7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgdGhpcy5wcmV2ZW50QXJyb3dTcGFjZURlZmF1bHRPbmx5KGUpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYCR7ZS5jb2RlfWA7XG5cbiAgICBpZiAodGhpcy5rZXlQYWRbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSAnU3BhY2UnKSB7XG4gICAgICB0aGlzLnNuYWtlLnBlbmRpbmdEaXJlY3Rpb24gPSB0aGlzLmtleVBhZFtwcm9wZXJ0eV0oKTtcbiAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSAnU3BhY2UnKSB7XG4gICAgICB0aGlzLmtleVBhZFtwcm9wZXJ0eV0oKTtcbiAgICB9XG4gIH1cblxuICBwcmV2ZW50QXJyb3dTcGFjZURlZmF1bHRPbmx5KGUpIHtcbiAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCcgfHxcbiAgICAgICAgZS5jb2RlID09PSAnQXJyb3dMZWZ0JyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd1VwJyB8fFxuICAgICAgICBlLmNvZGUgPT09ICdBcnJvd0Rvd24nIHx8XG4gICAgICAgIGUuY29kZSA9PT0gJ1NwYWNlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZlbnREb3VibGVCYWNrKGdhbWVQYXVzZSwgcGVuZFgsIHBlbmRZKSB7XG4gICAgY29uc3QgcGVuZGluZ0RpciA9IHtcbiAgICAgIGR4OiB0aGlzLnNuYWtlLmR4LFxuICAgICAgZHk6IHRoaXMuc25ha2UuZHlcbiAgICB9O1xuXG4gICAgaWYgKHBlbmRYICE9PSAodGhpcy5zbmFrZS5keCAqIC0xKSB8fCBwZW5kWSAhPT0gKHRoaXMuc25ha2UuZHkgKiAtMSkpIHtcbiAgICAgIHRoaXMucGF1c2VkID0gZ2FtZVBhdXNlO1xuICAgICAgcGVuZGluZ0Rpci5keCA9IHBlbmRYO1xuICAgICAgcGVuZGluZ0Rpci5keSA9IHBlbmRZO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nRGlyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoKG9iamVjdCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnggPCBvYmplY3QueCArIG9iamVjdC53aWR0aCAmJlxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fFxuICAgICAgdGhpcy55ICsgdGhpcy5oZWlnaHQgPiBjYW52YXNIZWlnaHRcbiAgICApO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxufTsiLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNuYWtlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IpIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcik7XG4gICAgdGhpcy5keCA9IDE7XG4gICAgdGhpcy5keSA9IDA7XG4gICAgdGhpcy5keHYgPSAyNTtcbiAgICB0aGlzLmR5diA9IDI1O1xuICAgIHRoaXMudGFpbCA9IFtdO1xuICAgIHRoaXMudGFpbExlbmd0aCA9IDU7XG4gICAgdGhpcy5wZW5kaW5nRGlyZWN0aW9uO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgdGhpcy50YWlsLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgICBjdHguZmlsbFJlY3QoY2h1bmsueCwgY2h1bmsueSwgY2h1bmsuaGVpZ2h0LCBjaHVuay53aWR0aCwgY2h1bmsuY29sb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZUNodW5rKCkge1xuICAgIGNvbnN0IGNodW5rID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3JcbiAgICB9O1xuXG4gICAgdGhpcy50YWlsLnB1c2goY2h1bmspO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nRGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLnBlbmRpbmdEaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5keHY7XG4gICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmR5djtcbiAgICB0aGlzLm1ha2VDaHVuaygpO1xuICAgIGlmICh0aGlzLnRhaWwubGVuZ3RoID09PSB0aGlzLnRhaWxMZW5ndGgpIHtcbiAgICAgIHRoaXMudGFpbC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmR4ID0gZGlyZWN0aW9uLmR4O1xuICAgIHRoaXMuZHkgPSBkaXJlY3Rpb24uZHk7XG4gIH1cbn07IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xubGV0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZ2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdhbWUtc2NvcmUnKTtcbmxldCBoaWdoU2NvcmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWhpZ2gtc2NvcmUtbGlzdCcpO1xuY29uc3QgZ2FtZUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWdhbWUtbGV2ZWwnKTtcbmxldCBzdGFydGluZ0dhbWVTcGVlZCA9IDEyMDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzKTtcblxucHVsbEhpZ2hTY29yZSgpO1xucmVxdWVzdEZyYW1lKCk7XG5cbi8vIGdhbWUgYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlcXVlc3RGcmFtZSgpIHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lT3V0KTtcbn1cblxuZnVuY3Rpb24gdGltZU91dCgpIHtcbiAgaWYgKCFnYW1lLnBhdXNlZCkge1xuICAgIHNldFRpbWVvdXQoZ2FtZUxvb3AsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KHRpbWVPdXQsIHN0YXJ0aW5nR2FtZVNwZWVkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgZ2FtZVNjb3JlLmlubmVyVGV4dCA9IGdhbWUuc2NvcmU7XG4gIGlmIChnYW1lLmdhbWVPdmVyKSB7XG4gICAgZ2FtZU92ZXJTZXF1ZW5jZSgpO1xuICB9IGVsc2Uge1xuICAgIHBsYXlHYW1lKCk7XG4gIH1cbn1cblxuLy8gZ2FtZSBvdmVyIGZ1bmN0aW9uYWxpdHlcblxuZnVuY3Rpb24gZ2FtZU92ZXJTZXF1ZW5jZSgpIHtcbiAgY2xlYXJDYW52YXMoKTtcbiAgcHJpbnRHYW1lT3ZlcigpO1xuICBjaGFuZ2VDYW52YXNQb2ludGVyKCk7XG4gIGNoZWNrSGlnaFNjb3JlKGdhbWUuc2NvcmUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBwcmludEdhbWVPdmVyKCkge1xuICBjdHguZm9udCA9ICc0cmVtIFwiU3VwZXJzY3JpcHRcIic7XG4gIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICBjdHguZmlsbFRleHQoJ0dhbWUgT3ZlcicsIDI1MCwgMjUwKTtcbiAgcHJpbnROZXdHYW1lKCk7XG59XG5cbmZ1bmN0aW9uIHByaW50TmV3R2FtZSgpIHtcbiAgY3R4LmZvbnQgPSAnMnJlbSBcIlZUMzIzXCInO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgY3R4LmZpbGxUZXh0KCdDbGljayBoZXJlIHRvIHN0YXJ0IG5ldyBnYW1lJywgMjUwLCAzMDApO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlTmV3R2FtZSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VOZXdHYW1lKCkge1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlTmV3R2FtZSk7XG4gIGNoYW5nZUNhbnZhc1BvaW50ZXIoKTtcbiAgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4gIHN0YXJ0aW5nR2FtZVNwZWVkID0gMTIwO1xuICBnYW1lTG9vcCgpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYW52YXNQb2ludGVyKCkge1xuICBpZiAoY2FudmFzLnN0eWxlLmN1cnNvciA9PT0gJ25vbmUnKSB7XG4gICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgfSBlbHNlIHtcbiAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xuICB9XG59XG5cbi8vIGdhbWUgcGxheSBmdW5jdGlvbmFsaXR5XG5cbmZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuICBjbGVhckNhbnZhcygpO1xuICBjaGVja0xldmVsU3BlZWQoKTtcbiAgZ2FtZS5oYW5kbGVTbmFrZShnYW1lLnNuYWtlKTtcbiAgcmVxdWVzdEZyYW1lKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWxTcGVlZCgpIHtcbiAgaWYgKHBhcnNlSW50KGdhbWVMZXZlbC5pbm5lclRleHQpICE9PSBnYW1lLmxldmVsKSB7XG4gICAgZ2FtZUxldmVsLmlubmVyVGV4dCA9IGdhbWUubGV2ZWw7XG4gICAgc3RhcnRpbmdHYW1lU3BlZWQgLT0gNTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG5cbi8vIGhpZ2ggc2NvcmUgZnVuY3Rpb25hbGl0eVxuXG5mdW5jdGlvbiBwYXJzZVN0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoU2NvcmVMaXN0JykpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZha2VTY29yZXMoKSB7XG4gIGNvbnN0IGZha2VIaWdoU2NvcmVzID0gW107XG4gIGNvbnN0IGZha2VJbml0cyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICBjb25zdCBmYWtlU2NvcmVzID0gWzEwLCA5LCA4LCA3LCA2LCA1LCA0LCAzLCAyLCAxXTtcblxuICBmYWtlSW5pdHMuZm9yRWFjaCgoaW5pdCwgaW5kZXgpID0+IHtcbiAgICBmYWtlSGlnaFNjb3Jlcy5wdXNoKHtpbml0aWFsczogaW5pdC5yZXBlYXQoMyksXG4gICAgICBzY29yZTogZmFrZVNjb3Jlc1tpbmRleF19KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZha2VIaWdoU2NvcmVzO1xufVxuXG5mdW5jdGlvbiBwdWxsSGlnaFNjb3JlKCkge1xuICBsZXQgY3VycmVudEhpZ2hTY29yZUxpc3QgPSBwYXJzZVN0b3JhZ2UoKSB8fCBnZW5lcmF0ZUZha2VTY29yZXMoKTtcblxuICBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudEhpZ2hTY29yZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgY2xlYXJDdXJyZW50TGlzdCgpO1xuICBzZXRIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KTtcbiAgcmVuZGVySGlnaFNjb3JlTGlzdChjdXJyZW50TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ3VycmVudExpc3QoKSB7XG4gIGhpZ2hTY29yZUxpc3QuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIHNldEhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hTY29yZUxpc3QnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50TGlzdCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIaWdoU2NvcmVMaXN0KGN1cnJlbnRMaXN0KSB7XG4gIGN1cnJlbnRMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaGlnaFNjb3JlTGlzdC5pbm5lckhUTUwgKz0gIGA8bGkgY2xhc3M9XCJwbGFjZS0ke2luZGV4fVwiIGFyaWEtbGFiZWw9XCJoaWdoLXNjb3JlLXJhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5pdGlhbHNcIiBhcmlhLWxhYmVsPVwiaGlnaC1zY29yZS1pbml0aWFsc1wiPiR7aXRlbS5pbml0aWFsc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNjb3JlXCIgYXJpYS1sYWJlbD1cImhpZ2gtc2NvcmVcIj4ke2l0ZW0uc2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgfSk7XG59XG5cbi8vIG9uIGdhbWUgb3ZlclxuXG5mdW5jdGlvbiBjaGVja0hpZ2hTY29yZShjdXJyZW50U2NvcmUpIHtcbiAgbGV0IGN1cnJlbnRIaWdoU2NvcmVMaXN0ID0gcGFyc2VTdG9yYWdlKCk7XG5cbiAgc3BsaWNlTmV3U2NvcmUoY3VycmVudFNjb3JlLCBjdXJyZW50SGlnaFNjb3JlTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU5ld1Njb3JlKGN1cnJlbnRTY29yZSwgY3VycmVudExpc3QpIHtcbiAgbGV0IHNwbGljZUJlZ2luID0gZmluZEJlZ2luU3BsaWNlSW5kZXgoY3VycmVudFNjb3JlLCBjdXJyZW50TGlzdCk7XG5cbiAgaWYgKHNwbGljZUJlZ2luID4gLTEpIHtcbiAgICBsZXQgbmV3SGlnaFNjb3JlT2JqZWN0ID0gZ2V0SW5pdGlhbHMoY3VycmVudFNjb3JlKTtcblxuICAgIGN1cnJlbnRMaXN0LnNwbGljZShzcGxpY2VCZWdpbiwgMCwgbmV3SGlnaFNjb3JlT2JqZWN0KTtcbiAgICBjdXJyZW50TGlzdC5wb3AoKTtcbiAgICBnZW5lcmF0ZUhpZ2hTY29yZUxpc3QoY3VycmVudExpc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCZWdpblNwbGljZUluZGV4KGN1cnJlbnRTY29yZSwgY3VycmVudExpc3QpIHtcbiAgcmV0dXJuIGN1cnJlbnRMaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgIHJldHVybiBpdGVtLnNjb3JlIDwgY3VycmVudFNjb3JlO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbHMoY3VycmVudFNjb3JlKSB7XG4gIGxldCBtZXNzYWdlID0gJ1lvdSBlYXJuZWQgYSBoaWdoIHNjb3JlISBQbGVhc2UgZW50ZXIgeW91ciBpbml0aWFscy4nO1xuICBsZXQgZGVmYXVsdEluaXRzID0gJ0FBQSc7XG4gIGxldCBuZXdJbml0aWFscyA9IHByb21wdChtZXNzYWdlLCBkZWZhdWx0SW5pdHMpO1xuXG4gIHJldHVybiBtYWtlTmV3U2NvcmVPYmoobmV3SW5pdGlhbHMsIGRlZmF1bHRJbml0cywgY3VycmVudFNjb3JlKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5ld1Njb3JlT2JqKG5ld0luaXRpYWxzLCBkZWZhdWx0SW5pdHMsIGN1cnJlbnRTY29yZSkge1xuICByZXR1cm4ge1xuICAgIGluaXRpYWxzOiAobmV3SW5pdGlhbHMgfHwgZGVmYXVsdEluaXRzKS50b1VwcGVyQ2FzZSgpLnNsaWNlKDAsIDMpLFxuICAgIHNjb3JlOiBjdXJyZW50U2NvcmVcbiAgfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9