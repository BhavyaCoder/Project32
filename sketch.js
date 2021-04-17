const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
gettime();
}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{
    if (backgroundImg)
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function gettime ()
{
var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
var responseJSON = await response.json()
var datetime = responseJSON.datetime
var hour = datetime.slice(11,13)
console.log(hour)
if (hour>=06&&hour<=19)
{
bg="sunrise1.png,sunrise2.png,sunrise3.png,sunrise4.png,sunrise5.png,sunrise6.png"
}
else
{
bg="sunset7.png,sunset8.png,sunset9.png,sunset10.png,sunset11.png,sunset12.png"
}
backgroundImg=loadImage(bg)
}

