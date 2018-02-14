$(document ).ready(() => {
    $('#texto h3').addClass('magictime puffIn');
    $('#imagem img').addClass('magictime slideDownReturn');
});
  
if (window.location.protocol !== 'https:') {
    window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
}

var app = document.getElementById('anim');

var tw = new Typewriter(app, {
    loop: true,
    deleteSpeed: 25
});

tw.typeString('a search engine')
    .pauseFor(750)
    .deleteAll()
    .typeString('voice controled')
    .pauseFor(500)
    .deleteAll()
    .typeString('easy to use')
    .pauseFor(500)
    .deleteAll()
    .typeString('open source')
    .pauseFor(500)
    .deleteAll()
    .typeString('awessome')
    .pauseFor(500)
    .start();