let amigos = [];
function addAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo != '') {
        if (amigos.includes(amigo)){
            mudarTexto('resultado', "Nome já está na lista. Seja mais especifíco para não ter confusões!");
            mudarCor('resultado','#df0529');
        } else {
            amigos.push(amigo);
            mudarTexto('resultado','');
        }
    } else {
        mudarTexto('resultado', "Por favor, insira um nome.");
        mudarCor('resultado','#df0529');
    }
    limparNome();
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
    for (let i = 0; i< amigos.length; i++) {
        nomes += "<li><strong>" + amigos[i] + '</strong></li>';
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
console.log('abc')