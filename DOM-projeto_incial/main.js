import BotaoConclui from "./componentes/concluirTarefa.js"
import BotaoExcluir from "./componentes/excluirTarefa.js"

    const criarTarefa = (evento) => {
        evento.preventDefault()

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoExcluir())
        lista.appendChild(tarefa)
        input.value = " "
    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)

    //aplicando método de módulos no js também garante proteção aos componentes importantes do js