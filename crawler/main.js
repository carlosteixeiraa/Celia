var crawler = require('google'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    porta = 3030;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// http://localhost:3020/fsgey1r3i4?pedido=pao&resultados=10

app.get('/:key', (req, res) => {
    
    var pedido = req.query.pedido;
    var key = req.params.key;
    var resultados = req.query.resultados;

    crawler.resultsPerPage = resultados;

    if(key === "fsgey1r3i4") {

        crawler(pedido, (err, resposta) =>{

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

app.listen(porta, () => {
    console.log('Crawler a ouvir em localhost:' + porta)
})