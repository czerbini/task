const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function listarTarefas() {
    listElement.innerHTML = ''
    for (item of tarefas) {
        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)

        itemList.setAttribute('class', 'mdl-list__item')

        const linkElement = document.createElement('a')
        linkElement.setAttribute('class', 'material-icons')

        const linkText = document.createTextNode('delete')
        linkElement.appendChild(linkText)

        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `deletarTarefas(${pos})`)

        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)

        listElement.appendChild(itemList)
    }
    
}

listarTarefas()

function addTarefas() {
    const tarefa = inputElement.value
    tarefas.push(tarefa)
    inputElement.value = ''
    listarTarefas()
    salvarLocalStorage()
}

buttonElement.setAttribute('onclick', 'addTarefas()')

function deletarTarefas(pos) {
    tarefas.splice(pos, 1)
    listarTarefas()
    salvarLocalStorage()
}

function salvarLocalStorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}
 