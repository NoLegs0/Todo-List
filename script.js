// 1. SELEÇÃO DE ELEMENTOS (DOM)

    const tarefaNova = document.querySelector("#inputTarefas");
    const botãoAdd = document.querySelector("#btnAdicionar");
    const botãoRem = document.querySelector("#btnRemover");
    const tarefaAtual = document.querySelector("#listaTarefas")

// 2. RECUPERAÇÃO E CARREGAMENTO DE DADOS (localStorage)

     let itensAtuais = []
     let itensRecuperados =   (localStorage.getItem('itensSalvos'));
    
    if (itensRecuperados !== null) {
        
        itensAtuais = JSON.parse(itensRecuperados)
        
        for (let i = 0; i < itensAtuais.length; i++) {
        const textoTarefa = itensAtuais[i]
        
        const novoItem = document.createElement('li')
        novoItem.textContent = textoTarefa
        tarefaAtual.appendChild(novoItem) }
    };

// 3. FUNÇÃO DE ADICIONAR TAREFA
    
    function addTarefa() {
        
        if (tarefaNova.value.trim() === "") { return; }
        itensAtuais.push(tarefaNova.value)
        
        const novoItem = document.createElement('li');
        novoItem.textContent = tarefaNova.value;
        tarefaAtual.appendChild(novoItem)
        
        localStorage.setItem('itensSalvos', JSON.stringify(itensAtuais))
        tarefaNova.value = ""
    };
    
    function remTarefa() {
        
        const itensConcluidos = tarefaAtual.querySelectorAll("li.concluida")
        itensConcluidos.forEach(function(item) {
            item.remove();

          itensAtuais = []
          const itensRestantes = tarefaAtual.querySelectorAll("li")
          itensRestantes.forEach(function(item) {
          itensAtuais.push(item.textContent) });

          localStorage.setItem('itensSalvos', JSON.stringify(itensAtuais))
        })};

// 4. EVENTOS (Event Listeners e Delegação)

    btnAdicionar.addEventListener('click', function(){
        
        addTarefa ();
    })
    
    btnRemover.addEventListener('click', function(){
        
        remTarefa ();
    })
    
    btnAjuda.addEventListener('click', function(){
        
        alert(`1.Digite sua tarefa \n2.Clique em Adicionar \n3.Clique na tarefa para riscar as concluídas \n4.Use o botão Remover para limpá-las`)
    })
    
    tarefaAtual.addEventListener('click', function(event){
        
        if (event.target.tagName === 'LI')
        event.target.classList.toggle('concluida')
    })