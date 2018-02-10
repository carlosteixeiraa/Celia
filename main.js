// AIzaSyAZkBF9MCouccU4irPf4ymuNnMwqlXmn
var cxkey = '001132580745589424302:jbscnf14_dw';
var api = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyA0dRdEYJaFVpkRj4ZxBiWUOMZ50yfY380&cx=' + cxkey + '&q='

var express = require('express'),
    app = express(),
    porta = 3000,
    got = require('got');

app.listen(porta, () => {
    console.log('Servidor ligado em localhost:', porta);
});

app.use(express.static('public'));


app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Celia'
    })
})

app.get('/resultados', (req, res) => {
    let titulo = 'Celia - Resultados para ' + req.query.s;
    
    var apip = api + req.query.s;

    got(apip, { json: true }).then(resposta => {
       // console.log(resposta.body);

        res.render('resultados', {
            titulo: titulo,
            resultados: resposta.body,
            params: req.query.s
        });

      }).catch(error => {
        console.log(error);
      });
});