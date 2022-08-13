import * as actions from "./actions.js"


const $resultado = document.querySelector('.resultado')

const $teclados = document.querySelector('.teclados')
const $apagar = document.querySelector('.apagar')

let sinalVerde = true

const simbolos = {
    dividir: "/",
    igual: "=",
    multiplicar: "x",
    separador: ".",
    somar: "+",
    subtrair: "-",
}

const acoesDoTeclado = function (e) {
    const { target } = e
    const { className, id } = target
    const isNumber = className === `number`

    if (id === `igual`) {
        realizarResultado($resultado)

    } else if (isNumber) {
        $resultado.innerHTML += target.innerText
    } else if (sinalVerde) {
        $resultado.innerHTML += target.innerText
        sinalVerde = false
    }
}
const realizarResultado = resultado => {
    const simb = Object.entries(simbolos)
    const { innerText } = resultado

    const [qualFunc] = simb.filter(([name, simbol]) => {
        return innerText.indexOf(simbol) > -1
    })

    const [name, simbol] = qualFunc


    const action = actions[name]
    const letterArr = innerText.split("")
    const [primeiraParte, segundaParte] = innerText.split(simbol)

    sinalVerde = true
    $resultado.innerText = action(primeiraParte, segundaParte)
}

const touchStartInWindow = ontouchstart in window
const myTap = touchStartInWindow ? 'touchstart' : 'click'
alert(`${touchStartInWindow ? 'Suporta' : 'Não suporta'} touch started`)


$teclados.addEventListener(myTap, acoesDoTeclado)

$apagar.addEventListener("click", event => $resultado.innerText = ``)




