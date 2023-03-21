function deletar(vai){
    console.log(vai)
    let divTarefaExcluir=document.getElementById(`${vai}`)
    
    divTarefaExcluir.style.display =  "none";

}

function adicionar(){

let adicionarTarefa = document.querySelector(".tarefas")
///DIV saida
 let divSaida = document.createElement('div')
 divSaida.classList.add("saida")
 divSaida.id = `tarefa${adicionarTarefa.childElementCount}`
///Check BOX
let inputSaida = document.createElement('input')
inputSaida.classList.add("checkbox")
inputSaida.type = "checkbox"
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

function pegar(event) {
    console.log(event.target.id)
    if(event.target.id == "caixaDeEntrada"){
        return ""
    }else{
        deletar(event.target.id)
    }
    
    
}
document.addEventListener('click', pegar)
