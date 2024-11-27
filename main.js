const form = document.getElementById('form-materias');

let linhas = '';
const listaAtividades = [];
const listaNotas = [];

const emojiAprovado = '<img src="images/aprovado.png" alt="emoji festa">';
const emojiReprovado = '<img src="images/reprovado.png" alt="emoji triste">';

const resultadoFinalAprovado = '<span class="resultado aprovado">Aprovado</span>'
const resultadoFinalReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMedia = 7

let reprovado = false

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaMateria();
    adicionaLinha();
    atualizaNotas();
});

function adicionaMateria() {
    const atividade = document.getElementById('materia');
    let nota = parseFloat(document.getElementById('nota').value);

    listaAtividades.push(atividade.value);
    listaNotas.push(nota);

    if (nota < notaMedia) reprovado = true;

    let linha = '<tr>'
    linha += `<td>${materia.value}</td>` 
    linha += `<td>${nota}</td>`
    linha += `<td>${nota >= notaMedia ? emojiAprovado : emojiReprovado}<td>`
    linha += '</tr>';
    
    linhas += linha
};

function adicionaLinha() {
    const corpoTabela = document.querySelector('tbody').innerHTML = linhas;
};

function atualizaNotas() {
    const mediaFinal = somaNotas();
    document.getElementById('notaMedia').innerHTML = mediaFinal
    document.getElementById('resultadoFinal').innerHTML = reprovado ? resultadoFinalReprovado : resultadoFinalAprovado
}

function somaNotas() {
    let totalNotas = 0;
    for (i in listaNotas) {
        totalNotas += listaNotas[i]
    }
    return totalNotas / listaAtividades.length
}