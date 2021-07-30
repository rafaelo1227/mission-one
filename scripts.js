
let botao = document.getElementById("botao")
let select = document.getElementById("selectmoedas")





async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( function(resposta){
      return resposta.json() 
    })


    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    
    console.log(dolar)
    console.log(euro)




    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let inputreal = document.getElementById("Input-Real")

    if (select.value === "US$ Dolar") {
        let valoremdolares = inputValorReais / dolar
        inputMoedas.innerHTML = valoremdolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }


    
    inputreal.innerHTML = inputValorReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}

function trocademoeda() {
    let TextoMoedas = document.getElementById("texto-moedas")
    let BandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dolar") {
        TextoMoedas.innerHTML = "Dolar"
        BandeiraMoedas.src = "./img/bandeira USA.png"

    }

    if (select.value === "€ Euro")
        TextoMoedas.innerHTML = "Euro"
    BandeiraMoedas.src = "./img/euro.png"
}

botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocademoeda)



//console.log(valoremdolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
