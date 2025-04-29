const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks');
let minhaListaDeItens = [];



function adicionarNovaTarefa() {
   minhaListaDeItens.push({
         tarefa: input.value,
         concluida: false
   });
   input.value = '';
   mostrarTarefas();
}

function mostrarTarefas() {

    let novaLista = '';
     minhaListaDeItens.forEach((item, posicao)=> {
        novaLista = novaLista + `
        <li class="task ${item.concluida && "done"}">
            <img src="./img/check.svg" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.svg" alt="lixeira" onclick="deletarTarefa(${posicao})">
        </li>
        `;
     })
    listaCompleta.innerHTML = novaLista;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens));

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
    mostrarTarefas();
}

function deletarTarefa(posicao) {
    minhaListaDeItens.splice(posicao, 1);
    mostrarTarefas();
                                      
}

function recarregartarefas() {
    const tarefasDoLocalStorege = localStorage.getItem('lista');
    if (tarefasDoLocalStorege) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorege);
    }
    mostrarTarefas();
}
recarregartarefas();
button.addEventListener('click', adicionarNovaTarefa);