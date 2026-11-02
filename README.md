# Todo-List
# 📝 Lista de Tarefas (To-Do List)

Um aplicativo simples e funcional de **Lista de Tarefas** desenvolvido com JavaScript puro (Vanilla JS), HTML5 e CSS3. O projeto tem como objetivo exercitar conceitos fundamentais do desenvolvimento web, como manipulação do DOM, gestão de eventos e persistência de dados utilizando a API do `localStorage`.

## 🚀 Funcionalidades

* ➕ **Adicionar tarefas:** Digite o nome da tarefa e adicione-a à lista.
* ✔️ **Marcar como concluída:** Clique sobre qualquer tarefa para alternar o status de concluída.
* 🗑️ **Remover concluídas:** Limpe rapidamente todas as tarefas marcadas como concluídas da tela.
* 💾 **Persistência de dados:** As tarefas permanecem salvas mesmo após atualizar ou fechar o navegador.
* ℹ️ **Ajuda rápida:** Instruções de uso acessíveis diretamente pela interface.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica da aplicação.
* **CSS3:** Estilização responsiva utilizando **Flexbox** para o layout dos controles e lista.
* **JavaScript (ES6+):**
  * Manipulação direta do **DOM** (`createElement`, `appendChild`, `querySelector`, `classList.toggle`).
  * Uso de **Estruturas de Repetição (`for`)** para recriação dinâmica da lista.
  * Conversão de dados com `JSON.stringify()` e `JSON.parse()`.
  * Persistência com a API **`localStorage`**.
  * Delegação de eventos (`Event Listeners`).

## ⚙️ Como Funciona a Lógica

1. **Adição de Dados:** Ao adicionar uma tarefa, o valor do campo de texto é inserido em um array local (`push`). Em seguida, esse array é convertido em string e salvo no `localStorage`.
2. **Carregamento Inicial:** Ao abrir ou recarregar a página, a aplicação busca o conteúdo salvo no `localStorage`, converte de volta para array e utiliza um laço `for` para recriar dinamicamente os elementos `<li>` na tela.
3. **Persistência:** A sincronização entre o array de tarefas na memória e o armazenamento local garante que o estado da aplicação seja mantido em tempo real.

## [🌐 Acesse o Site por Este Link](https://nolegs0.github.io/Todo-List/)