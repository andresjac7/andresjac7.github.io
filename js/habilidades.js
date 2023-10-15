$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 0,
        responsive: {
            0: {
                // En pantallas con un ancho de hasta 599 píxeles, se muestra 1 elemento por vez
                items: 1
            },
            600: {
                // En pantallas con un ancho de 600 a 999 píxeles, también se muestra 1 elemento por vez
                items: 2
            },
            1000: {
                // En pantallas con un ancho de 1000 píxeles o más, se muestran 3 elementos por vez
                items: 4
            }
        }
    });
  });