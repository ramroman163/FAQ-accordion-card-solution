const botones_ver_mas = document.querySelectorAll('.ver-mas');
botones_ver_mas.forEach((boton) => {
    boton.addEventListener("click", () => mostrarTexto(boton));
});

let ultimo_parrafo;

function mostrarTexto(boton){
    const parrafos_mas_info = document.querySelectorAll('.mas-info');

    botones_ver_mas.forEach((boton) => {
        boton.style.fontWeight = "400";
    });

    parrafos_mas_info.forEach((parrafo) => {
        parrafo.style.display = "none";
    })

    let info = boton.nextElementSibling;

    if (info !== ultimo_parrafo) {
        boton.childNodes[1].classList.add("rotar");
        boton.style.fontWeight = "700";
        info.style.display = "block";
        ultimo_parrafo = info;
    } else {
        boton.childNodes[1].classList.remove("rotar");
        boton.style.fontWeight = "400";
        ultimo_parrafo = null;
    }
}