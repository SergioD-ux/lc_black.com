$(document).ready(function() {
    var form = $('#contactForm'); // contact form
    var submit = $("#submit-btn"); //boton de enviar

    // form submit event
    form.on('submit', function(e) {
        e.preventDefault(); // prevent default form submit

        $.ajax({
            url: './modulo/form.php', // form action url
            type: 'POST', // form submit method get/post
            dataType: 'html', // request type html/json/xml
            data: form.serialize(), // serialize form data
            beforeSend: function() {
                //alert.fadeOut();
                submit.html('Enviando...'); // change submit button text
            },
            success: function(msg) {
                $('#modalForm').modal('show');
                if(msg=="Enviado"){
                    form.trigger('reset'); // reset form
                    $('#msgModalForm').text("Tu mensaje se ha enviado correctamente");
                }
                else{
                    $('#msgModalForm').text("¡Ups! Ha ocurrido un error. Vuelve a intentarlo.");
                }
                submit.html("Enviar"); // reset submit button text
            },
            error: function(e) {
                console.log(e)
                $('#modalForm').modal('show');
                $('#msgModalForm').text("¡Ups! Ha ocurrido un error. Vuelve a intentarlo.");
            }
        });
    });
});
