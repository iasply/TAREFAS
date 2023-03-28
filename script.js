function deletar(vai){
    let divTarefaExcluir=document.getElementById(`${vai}`)
    divTarefaExcluir == null ? "":divTarefaExcluir.remove()
    
}

function adicionar(){
if(caixaDeEntrada.value==""){
    window.alert("digite algo")
}else{
    let adicionarTarefa = document.querySelector(".tarefas")
///DIV saida
 let divSaida = document.createElement('div')
 divSaida.classList.add("saida")
 divSaida.id = `tarefa${adicionarTarefa.childElementCount}`
///Check BOX
let inputSaida = document.createElement('input')
inputSaida.classList.add("checkbox")
inputSaida.type = "checkbox"
inputSaida.onclick = function (){
    if(inputSaida.checked){
        pSaida.style.textDecoration = "line-through"
    }else{
        pSaida.style.textDecoration = "none"
    }
}
divSaida.appendChild(inputSaida)
///P saida
let pSaida = document.createElement('p')
pSaida.classList.add("textoSaida")
pSaida.innerText = `${document.querySelector("#caixaDeEntrada").value}`
divSaida.appendChild(pSaida)
///Button Deletar
let buttonDeletar = document.createElement('button')
buttonDeletar.classList.add("deletar")
buttonDeletar.innerText ="Deletar"
buttonDeletar.id =(`tarefa${adicionarTarefa.childElementCount}`)
   
divSaida.appendChild(buttonDeletar)


///

adicionarTarefa.append(divSaida)
document.querySelector("#caixaDeEntrada").value = ""
}



}

function pegar(event) {
    if(event.target.id == "caixaDeEntrada"){
        return ""
    }else{
        deletar(event.target.id)
    }
    
}

document.addEventListener('click', pegar)