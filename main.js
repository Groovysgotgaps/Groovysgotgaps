canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var nasa_array=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"];
random_number=Math.floor(Math.random()*4);
var background_image=nasa_array[random_number];
var rover_image="rover.png;"
function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;
rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
if(keyPressed=='38'){
up();
}
if(keyPressed=='40'){
 down();
 }
if(keyPressed=='37'){
left();
}
if(keyPressed=='39'){
right();
 }
}
function up(){
if(rover_y>=0){
rover_y=rover_y-10;
uploadBackground();
uploadrover();
}
}
function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    uploadBackground();
    uploadrover();
    }
    }
    function left(){
        if(rover_x>=0){
        rover_x=rover_y-10;
        uploadBackground();
        uploadrover();
        }
        } 
        function right(){
            if(rover_x<=700){
            rover_x=rover_x+10;
            uploadBackground();
            uploadrover();
            }
            }