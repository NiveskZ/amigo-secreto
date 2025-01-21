let amigos = [];
function addAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo != '') {
        amigos.push(amigo);
    } else {
        let campo = document.querySelector('h2');
        campo.innerHTML = 'Por favor, insira um nome.';
    }
    limparNome();
    mostrarAmigos();
    
    return console.log(amigos)
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
        let campo = document.getElementById('resultado');
        campo.innerHTML = `Seu amigo secreto é ${amigos[indice]}`;
    } else {
        let campo = document.getElementById('resultado');
        campo.innerHTML = 'A lista está vazia! Você não tem amigos?';
    }

}