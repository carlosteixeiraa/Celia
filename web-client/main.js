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
    
    var apip = "http://ooon.online:3030/fsgey1r3i4?pedido=" + req.query.s + "&resultados=100";

    if(req.query.s.length !== 0) {
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
    } else {
        res.redirect('/');
    }
});