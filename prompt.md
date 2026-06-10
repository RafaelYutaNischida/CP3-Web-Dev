## IAs utilizadas
* Chat GPT
* Gemini
* Claude Code



## Prompt Principal
Atue como um Web Development. Crie uma aplicação web com um tema sobre jogos favoritos que simula um sistema simples de cadastro de itens. A aplicação deve ter uma tela de login e, após autenticação, exibir a lista com as operações de CRUD.

A tela de Login deve conter as credenciais corretas:
Usuário: aluno
Senha: fiap2025

Se as credenciais estiverem corretas, a tela de login deve redirecionar para a página da lista. Se estiverem erradas, uma mensagem de erro deve aparecer na tela, não apenas no console.

Após o login, o usuário pode:
* Adicionar um item ao final da lista
* Adicionar um item ao início da lista
* Ver todos os itens exibidos dinamicamente na tela
* Editar qualquer item individualmente
* Remover qualquer item individualmente

Toda vez que a lista muda, a tela deve ser atualizada automaticamente para refletir o estado atual dos dados.

A lista deve conter pelo menos 3 itens iniciais, que serão exibidos ao carregar a primeira vez a página.

A aplicação deve ser desenvolvida com HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas.

Os dados devem ser armazenados em um array de strings, sem uso de objetos dentro do array.

A lógica deve ser organizada em funções nomeadas, sem código solto fora de funções, exceto a declaração de variáveis e a chamada inicial de renderização.

Tente ao máximo usar os básicos de JavaScript puro, evitando comandos muito complexos.

Os campos de login não podem ser enviados vazios.

Nenhum item pode ser salvo com o campo vazio, e a mensagem de erro deve aparecer na tela.

Ao editar um item, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração.

A remoção de um item deve considerar sua posição na lista, não o seu valor, para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo.

Me entregue nesse formato, cada um separado:
* index.html
* style.css
* script.js

Não optei por utilizar mais de um prompt, e nem por refinar o prompt



## Comentário curto sobre os principais problemas encontrados em cada resposta
ChatGPT:
A principal limitação encontrada foi a interface visual, que apresentou um design muito simples e com poucos elementos de estilização. Apesar de atender aos requisitos funcionais do projeto, a experiência visual poderia ser mais elaborada para tornar a aplicação mais atrativa ao usuário.

Gemini:
A interface visual apresentou uma qualidade superior à do ChatGPT, resultando em uma aparência mais agradável. Entretanto, foram utilizados recursos e estruturas de JavaScript mais avançados do que os conteúdos trabalhados em aula, o que dificultaria a compreensão e manutenção do código por parte dos alunos.

Claude Code:
Foi a resposta que apresentou o melhor equilíbrio entre funcionalidade, organização e design. O código seguiu a proposta de utilizar conceitos básicos de JavaScript, conforme solicitado no enunciado, além de oferecer uma interface visual bem estruturada e agradável. Não foram identificados problemas relevantes durante a análise da solução.



## Justificativa da IA escolhida como base
Eu escolhi a solução gerada pelo Claude Code porque foi a que apresentou o melhor resultado geral. Além de atender todos os requisitos do projeto, ela trouxe alguns detalhes extras na interface que melhoraram a experiência do usuário e deixaram a aplicação mais agradável visualmente.

Outro ponto que me chamou atenção foi que o JavaScript utilizado continuou simples e dentro do que foi trabalhado em aula, facilitando o entendimento do código.

Apesar disso, a solução do ChatGPT também foi uma boa opção. Ela era mais simples e mais fácil de reproduzir manualmente por alguém que está aprendendo desenvolvimento web. Porém, considerando a qualidade visual e os recursos adicionais apresentados, optei por utilizar a solução do Claude Code como base para o projeto.