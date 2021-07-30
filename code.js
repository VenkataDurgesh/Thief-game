var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a671993b-7839-41da-a2b7-5051d3b07d75","8a6b57aa-9c4d-485b-bb46-3899def42cee","658a6f47-ba35-4123-ac95-ad63797ed0ee","e024eae1-5bf8-45a1-a89e-7e43da8eab57","58bba73a-7aa1-46b9-bce3-58f5f37537d4","081cfe95-26e7-41b6-a21d-800999bfd168","84e6bb75-d46a-4fb7-9ad3-8d97589da08b"],"propsByKey":{"a671993b-7839-41da-a2b7-5051d3b07d75":{"name":"bg_landscape10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png","frameSize":{"x":400,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png"},"8a6b57aa-9c4d-485b-bb46-3899def42cee":{"name":"background_landscape02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Iniwjg2LkdYOKciItYOH.FbJcQCgPi42","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Iniwjg2LkdYOKciItYOH.FbJcQCgPi42/category_backgrounds/background_landscape02.png"},"658a6f47-ba35-4123-ac95-ad63797ed0ee":{"name":"bg_underwater_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.QiQ1bLkEkbAY3XX0dkNKD2mRrzQzCgN/category_backgrounds/bg_underwater_13.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".QiQ1bLkEkbAY3XX0dkNKD2mRrzQzCgN","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.QiQ1bLkEkbAY3XX0dkNKD2mRrzQzCgN/category_backgrounds/bg_underwater_13.png"},"e024eae1-5bf8-45a1-a89e-7e43da8eab57":{"name":"sticker_14_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU/category_stickers/sticker_14.png"},"58bba73a-7aa1-46b9-bce3-58f5f37537d4":{"name":"diamond_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"},"081cfe95-26e7-41b6-a21d-800999bfd168":{"name":"_1","sourceUrl":"assets/v3/animations/wNlqJn-_OtBsILgK0AzqciF9xOkRoU9KcSI7pgWhKos/081cfe95-26e7-41b6-a21d-800999bfd168.png","frameSize":{"x":920,"y":444},"frameCount":1,"looping":true,"frameDelay":4,"version":".Un_nsBprV1L0tR8wuy4nZqzrRK8jhff","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":444},"rootRelativePath":"assets/v3/animations/wNlqJn-_OtBsILgK0AzqciF9xOkRoU9KcSI7pgWhKos/081cfe95-26e7-41b6-a21d-800999bfd168.png"},"84e6bb75-d46a-4fb7-9ad3-8d97589da08b":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"}}};
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

var bg=createSprite(200,200,200,200);
    bg.setAnimation("bg_underwater_13_1");
    
var diamond=createSprite(375,25,20,20);
    diamond.setAnimation("diamond_1");
    diamond.scale="0.09";
    
var thief = createSprite(20,365,20,20);
    thief.setAnimation("car_black_1");
    thief.scale="0.5";
    
var laser1 = createSprite(100,270,300,5);
    laser1.shapeColor="red";
    
var laser2 = createSprite(300,130,300,5);
    laser2.shapeColor="red";
    



function draw() {
  
playSound( "assets/category_background/wavering_wind.mp3");
if (keyWentDown(UP_ARROW)) {
  thief.setVelocity(0,-4);
}
if (keyWentUp(UP_ARROW)) {
  thief.setVelocity(0,0);
}
if (keyWentDown(DOWN_ARROW)) {
  thief.setVelocity(0,4);
}
if (keyWentUp(DOWN_ARROW)) {
  thief.setVelocity(0,0);
}
if (keyWentDown(LEFT_ARROW)) {
  thief.setVelocity(-4,0);
}
if (keyWentUp(LEFT_ARROW)) {
  thief.setVelocity(0,0);
}
if (keyWentDown(RIGHT_ARROW)) {
  thief.setVelocity(4,0);
}
if (keyWentUp(RIGHT_ARROW)) {
  thief.setVelocity(0,0);
}
createEdgeSprites();
if (thief.isTouching(edges)) {
  thief.x=20;
  thief.y=365;
}
if (laser1.isTouching(leftEdge)) {
  laser1.setVelocity(6,0);
}
if (laser2.isTouching(leftEdge)) {
  laser2.setVelocity(6,0);
}
if (laser1.isTouching(rightEdge)) {
  laser1.setVelocity(-6,0);
}  
if (laser2.isTouching(rightEdge)) {
  laser2.setVelocity(-6,0);
} 
 drawSprites();
if (thief.isTouching(diamond)) {
  diamond.destroy();
   textSize(50);
  fill("green");
  strokeWeight(4);
  text("DIAMOND ID LOST",100,200);
}
if (laser1.isTouching(thief) || laser2.isTouching(thief)) {
  thief.setVelocity(0,0);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  stopSound("assets/category_background/wavering_wind.mp3");
   textSize(50);
  fill("green");
  strokeWeight(4);
  text("you loose",100,200);
}
  
  
  

  
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
