var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

var panControl = document.querySelector('.panning-control');
var panValue = document.querySelector('.panning-value');

pre.innerHTML = myScript.innerHTML;
var panner = audioCtx.createPanner();
panner.panningModel = 'equalpower';
// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a stereo panner
// var panNode = audioCtx.createStereoPanner();

// Event handler function to increase panning to the right and left
// when the slider is moved

panControl.oninput = function() {
  // panNode.pan.value = panControl.value;
  // var x = Math.sin(panControl.value * (Math.PI / 180));
  // panner.setPosition(x, 0, 0);
  // panner.innerHTML = x;
  // var xDeg = parseInt(panControl.value);
  // var zDeg = xDeg + 90;
  // if (zDeg > 90) {
  //   zDeg = 180 - zDeg;
  // }
  // var x = Math.sin(xDeg * (Math.PI / 180));
  // var z = Math.sin(zDeg * (Math.PI / 180));
  // panner.setPosition(x, 0, z);
  var x = panControl.value,
  y = 0,
  z = 1 - Math.abs(x);
  panner.setPosition(x,y,z);
}

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the panning using the controls
source.connect(panner);
panner.connect(audioCtx.destination);