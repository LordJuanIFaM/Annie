const frases = [
    'Nunca e sentido esto por otra persona, eres muy especial para mi',
    'Te amo demasiado, dejaria todo aqui para irme contigo ',
    'Tal vez no te lo demuestro pero en verdad disfruto verte feliz',
    'Con el simplemente de escuchar tu voz se me alegra el dia',
    'Cuando te veo, me da una alegria que no quiero cambiar jamas',
    'Ennie, en la distancia te busco como un tulipán que anhela el sol, tus ojos son estrellas, tu risa un encanto, y en mi corazón late tu amor. Los Kilómetros nos separan, es cierto pero el amor traspasa mares y cielos. Cada carta,cada llamada contigo, cada gesto, es un lazo que nos une, tan bello hermoso como lo nuestro. Pienso en ti entre tulipanes y praderas rodeada de animales que amas y cuidas.  Eres mi sol, mi luna, mi estrella y en la distancia, eres todo lo que ansío.',
    'Tal vez no soy el mejor poeta pero hago el intento por ti amor',
    'Siempre voy a estar a tu lado en las buenas y en las malas',
    'Eres la luz que ilumina mis días y el motivo de mi sonrisa',
    'Cada momento a tu lado es un regalo que atesoro con todo mi corazón',
    'Tu amor es mi refugio en las tormentas y mi alegría en los días soleados',
    'En cada latido de mi corazón, resuena tu nombre como una melodía eterna',
    'Eres la razón por la que cada día me levanto con ilusión y esperanza',
    'Mi amor por ti crece más profundo con cada latido de mi corazón',
    'Eres mi todo, mi inspiración y mi razón de ser'
];
let contador = 0;

































































































































document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').textContent = frases[contador];
    contador = (contador + 1) % frases.length; // Incrementa el contador y lo reinicia si alcanza el final del array
});

function openTab(evt, tabName) {
    // Declarar todas las variables
    var i, tabcontent, tablinks;

    // Obtener todos los elementos con class="tabcontent" y ocultarlos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtener todos los elementos con class="tablinks" y eliminar la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar el contenido de la pestaña actual y añadir una clase "active" al botón que abrió la pestaña
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Mostrar la pestaña "Home" por defecto
document.getElementsByClassName("tablinks")[0].click();
