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
    console.log(`acoesDoTeclado`)
    const { target } = e
    const { className, id } = target
    const isNumber = className === `number`

    if (id === `igual`) {
        realizarResultado($resultado)

    } else if (isNumber) {
        console.log(`is number`)
        $resultado.innerHTML += target.innerText
    } else if (sinalVerde) {
        console.log(`acoes`)
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

// const touchStartInWindow = 'ontouchstart' in window
// const myTap = touchStartInWindow ? 'touchstart' : 'clickdown'


$teclados.addEventListener('click', acoesDoTeclado)

$teclados.addEventListener("touchstart", event => {
    console.log("touchstart", event)
})

$apagar.addEventListener("click", event => $resultado.innerText = ``)




