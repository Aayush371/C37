class Form { 
 constructor() {
this.input = createInput ("name");
this.button = createButton ("play");
this.greeting = createElement ("h2")
      }
      hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
      
      }
 display(){
var title = createElement('h2')
title.html("Car Racing Game"); 
title.position(displayWidth/2-100, 0); 

this.input.position(displayWidth/2-100, 160);
this.button.position(displayWidth/2-50, 200); 
this.button.mousePressed(()=>{
this.input.hide();
this.button.hide(); 
player.name = this.input.value();
playercount+=1;
player.index = playercount
player.update();
player.updatecount(playercount); 
this.greeting.html("Hello " + player.name )
this.greeting.position(displayWidth/2-100, 160) });
} 
}