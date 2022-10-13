class Game {

    constructor(ctx, width, height, player)
    {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles =[];
        this.frames = 0;
    }

drawBackground() {
 const backgroundImage = new Image ();
 backgroundImage.src = "/images/road.png";
 ctx.drawImage(backgroundImage,0,0,400,540);
}

}
    start() 
    {
        this.intervalId = setInterval(this.update, 500 / 60);
    }

    clear () 
    {
        this.ctx.clearRect(0,0,this.width, this.height);
    }    

  //  score (){
//
  //      const points = Math.floor(this.frames / 5 );
    //    this.ctx.font = '22px monospace'
      //  this.ctx.fillStyle = 'black'
        //this.ctx.fillText(`Score: ${points}`, 1000,50);
   // }

    update = () =>  
    {
       // this.score();
        this.frames++;
        //this.clear();
        this.drawBackground();
        this.player.draw();
        //this.updateObstacles();
        //this.checkGameOver();
    };

    stop() 
    {    
        clearInterval(this.intervalId);      
    } 
   
     checkGameOver()
     {
          const crashed = this.obstacles.some((obstacle) => {
          return this.player.crashWith(obstacle);
     });

     if (crashed) {
        this.stop();

     }

     }
    updateObstacles() 
    {
        for (let i = 0; i< this.obstacles.length; i++){
            this.obstacles[i].x -=1;
            this.obstacles[i].draw();

        }


        if (this.frames % 180 === 0) 
        {
        
        // controla a velocidade do game
        let y = 250;
        let minHeight = 20; // calculate the height of the columns / obstacles
        let maxHeight = 400;

        let width = Math.floor(Math.random()*(maxWidth -  minWidth + 1) + minWidth)
    
        let randomX = Math.floor(Math.random()*500);

       // let minGap = 75; // these variable control the size of the gap between
        //let maxGap = 200;

       // let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

        this.obstacles.push(new Component (randomX - width, 0,width, 30, this.ctx));

        // bottom obstacle
       // this.obstacles.push(new Component(x, height + gap, 50, x - height - gap, 'blue', this.ctx));

    }

  }
