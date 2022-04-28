let textArea = document.getElementById('textArea'); 
let contentPhrase = document.getElementById('contentPhrase');
let encryptBtn = document.getElementById('encryptBtn');
let decryptBtn = document.getElementById('decryptBtn');
let copyBtn = document.getElementById('copyBtn');


let contentPhraseGlobal = '';

function encrypt(frase) {
    frase = frase.replaceAll('e', 'enter');
    frase = frase.replaceAll('i', 'imes');
    frase = frase.replaceAll('a', 'ai');
    frase = frase.replaceAll('o', 'ober');
    frase = frase.replaceAll('u', 'ufat');
    return frase;
}

function decrypt(frase) {
    frase = frase.replaceAll('enter', 'e');
    frase = frase.replaceAll('imes', 'i');
    frase = frase.replaceAll('ai', 'a');
    frase = frase.replaceAll('ober', 'o');
    frase = frase.replaceAll('ufat', 'u');
    return frase;
}

encryptBtn.addEventListener('click', () => {
    let frase = textArea.value;
    let fraseCriptografada = encrypt(frase);
    //console.log(fraseCriptografada);
    contentPhrase.innerText = fraseCriptografada;
    contentPhraseGlobal = fraseCriptografada;
    frase = '';
    var copia = document.getElementById("ddkk");
    copia.innerHTML = " ";

    
});
decryptBtn.addEventListener('click', () => {
    let frase = textArea.value;
    let fraseDescriptografada = decrypt(frase);
    //console.log(fraseDescriptografada);
    contentPhrase.innerText = fraseDescriptografada;
    contentPhraseGlobal = fraseCriptografada;
    frase = '';
});
function myFunction() {
    var copyText = document.getElementById("contentPhrase");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("ddkk");
    tooltip.innerHTML = "Copiado Texto " ;
  }
  
  /*function outFunc() {
    var copia = document.getElementById("ddkk");
    copia.innerHTML = "Copia pra area";
    
  }*/
 /* encryptBtn.addEventListener('click', () => {
    let frase = document.getElementById("dd");
    frase.innerHTML = "Copiado texto";
  
});*/


  encryptBtn.addEventListener('click', () => {
    let frase = document.getElementById("dd");
    frase.innerHTML = "Texto criptografado";
  
});
decryptBtn.addEventListener('click', () => {
    let frase = document.getElementById("dd");
    frase.innerHTML = "Texto Descriptografado";
});





/*copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(contentPhraseGlobal);
    alert('Copiado');
    
});*/