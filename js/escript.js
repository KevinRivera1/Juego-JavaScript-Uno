let iconos = [];
let selecciones = [];

generarTablero();
/* Me permite colocar en una array las imagenes a utilizar */
function cargarIconos() {
    iconos = [
        '<img src="https://img.icons8.com/emoji/48/000000/-emoji-jack-o-lantern.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/nesting-dolls.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/piata.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/performing-arts.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/teddy-bear-.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/baby-chick--v2.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/cat-face--v1.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/dog-emoji.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/dragon-face.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/microbe.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/hibiscus.png"/>',

        '<img src="https://img.icons8.com/emoji/48/000000/pig-face-emoji.png"/>',
    ]
}

/* *****Me ayuda a generar las tarjetas restantes ****** */
function generarTablero() {
    cargarIconos();
    selecciones = [];
    let tablero = document.getElementById("tablero");
    let tarjetas = [];
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>        
                `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)  /* Me permite que las tarjetas se desordenen de forma aletoria */
    tablero.innerHTML = tarjetas.join(" ")
}


function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        } else {
            trasera1.style.background = "red"
            trasera2.style.background = "red"
        }
    }, 1000);
}
