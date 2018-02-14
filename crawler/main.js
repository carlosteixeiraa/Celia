var crawler = require('google'),
    express = require('express'),
    Scraper = require('images-scraper'),
    bing = new Scraper.Bing();
    bodyParser = require('body-parser'),
    app = express(),
    porta = 3030;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// http://localhost:3020/fsgey1r3i4?pedido=pao&resultados=10

function logar(key, pedido, resultados) {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();

    console.log(horas + ':' + minutos + ' | Um pedido de busca (' + resultados + ') para a route / foi feito pela key ' + key + ' parametro de busca ' + pedido)
}

function logarImg(key, pedido, resultados) {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();

    console.log(horas + ':' + minutos + ' | Um pedido de busca (' + resultados + ') para a route /imagens foi feito pela key ' + key + ' parametro de busca ' + pedido)
}

app.get('/:key', (req, res) => {
    
    var pedido = req.query.pedido;
    var key = req.params.key;
    var resultados = req.query.resultados;

    logar(key, pedido, resultados);

    crawler.resultsPerPage = resultados;

    if(key === "fsgey1r3i4") {

        crawler(pedido, (err, resposta) => {

            if (err) {
                console.error(err)
            } else {
                res.send(resposta.links);
            }

        })

    } else {
        res.status(403);
    }

});

app.get('/imagens/:key', (req, res) => {

    var pedido = req.query.pedido;
    var key = req.params.key;
    var resultados = req.query.resultados;

    logarImg(key, pedido, resultados);

    if(key === "fsgey1r3i4") {

        bing.list({
            keyword: pedido,
            num: resultados,
            detail: true
        })
        .then((resposta) => {

            res.send(resposta);

        }).catch((err) => {
            console.log('err');
        })

    } else {
        res.status(403);
    }


});

app.listen(porta, () => {
    console.log('Crawler a ouvir em localhost:' + porta)
})