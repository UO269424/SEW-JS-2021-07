"use strict";
class Ejercicio7 {
    show(elem){
        $(elem).show();
    }
    hide(elem){
        $(elem).hide();
    }
    modificar(elem){
        var frases = ["Voy a aprobar SEW", "Un gran poder conlleva una gran responsabilidad", "Que la fuerza te acompañe", 
                    "¡No puedes pasar!", "Bond, James Bond", "Elemental, mi querido Watson", "Hasta la vista, baby", "Fortuna y gloria muchacho, fortuna y gloria",
                    "Juro solemnemente que esto es una tractoresura", "Vengadores, reuníos", "Luke, yo soy tu padre", "Siempre recordaréis este día como el día en el que casi capturáis al capitán Jack Sparrow",
                    "Un mago nunca llega tarde, ni pronto, llega exactamente cuándo se lo propone"];
        var random = Math.floor(Math.random() * frases.length);
        $(elem).text(frases[random]);
    }
    añadirElementos(elem) {
        var elementos = ["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5", "Elemento6", "Elemento7", "Elemento8"];
        var random = Math.floor(Math.random() * elementos.length);
        $(elem).append(elementos[random] + " ");
    }
    masPeliculas(elem) {
        var peliculas = ["Star Wars", "Harry Potter", "Indiana Jones", "El señor de los anillos", "Los vengadores", "Fast and furious"];
        var random = Math.floor(Math.random() * peliculas.length);
        $(elem).append(peliculas[random] + " ");
    }
    masSeries(elem) {
        var series = ["Breaking Bad", "Prison Break", "La casa de papel", "La que se avecina", "Juego de tronos", "Peaky Blinders"];
        var random = Math.floor(Math.random() * series.length);
        $(elem).append(series[random] + " ");
    }
    masActores(elem) {
        var actores = ["Harrison Ford", "Daniel Radcliffe", "George Clooney", "Matt Damon", "Vin Diesel", "Cilian Murphy"];
        var random = Math.floor(Math.random() * actores.length);
        $(elem).append(actores[random] + " ");
    }
    eliminar(elem) {
        $(elem).empty();
    }
    recorrer(element) {
        $("*", document.body).each(function () {
            var parentTag = $(this).parent().get(0).tagName;
            $(element).prepend(document.createTextNode("[Etiqueta padre: <" + parentTag + "> Tipo de elemento: <" + $(this).get(0).tagName + "> ]"));
        });
    }
    sumarFilasYColumnas(elem) {
        var nFilas = $("#tabla-personas tr").length;
        var nColumnas = $("#tabla-personas tr:last td").length;
        var res = nFilas + nColumnas
        $(elem).text(nFilas + " filas + " + nColumnas + " columnas = " + res);
    }

}
var ejercicio = new Ejercicio7();