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

export default BotaoExcluir