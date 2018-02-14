var contador = document.querySelectorAll('.contador');

$('.contador').each((i) => {

    var id = ".img-btn" + i;

    $(id).click(() => {

        
        var urlid = id + " .imgc";
        var idw = id + " .imgw";
        var idh = id + " .imgh";
        var url = $(urlid).text();
        var width = $(idw).text();
        var height = $(idh).text();

       
        $("#tam").attr("src", url);

        var tamanho = width + "x" + height;

        $("#dir a").attr("href", url);
       
        $("#mostrar").css("display","grid");
       
        $("html, body").animate({ scrollTop: 0 }, "fast");

    });
})

$("#cruz").click(() => {


    $("#tam").attr("src", "#");
    $("#mostrar").css("display","none");
   
});
   