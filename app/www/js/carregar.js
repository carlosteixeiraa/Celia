var api = "http://ooon.online:3030/fsgey1r3i4?pedido=" + query + "&resultados=100";

$(document ).ready(() => {
    $.getJSON(api, (resposta) => {
     for(var i = 0; i < resposta.length; i++) {
        if(resposta[i].link !== null) {
            $("<div class=\"resultado\"><a href=\""+ resposta[i].href + "\"><h2>" + resposta[i].title + "</h2></a><h3>" + resposta[i].link + "</h3><p>" + resposta[i].description + "</p></div>").appendTo("#resultados");
        }
     }
    });

});