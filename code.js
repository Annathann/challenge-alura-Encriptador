const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const resultado = document.querySelector('#resultado');
const btnCopiar = document.querySelector('#btnCopiar');
const validar = document.querySelector('#validar');

(() => {

    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    resultado.addEventListener('click', copiarTexto);

})()

function encriptarTexto() {
    let texto = document.querySelector("#texto").value;
    let textoEncriptado = texto.replace(/e/img, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/mg, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/mg, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/mg, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/mg, 'ufat');
    mostrarHTML(textoEncriptado)
    document.querySelector("#texto").value = '';
}

function mostrarHTML(textoEncriptado) {
        resultado.innerHTML = `
        <textarea class="mensaje">${textoEncriptado}</textarea>
        <button class="btn-copiar">Copiar</button>
        `
}
function copiarTexto() {
   //let textoEncriptado = resultado.value;
   //navigator.clipboard.writeText(textoEncriptado);
    const textoEncriptado = document.querySelector('#resultado textarea');
    textoEncriptado.select();
    document.execCommand('copy');
}


function desencriptarTexto() {
    let texto = document.querySelector("#texto").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/mg, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/mg, 'i');
    textoEncriptado = textoEncriptado.replace(/ai/mg, 'a');
    textoEncriptado = textoEncriptado.replace(/ober/mg, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/mg, 'u');
    mostrarHTML(textoEncriptado)
    document.querySelector("#texto").value = '';
}

