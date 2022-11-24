x = 0;
y = 0;
draw_apple = "";

to_number =  Number(content);

apple = loadImage(apple.png);

var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

var screen_width = window.innerWidth;
var screen_height = window.innerHeight;

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  to_number =  Number(content);

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   
    if (Number.isInteger(to_number)){
      "status" = "Sarted drawing apple"
      draw_apple = "set";
   }
   else {
     "status " = "The speech has not recognized a number"
   }
}

function setup() {
  screen_width = intialize = [0];
  screen_height = intialize = [0];
}
function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for (var i = 1; i <= to_number; i++) {
     x = Math.floor(Math.random() * 700);
     y = Math.floor(Math.random() * 400);
     image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function perload() {
  draw_apple = "loadImage(apple.png)";
}

function createCanvas() {
 (screen_width, screen_height - 150)
 Canvas.postition(apple.png = Math.floor)
} 

