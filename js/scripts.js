$(document).ready(function(){
    // $.mask.definitions['~'] = "[+-]";
    // $("#celular").mask("(99) 99999-9999");

    // $.mask.definitions['~'] = "[+-]";
    // $("#celular-cancun").mask("(99) 99999-9999");

    $('#celular').mask('(00) 00000-0000');
    $('#celular-cancun').mask('(00) 00000-0000');

    $('#carousel').carousel(
        {
            fullWidth: true,
        }
    );

    setInterval(function() {
 
        $('#carousel').carousel('next');
    
    }, 3000);

    $('#carousel2').carousel(
        {
            fullWidth: true,
        }
    );

    setInterval(function() {
 
        $('#carousel2').carousel('next');
    
    }, 4000);

    $('.modal').modal();

    // var data = new Date();
    // document.getElementById("data").innerHTML = data.toLocaleDateString();
});