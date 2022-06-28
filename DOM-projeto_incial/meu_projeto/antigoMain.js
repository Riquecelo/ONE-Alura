/*import BotaoConclui from "./componentes/concluirTarefa.js"
import BotaoExcluir from "./componentes/excluirTarefa.js"*/


let tarefas = []

const handleNovoItem = (evento)=>{
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')

    const dados = {
        valor,
        dataFormatada
    }

    const criarTarefa = Tarefa(dados)

    lista.appendChild(criarTarefa)

    tarefas.push(dados)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    input.value = " "

}

const Tarefa = ({valor, dataFormatada}) => {
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoExcluir())
    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)



//aplicando método de módulos no js também garante proteção aos componentes importantes do js