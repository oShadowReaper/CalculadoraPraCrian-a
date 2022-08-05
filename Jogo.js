document.getElementById('numeroX').innerHTML = Math.round(Math.random()*9)
document.getElementById('numeroY').innerHTML = Math.round(Math.random()*(9-parseInt(document.getElementById('numeroX').innerHTML)))
let x = parseInt(document.getElementById('numeroX').innerHTML)
let y = parseInt(document.getElementById('numeroY').innerHTML)

document.onkeyup = function (evento){
    let tecla = Number(evento.key)
    // document.getElementById('divNumero').innerHTML = tecla
    document.getElementById('resultado').value = tecla

    let resultado = parseInt(document.getElementById('resultado').value)

if((x + y) == resultado){
    window.location.href = './telaDeParabens.html'
    } else {
    window.location.href = './telaDeErro.html'
    }
}