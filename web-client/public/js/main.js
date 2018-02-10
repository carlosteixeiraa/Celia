$(document ).ready(() => {
  $('#wrapper h1').addClass('magictime puffIn');
  $('form').addClass('magictime perspectiveDownReturn');
});

// var celia = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
// var resultado;
// celia.lang = 'pt-Br';
// celia.interimResults = false;
// celia.maxAlternatives = 1;
// celia.start();

// celia.onresult = (event) => {

//     resultado = event.results[0][0].transcript;  
//     console.log(resultado)

// }

// celia.onend = () => {
//   celia.start();
// }