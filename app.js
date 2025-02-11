let amigosObj = new Object();
let amigosArray = Object.values(amigosObj);

function addAmigo() {
    let amigo = document.querySelector('input').value.trim();
    
    if (amigo != '') {
        if (amigosArray.includes(amigo)){
            mudarTexto('resultado', "Nome já está na lista. Seja mais especifíco para não ter confusões!");
            mudarCor('resultado','#df0529');
        } else {
            amigosObj[document.querySelector('input').value.trim()] = amigo;
            //amigos.push(amigo);
            mudarTexto('resultado','');
            console.log(amigosObj)
        }
    } else {
        mudarTexto('resultado', "Por favor, insira um nome.");
        mudarCor('resultado','#df0529');
    }
    limparNome();
    mostrarAmigos();
    
}
amigo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addAmigo();
    }
});

function removeAmigo(botao) {
    let amigoId = botao.value;  
    delete amigosObj[amigoId];
    console.log(amigoId);
    mostrarAmigos();
}


function limparNome() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    
    let nomes = '';
    amigosArray = Object.values(amigosObj);
    console.log(amigosArray);
    for (let i = 0; i< amigosArray.length; i++) {
        nomes += `<li><strong>` + amigosArray[i] + `</strong> <button id="remove" class="button-remove" value=${amigosArray[i]} onclick="removeAmigo(this)">x</button></li>`;
        removeBtns = document.querySelectorAll('.button-remove');
    }
    listaAmigos.innerHTML = nomes;
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor((Math.random()*amigos.length));
        mudarTexto('resultado',`Seu amigo secreto é ${amigos[indice]}`)
        mudarCor('resultado','#05DF05');
    } else {
        mudarCor('resultado','#df0529');
        mudarTexto('resultado', 'A lista está vazia! Você não tem amigos?');
    }

}

function mudarTexto(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function mudarCor(id,cor) {
    let novaCor = document.getElementById(id);
        novaCor.style.color = cor;
}