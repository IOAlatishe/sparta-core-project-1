$(document).ready(function() {


  //the variables that will be called upon in this js file/
  var paddleHeight = 150;
  var paddleWidth = 10;
  var ballRadius = 25;
  var halfPaddleHeight = paddleHeight / 2;
  var speedOfPaddle1 = 0;
  var positionOfPaddle1 = 460;
  var speedOfPaddle2 = 0;
  var positionOfPaddle2 = 460;
  var topPositionOfBall = 510;
  var leftPositionOfBall = 820;
  var topSpeedOfBall = 0;
  var leftSpeedOfBall = 0;
  var score1 = 0;
  var score2 = 0;

  var newPos = 0;

  // set Interval for StartStop
  var interval;
  var timerIsRunning = false;
  var dirX = '+';
  var dirY = '+';

  $('#start').click(function() {
    if (timerIsRunning) {
      clearInterval(interval);
      timerIsRunning = !timerIsRunning;
    } else {
      interval = setInterval(function() {

        // Board Dimensions
        var board = $('#container');
        var boardLeft = board.position().left;
        var boardRight = board.position().left + board.innerWidth();
        var boardTop = board.position().top;
        var boardBottom = board.position().left + board.innerHeight();
        console.log('top : ' + boardTop, 'bottom : ' + boardBottom, 'Right : ' + boardRight, 'left : ' + boardLeft, );

        // Ball Dimensions
        var ball = $('#ball');
        var ballLeft = ball.position().left;
        var ballRight = ball.position().left + ball.innerWidth();
        var ballTop = ball.position().top;
        var ballBottom = ball.position().left + ball.innerHeight();
        console.log('top : ' + ballTop, 'bottom : ' + ballBottom, 'Right : ' + ballRight, 'left : ' + ballLeft, );


        // Every 10ms we need to check the current position of the ball
        // Lose Conditions
        // If the ballRight > boardRight = reverse X direction
        if (ballRight > boardRight) dirX = '-';
        // If the ballLeft < boardLeft = reverse X direction
        if (ballLeft < boardLeft) dirX = '+';
        // Collision Conditions on Board
        // If bellTop < boardTop = reverse Y direction
        if (ballTop < boardTop) dirY = '+';
        // If bellBottom > boardBottom = reverse Y direction
        if (ballBottom > boardBottom) dirY = '-';
        console.log(dirY);
        // Collision Conditions on paddles
        // Left Paddle
        // if ballLeft < paddleRight = reverse X direction
        // if ( ballLeft < paddleRight ) dirX = '+';
        // Right Paddle
        // if ballRight > paddleLeft = reverse X direction
        // if ( ballRight > paddleLeft ) dirX = '-';

        ball.css({
          'left': newPos + 'px',
          'top': newPos + 'px',
        })

        // newPos++;

          if (dirX === '+') {
            newPos++;
          }
          if (dirX === '-') {
            newPos--;
          }
          if (dirY === '+') {
            newPos++;
          }
          if (dirY === '-') {
            newPos--;
          }




        // positionOfPaddle1 += speedOfPaddle1;
        // positionOfPaddle2 += speedOfPaddle2;
        // topPositionOfBall += topSpeedOfBall;
        // leftPositionOfBall += leftSpeedOfBall;
        //
        //
        //
        // //keeps the paddle on the top half screen??????
        // if (positionOfPaddle1 <= 150) {
        //   positionOfPaddle1 = 150;
        // }
        // if (positionOfPaddle2 <= 150) {
        //   positionOfPaddle2 = 150;
        // } //stops paddles from going out of the display
        // if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
        //   positionOfPaddle1 = window.innerHeight - paddleHeight;
        // }
        //
        // if (positionOfPaddle2 > window.innerHeight - paddleHeight) {
        //   positionOfPaddle2 = window.innerHeight - paddleHeight;
        // } //Bottom half of the screen
        // if (topPositionOfBall <= 150 || topPositionOfBall >= window.innerHeight - ballRadius) {
        //   topSpeedOfBall = -topSpeedOfBall
        // }
        //
        // //if a score has been awarded to pla the score will increase and the startBall() function will occur again
        // if (leftPositionOfBall <= paddleWidth) {
        //   if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
        //     leftSpeedOfBall = -leftSpeedOfBall;
        //   } else {
        //     score2++;
        //     startBall();
        //   }
        // }
        // //Same again here but applies to player 1 scoreing a point
        // if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
        //   if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
        //     leftSpeedOfBall = -leftSpeedOfBall
        //   } else {
        //     score1++;
        //     startBall();
        //
        //   }
        // }
        // document.getElementById("paddle1").style.top = (positionOfPaddle1) + "px";
        // document.getElementById("paddle2").style.top = (positionOfPaddle2) + "px";
        // document.getElementById("ball").style.top = (topPositionOfBall) + "px";
        // document.getElementById("ball").style.left = (leftPositionOfBall) + "px";
        // document.getElementById('score1').innerHTML = score1.toString();
        // document.getElementById('score2').innerHTML = score2.toString();
      }, 10);
      timerIsRunning = !timerIsRunning;
      startBall();
    }
  })



  //Once the html is opened the game begins to run.
  //the position of the ball is placed in the middle of the screen
  //the 'Math.random' gives a left and top speed of the ball
  function startBall() {
    // topPositionOfBall = 510;
    // leftPositionOfBall = 820;

    if (Math.random() < 0.5) {
      var side = 1
    } else {
      var side = -1
    }
    topSpeedOfBall = Math.random() * 4 + 3;
    leftSpeedOfBall = side * (Math.random() * 4 + 3);
  };

  //the keydown option allows paddle1 to be moved up and down.
  //This was done with an if statement and reduces the height by -10 or increases it by 10
  //
  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 87 || event.which == 87) { // W key
      speedOfPaddle1 = -10;
    }
    //this
    if (event.keyCode == 83 || event.which == 83) { // S Key
      speedOfPaddle1 = 10;
    }
    if (event.keyCode == 38 || event.which == 38) { // up arrow
      speedOfPaddle2 = -10;
    }
    if (event.keyCode == 40 || event.which == 40) { // down arrow
      speedOfPaddle2 = 10;
    }
  }, false);
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 87 || event.which == 87) {
      speedOfPaddle1 = 0;
    }
    if (event.keyCode == 83 || event.which == 83) {
      speedOfPaddle1 = 0;
    }
    if (event.keyCode == 38 || event.which == 38) {
      speedOfPaddle2 = 0;
    }
    if (event.keyCode == 40 || event.which == 40) {
      speedOfPaddle2 = 0;
    }
  }, false);

  // Board Dimensions

  // startBall();
})
