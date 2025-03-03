const form = document.getElementById('fale-conosco')
const botao = document.getElementById('btn')
const mascara = document.querySelector('#mascara-formulario')
const mascaraHeader = document.querySelector('#mascaraHeader')
const formHeader = document.querySelector('#fale-conosco-header')


function preLoadImage(url) {
    let img = new Image
    img.src = url
}


function clickButton() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "0.4s ease-in"

}

function clickButtonHeader() {
    formHeader.style.left = "50%"
    formHeader.style.transform = "translateX(-50%)"
    mascaraHeader.style.visibility = "visible"
    formHeader.style.transition = "0.4s ease-in"


}

function desligarMascara() {
    form.style.left = '-340px'
    mascara.style.visibility = "hidden"
    form.style.transform = 'translateX(0%)'
    mascara.style.transition = '0.4s ease-in'
}

function desligarMascaraHeader() {
    formHeader.style.left = '-340px'
    mascaraHeader.style.visibility = "hidden"
    formHeader.style.transform = 'translateX(0%)'
    mascaraHeader.style.transition = '0.4s ease-in'
}

window.onload = function () {
    verificarTamanhoJanela();
};
// Verifica o tamanho da janela quando ela é redimensionada
window.onresize = function () {
    verificarTamanhoJanela();
};

function verificarTamanhoJanela() {


    let larguraJanela = window.innerWidth
    const body = document.body
    if (larguraJanela < 1100) {

        // body.style.backgroundImage = "url('img/mobile-banner.jpg')"
        // body.style.backgroundColor = 'black'
        // body.style.backgroundSize = 'cover'
        // body.style.backgroundAttachment = 'fixed'
        // body.style.backgroundRepeat = 'norepeat'


    } else {

    }
}

function handlePhone(event) {

    let input = event.target
    input.value = formatarCelular(input.value)

}

function formatarCelular(value) {

    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value



}

function enviarForm() {


    const number = "5524993255064"
    const msg = "Olá, aqui abaixo estão as informações do seu agendamento, aguarde e você receberá o retorno aqui sobre seu pedido agendado."
    const name = document.querySelector('#name').value
    const tel = document.querySelector('#tel').value
    const order = document.querySelector('#order').value
    const price = document.querySelector('#price').value
    let day = document.querySelector('select').value

    const url = "https://wa.me/" + number + "?text="
        + "Clínica Kézia Simões: " + msg + "%0a%0a"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + tel + "." + "%0a"
        + "Pedido: " + order + "." + "%0a"
        + "Valor: " + price + "." + "%0a"
        + "Dia: " + day + "." + "%0a"

    window.open(url, '_blank').focus()

}

function contactHeader() {

    const number = "5524993255064"
    const name = document.querySelector('#nameContact').value
    const tel = document.querySelector('#telContact').value
    const msg = document.querySelector('textarea').value


    const url = "https://wa.me/" + number + "?text="
        + "Nome: " + name + "." + "%0a"
        + "Número: " + tel + "." + "%0a"
        + "Dúvida: " + msg + "." + "%0a%0a"

    window.open(url, '_blank').focus()

}



const imgForm = document.querySelector('#orderForm')

function mudarImg1() {
    clickButton()
    imgForm.src = 'img/sombracelha.jpg'
    order.value = "Micropigmentação"
    price.value = "R$ 249,99"
}

function mudarImg2() {
    clickButton()
    imgForm.src = 'img/cilhoes.jpg'
    order.value = "Cílios"
    price.value = "R$ 79,99"
}

function mudarImg3() {
    clickButton()
    imgForm.src = 'img/sombracelha.ss.jpg'
    order.value = "Design"
    price.value = "R$ 39,99"


}

function mudarImg4() {
    clickButton()
    imgForm.src = 'img/pigmentação.jpg'
    order.value = "design + Henna"
    price.value = "R$ 69,99"
}



function mudarImg5() {
    clickButton()
    imgForm.src = 'img/keziapacote.jpg'
    order.value = "design + Henna + Cílios"
    price.value = "R$ 119,99"

}



function mudarImg6() {
    clickButton()
    imgForm.src = 'img/kziaarenna.jpg'
     order.value = "Micropigmentação + Cílios"
     price.value = "R$ 299,99"

}
