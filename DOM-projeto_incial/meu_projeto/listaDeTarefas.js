//Utilizando a “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.

(() => {
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

    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button')

        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'concluir'
        botaoConclui.addEventListener('click', concluirTarefa)
        return botaoConclui
    }

    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target

        const tarefaCompleta = botaoConclui.parentElement
        tarefaCompleta.classList.toggle('done')
    }

    const BotaoExcluir = ()=>{
        const botaoExcluir= document.createElement('button')

        botaoExcluir.innerText = 'deletar'
        botaoExcluir.classList.add('delete-button')
        botaoExcluir.addEventListener('click', deletartarefa)

        return botaoExcluir
    }

    const deletartarefa = (evento)=>{
        const botaoExcluir = evento.target

        const tarefaExcluida = botaoExcluir.parentElement
        tarefaExcluida.remove()

        return botaoExcluir
    }
})()