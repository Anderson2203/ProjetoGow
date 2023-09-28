let nome = document.querySelector("#nome")

const campoJs = document.querySelector("#js")
const LinhaInteragivel = document.querySelector(".LinhaInteragivel")


document.querySelector("#avaliacao").addEventListener("input", function () {
    const LinhaInteragivelValor = document.querySelector("#avaliacao").value
    const labelPrazo = document.querySelector("label[for='avaliacao']")
    labelPrazo.innerHTML = `Avaliação: ${LinhaInteragivelValor}`
})

