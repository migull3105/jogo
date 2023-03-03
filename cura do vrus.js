var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0b00b3b2-0be6-491b-be56-7a148b0c9301","5a50f888-2c0e-4eed-99f4-23272495ec71","c1126acd-918f-47ab-8a76-791efc6868d8"],"propsByKey":{"0b00b3b2-0be6-491b-be56-7a148b0c9301":{"name":"concha","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"lWK7KjwxI7v07AwEtZaw1WT7vXe1P2zt","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/0b00b3b2-0be6-491b-be56-7a148b0c9301.png"},"5a50f888-2c0e-4eed-99f4-23272495ec71":{"name":"sam","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qp1pRzyy_SckLAgDnNW0LjMB18iLPYJC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/5a50f888-2c0e-4eed-99f4-23272495ec71.png"},"c1126acd-918f-47ab-8a76-791efc6868d8":{"name":"feio","sourceUrl":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"dHshQXiche2omlBhwWrKH5zbfEiC6doy","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dHshQXiche2omlBhwWrKH5zbfEiC6doy/category_germs/virus03_11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var vidas = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var concha= createSprite(372, 190,35,35);
    concha.shapeColor="#87CEFA";
concha.setAnimation("concha");
    concha.scale = 0.4;
var estadoJogo = "jogando";
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("sam")
  sam.scale = 0.13
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("feio")
  car1.scale = 0.075
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
   car2.setAnimation("feio")
    car2.scale = 0.075
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
   car3.setAnimation("feio")
    car3.scale = 0.075
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
   car4.setAnimation("feio")
   car4.scale = 0.075
 
//adicione velocidade para fazer o carro se mover.


     car1.velocityY=2;

     car2.velocityY=2;

     car3.velocityY=-2;

     car4.velocityY=-2;
     
function draw() {
   background("white");
  text("mortes: " + vidas,200,100);
  strokeWeight(1);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para aumentar asaaad mortes de Sam quando ele encostar no carro.
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2); 
  
    car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  
    car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  
    car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
  //   if (keyDown("w")) {
  //   sam.y=sam.y-1;
  // }
  
  // if (keyDown("s")) {
  //   sam.y=sam.y+1;
  // }
  
    if(estadoJogo === "jogando"){
   if (keyDown("a")) {
    sam.x=sam.x-3;
  }
  
  if (keyDown("d")) {
    sam.x=sam.x+10;
  }
  }
       if(car1.isTouching(sam) ||
       car2.isTouching(sam) || 
       car3.isTouching(sam) ||
       car4.isTouching(sam)){
  vidas = vidas+1;
  sam.x = 20;
  sam.y = 190;
  sam.velocityY = 0;
  sam.velocityX = 0;
  }
  
      if(concha.isTouching(sam)){
     stroke(0);
    fill(0);
    textSize(24);
    text("curado",175, 200);

    sam.setVelocity(0,0);
estadoJogo = "fim";
car1.destroy();
car2.destroy();
car3.destroy();
car4.destroy();
   }
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
