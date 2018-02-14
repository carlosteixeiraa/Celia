$(document ).ready(() => {
  $('#wrapper h1').addClass('magictime puffIn');
  $('#barra form').addClass('magictime perspectiveDownReturn');
});

let voz = new Audio('../media/voz.mp3');
let celia = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
celia.lang = 'pt-Br';
celia.interimResults = false;
celia.maxAlternatives = 1;
celia.start();

celia.onresult = (event) => {

    let resultado = event.results[0][0].transcript;  
    let dividido = resultado.split(' ');
    console.log(resultado)

    if(dividido[0] === 'célia' && dividido[1] === 'procura') {

      let link = resultado.replace('célia', '');
      let linkl = link.replace('procura', '');
      
      voz.play();

      let linkir = 'http://localhost:3000/resultados?s=' + linkl;
      window.open(linkir, '_self')
    }

}

celia.onend = () => {
  celia.start();
}

var queryjs = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
      var p=a[i].split('=', 2);
      if (p.length == 1)
          b[p[0]] = "";
      else
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

var url = queryjs['s'];

$("#irimg").click(() => {

  var linkimg = "https://localhost:3000/imagens?s=" + url;
  window.open(linkimg, '_self')
 
});
 