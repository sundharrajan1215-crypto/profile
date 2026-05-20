const GameBord=document.getElementById("gameb")
const context=GameBord.getContext('2d');
const WIDTH=GameBord.width;
const HEIGHT = GameBord.height;
const UNIT=25;
const Score=document.getElementById("value")
let FoodX;
let FoodY;
let Snake=[ 
    {x:UNIT*3,y:0},
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}

    
];
let XVel=25;
let YVel=0;
let score=0;
let start=false;
let active=true;
StartGame();
window.addEventListener('keydown',keyPress);
function StartGame()
{
  context.fillStyle ='#212121'
  context.fillRect(0,0,WIDTH,HEIGHT)
  CreateFood();
  DisplayFood();
  Nexttick();
}
function clearBord()
{
    context.fillStyle ='#212121'
  context.fillRect(0,0,WIDTH,HEIGHT)

}
function CreateFood()
{
    FoodX = Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    FoodY=Math.floor(Math.random()*HEIGHT/UNIT)*UNIT;

}
function DisplayFood()
{
    context.fillStyle="red";
    context.fillRect(FoodX,FoodY,UNIT,UNIT);

}
function DrawSnake()
{
   context.fillStyle='aqua'
   context.strokeStyle='black'
   Snake.forEach((snakeS)=>{
       context.fillRect(snakeS.x,snakeS.y,UNIT,UNIT)
       context.strokeRect(snakeS.x,snakeS.y,UNIT,UNIT)

   
});
}
function moveSnake()
{
    const Head={
        x: Snake[0].x+XVel,y:Snake[0].y+YVel
    }
    Snake.unshift(Head);
    if(Snake[0].x==FoodX && Snake[0].y==FoodY)
    {
        score+=1;
        Score.textContent=score;
        CreateFood();
    }
    else{
    Snake.pop();
}
}
function Nexttick()
{ if(active){
    setTimeout(()=>{
       clearBord();
       DisplayFood();
       moveSnake();
       DrawSnake();
       CheckGameOver();
       Nexttick();

    },200);
}
else
{
    context.font="bold 50px serif";
    context.fillStyle='white';
    context.textAlign='center';
    context.fillText("GAME OVER !",WIDTH/2,HEIGHT/2);
}
}
function keyPress(event)
{
    active=true;
    const Left=37;
    const up=38;
    const right=39;
    const down=40;
    switch(true)
    {
        case(event.keyCode==Left && XVel!=UNIT):
        XVel=-UNIT;
        YVel=0;
        break;
        case(event.keyCode==right && XVel!=-UNIT):
          XVel=UNIT;
          YVel=0;
          break;
          case(event.keyCode==up ):
          Xvel=0;
          YVel=-UNIT;
          break;
          case(event.keyCode==down && YVel!=-UNIT):
          XVel=0;
          YVel=UNIT;
          break;
        
          

        


    }
}
function CheckGameOver()
{
    switch(true)
    {
        case(Snake[0].x<0):
        case(Snake[0].x>=WIDTH):
        case(Snake[0].y<0):
        case(Snake[0].y>=HEIGHT):
        active=false;
        break;
    }
}

