
/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//const rua = new Image();
//rua.onload = function () {
  //  ctx.drawImage(rua, 0,0,500,700)
//}

//rua.src="../images/road.png";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const player = new Component (0, 100, 50, 50, 'red', ctx);
    let game = new Game(ctx,400,640,player);

    game.start();
  };

 // function startGame() {}
};


// creating a player

//create the game

//let game = new Game(ctx, 1200, 800, player);

//game.start();

//document.addEventListener('keydown', (e) => { 
  //  switch (e.code){
    // case 'ArrowRight':
     //player.speedX += 1;
     //break;

     //case 'ArrowLeft':
     //player.speedX -= 1;
     //break;

//}

//});

//document.addEventListener('keyup', (e) => {
  // player.speedX = 0;
   //player.speedY = 0;

//});
