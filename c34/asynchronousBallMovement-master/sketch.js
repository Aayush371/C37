var database;
var form,player,game;
var playercount;
var gamestate = 0;
var allplayers;
var car1,car2,car3,car4,cars;



function setup(){
    createCanvas (displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}
function draw(){
    if (playercount=== 4){
        game.update(1)
    }
    if (gamestate ===1){
        clear();
        game.play();
    }
}