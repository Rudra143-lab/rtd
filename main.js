 noseX = 0;
 noseY = 0;
 leftWristx = 0;
 rightWristx = 0;
 different = 0;

 function setup() {
     video = createCapture(VIDEO);
     video.position(10,300)  
     video.size(380, 260);

     canvas = createCanvas(560, 510);
     canvas.position(500, 200);

     pose = ml5.poseNet(video, model_loaded);
     pose.on('pose', got_result);
 }

 function model_loaded() {
     console.log("PoseNet is Loaded");
 }

 function got_result(results) {
     if (results.length > 0) {
         console.log(results);
         noseX=results[0].pose.nose.x;
         noseY=results[0].pose.nose.y;
         leftWristx=results[0].pose.leftWrist.x;
         rightWristx=results[0].pose.rightWrist.x;
         different=floor(leftWristx-rightWristx);
     }

 }

 function draw() {
     background('#fff');
     document.getElementById("square_side").innerHTML="Widht and Height of square ="+different+"px";
     fill('#626262');
     stroke('#626262');
     square(noseX,noseY,different);
 }