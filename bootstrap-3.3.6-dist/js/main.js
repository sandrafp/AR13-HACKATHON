$(document).ready(function() {
    $('.capa-1').mouseenter(function() {
		$('#capa-1').removeClass('hidden');
        $('#capa-1').show();
    }).mouseleave(function() {      
            $('#capa-1').hide();
    });
    $('.capa-2').mouseenter(function() {
		$('#capa-2').removeClass('hidden');
        $('#capa-2').show();
    }).mouseleave(function() {      
            $('#capa-2').hide();
    });
  	$('.capa-3').mouseenter(function() {
		$('#capa-3').removeClass('hidden');
        $('#capa-3').show();
    }).mouseleave(function() {      
            $('#capa-3').hide();
    });
    	$('.capa-4').mouseenter(function() {
		$('#capa-4').removeClass('hidden');
        $('#capa-4').show();
    }).mouseleave(function() {      
            $('#capa-4').hide();
    });
    	$('.capa-5').mouseenter(function() {
		$('#capa-5').removeClass('hidden');
        $('#capa-5').show();
    }).mouseleave(function() {      
            $('#capa-5').hide();
    });
    	$('.capa-6').mouseenter(function() {
		$('#capa-6').removeClass('hidden');
        $('#capa-6').show();
    }).mouseleave(function() {      
            $('#capa-6').hide();
    });
    	$('.capa-7').mouseenter(function() {
		$('#capa-7').removeClass('hidden');
        $('#capa-7').show();
    }).mouseleave(function() {      
            $('#capa-7').hide();
    });
    	$('.capa').mouseenter(function() {
		$('#capa').removeClass('hidden');
        $('#capa').show();
    }).mouseleave(function() {      
            $('#capa').hide();
    });
});
$(document).ready(function(){
$('.videos').slick({
dots: true, // Esto muestra los puntos abajo del slider
infinite: true, // Esto hace que el slider nunca termine 
speed: 300, // Esto es la velocidad en milisegundos que el slider hará la animación al moverse
slidesToShow: 2, // Esto define cuantos items se muestran
slidesToScroll: 2, // Esto define cuantos elementos se mueven a la vez, al navegar con las flechas
responsive: [ // Este arreglo define los breakpoints (igual que los media-queries en css) para el responsive
// Cada objeto es un breakpoint
{
breakpoint: 768, // Cuando el ancho de pantalla es menor o igual a 768px, se ocupa este...
settings: {
arrows: false, // No muestra las flechas
dots: false, // No muestra los puntos abajo
slidesToShow: 2, // Muestra dos slides o items a la vez
slidesToScroll: 1 // Cambia de a 1 item en cada movimiento
}
}, // Acá termina un breakpoint
// Acá comienza otro breakpoint
{
breakpoint: 480, // Cuando el ancho de pantalla es menor o igual a 480px, se ocupa este...
settings: {
arrows: false,
dots: false,
slidesToShow: 1, // Muestra un slide o item a la vez -> es lo unico diferente de lo anterior
slidesToScroll: 1
}
} // Acá termina otro breakpoint
] // Acá se cierra el arreglo del responsive
}); // Acá se cierra todo lo que define slick-slider

}); // Acá se cierra la función (document).ready de jquery