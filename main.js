function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(250,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
image(video,0,0,640,480);
tint(tint_color);
stroke(169,10,10);
fill(200,30,90);

circle(40,40,50);
circle(40,360,50);
circle(360,40,50);
}

function take_snapshot(){
save('Picture.png');
}

function filter_tint(){
tint_color=document.getElementById("color_name").value;
}