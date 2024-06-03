Handlebars.registerHelper("increaseIndex", function (inValue) {
    return ++inValue
})

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/red", true);

function popuniPokemone() {
    const data = JSON.parse(xhr.response);
    const source = document.getElementById("pokemon-lista").innerHTML;
    const template = Handlebars.compile(source);
    const context = { pokemon: data.pokemon_species.slice(0, 20) };
    const html = template(context);

    document.getElementById("pokemon-output").innerHTML = html;
}

function afterRender() {
    $('table th').css('color, darkBlue');
    // drugi način dodavanja stila 
    // $("table th".addClass('headerStyle'));

    // u tablici svaki drugi redak obojati drugom bojom
    $("table tr:nth-child(even)").addClass("zebra");
    //obrisati sve koji počinju slovom "p"
    setTimeout(function () {
        const aTag = $("table td a:contains('p')").filter(function () {
            return this.innerHTML.indexOf("p") == 0;
        });
        //remove closest "tr" element
        aTag.closest("tr").remove();
    }, 2000);

    $("table tr:nth-child(even)").removeClass("zebra");

    $("table tr:nth-child(even)").addClass("zebra");

}




xhr.onload = function () {
    //napravi tablicu  pokemona

    popuniPokemone();
    //altiviraj popover

    $('[data-bs-toggle="popover"]').popover();
    // zebra uzorak

    afterRender();

};

xhr.send();