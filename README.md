# Jogos Favoritos - CRUD com Login

## Sobre o Projeto

Este projeto consiste em uma aplicação web desenvolvida com HTML, CSS e JavaScript puro. O tema escolhido foi **Jogos Favoritos**, onde o usuário pode realizar login e gerenciar uma lista de jogos através das operações de CRUD (Create, Read, Update e Delete).

O projeto foi desenvolvido como atividade acadêmica com o objetivo de praticar conceitos básicos de desenvolvimento web e utilização de Inteligência Artificial como apoio na geração de código.

---

## Funcionalidades

### Login

* Autenticação de usuário.
* Validação de campos vazios.
* Exibição de mensagens de erro na tela.

**Credenciais de acesso:**

* Usuário: `aluno`
* Senha: `fiap2025`

### CRUD de Jogos

Após realizar o login, o usuário pode:

* Visualizar a lista de jogos.
* Adicionar jogos ao final da lista.
* Adicionar jogos ao início da lista.
* Editar qualquer jogo individualmente.
* Remover qualquer jogo individualmente.

---

## Validações Implementadas

* Os campos de login não podem ficar vazios.
* Apenas as credenciais corretas permitem acesso ao sistema.
* Não é possível adicionar jogos com o campo vazio.
* Ao editar um item, caso o usuário cancele a operação ou deixe o campo vazio, o valor original é mantido.
* A remoção dos itens é feita pelo índice da lista, evitando problemas com itens de mesmo nome.

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)

Nenhum framework ou biblioteca externa foi utilizado.

---

## Estrutura do Projeto

```text
/
├── index.html
├── style.css
├── js.script
├── README.md
└── prompts.md
```

---

## Estrutura dos Dados

Os dados são armazenados em um array simples de strings:

```javascript
let jogos = [
    "Minecraft",
    "Valorant",
    "League of Legends"
];
```

---

## Inteligência Artificial Utilizada

Foram comparadas respostas geradas por diferentes IAs:

* ChatGPT
* Gemini
* Claude Code

Após a análise das respostas, a solução do Claude Code foi escolhida como referência principal por apresentar melhor organização, interface mais agradável e utilização adequada dos conceitos básicos de JavaScript exigidos pela atividade.

---

## Como Executar

1. Baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Faça login utilizando as credenciais fornecidas.
4. Utilize as funcionalidades de cadastro, edição e remoção de jogos.

---

## Autor

Rafael Yuta Nischida
