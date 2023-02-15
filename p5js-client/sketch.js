//import {joueSon} from '/main.js';

var currentHost = 'no input';
var oscWebSocket;
var statusMessage = 'not connected';
var receivedMessage = '';

let inputMessage;
let inputHost;

const btn1 = document.querySelector('.button1');

btn1.addEventListener('click', function(){
  onSendClick();
  joueSon();
})

const btn2 = document.querySelector('.button2');

btn2.addEventListener('click', function(){
  onSendClick();
  joueSon();
})

const btn3 = document.querySelector('.button3');

btn3.addEventListener('click', function(){
  onSendClick();
  joueSon();
})

const btn4 = document.querySelector('.button4');

btn4.addEventListener('click', function(){
  onSendClick();
  joueSon();
})

const btn5 = document.querySelector('.button5');

btn5.addEventListener('click', function(){
  onSendClick();
  joueSon();
})

const btn6 = document.querySelector('.button6');

btn6.addEventListener('click', function(){
  onSendClick();
  joueSon();
})

function setup() {
  createCanvas(400, 400);

  let button = createButton('connect');
  button.position(250, 80);
  button.mousePressed(onConnectClick);



  inputHost = createInput();
  inputHost.position(50, 90);

  textSize(16);
}


function onConnectClick() {
  currentHost = inputHost.value();
  inputHost.value('');

  // connect to WebSocket server:
  try {
    oscWebSocket = new osc.WebSocketPort({
      url: "ws://" + currentHost,
      metadata: true
    });
  
    oscWebSocket.on("ready", onSocketOpen);
    oscWebSocket.on("message", onSocketMessage);
    oscWebSocket.on("error", function(e){
      print(e.message);
    });
  
    oscWebSocket.open();
  } catch(e) {
    print(e);
    statusMessage = e;
  }
  
}



function onSendClick() {
  // send the OSC message to server. (osc.js will convert it to binary packet):
  oscWebSocket.send({
    address: "/p5js/sayhi",
    args: [
      {
        type: "s",
        value: 'yo'
      }
    ]
  });
}


function onSocketOpen(e) {
  print('server connected');
  statusMessage = 'server connected';
  
}

function onSocketMessage(message) {
  print(message);
  if (message) {
    receivedMessage = 'address: ' + message.address;

    if (message.args && message.args.length > 0) {
      receivedMessage += ', value: ' + message.args[0].value;
    }
  }
}