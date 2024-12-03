// # Requisitos para o curso
//   - HTML & CSS
//   - JavaScript (ES6+)
//     - Estrutura de Dados, funções, objetos
//     - Destruturing, arrow functions
//     - Promises & Async/Await

// ## 1) O que é o React?
// O React é uma biblioteca usada para criar interfaces de usuário interativas.

// ## 2) Por que aprender React?
// - Desenvolvida pelo Facebook (Meta)
// - Aprenda uma vez, use em qualquer lugar
//    - iOS & Android (React Native) & Desktop (Electron)
// - É a tecnologia mais demandada pelo mercado autalmente (e isso já há vários anos)
// - É praticamente o padrão da indústria quando o assunto é criação de aplicações web
//    - Sai muito na frente de seus concorrentes (Vue e Angular)
// - É utilizado por empresas multibilionárias: Facebook, Instagram, Netflix, Airbnb, LinkedIn, Spotify.

// ## 3) Componentes
// - No React, dividimos a aplicação em pequenos componentes
// - Vários componentes, quando combinados, formam grandes estruturas
// - Pense neles como se fossem peças de LEGO
// - Usamos JSX para escrevê-los
// *JSX -> html misturado com js

// node -> ferramenta que permite que você execute código js fora do navegador e precisamos dele para criar projetos react.
// npm -> ao instalar o node ganhamos o npm -> é um gerenciador de biblioteca para o node -> biblioteca -> basicamente uma extensão que você consegue usar no projeto (para solucionar problemas)

// ## 4) Estrutura de Pastas
// package.json -> é um arquivo de configuração padrão em qualquer projeto node
// index.html -> é o html que é de fato exibido quando acessamos a aplicação

// O react gera um tipo de aplicação que chamamos de SPA (Single Page Application)
// É uma aplicação que contém apenas o html sem conteúdo, e o contepudo é inserido por meio de JavaScript (React)
// O html de uma aplicação convencional, SPA (Single Page Application), é vazio. O React insere o conteúdo por meio de JS. 


// ## 5) Vantagens de SPAs
// - Velocidade: navegação entre páginas é muito mais rápido, pois não exige chamadas para um servidor 
// - Experiência do usuário: SPAs são altamente interativas e performáticas

// ## 6) src 
// src/assets/main.jsx 
// import → Quando estamos num projeto react, consequentemente num projeto node, você consegue instalar as bibliotecas no npm, consegue utilizá-las dentro do seu projeto usando o import. Então você importa algo de alguma biblioteca para usar esse algo no seu código.

//  Também conseguimos importar arquivos → import App from './App.jsx'
// createRoot → Chamamos o createRoot passando um document.getElementById('root'), e a gente renderiza isso aqui nele: render(<StrictMode> <App /> </StrictMode>);
// A gente faz a inserção no nosso html por meio do js nessas linhas de código. Estou dizendo pro react:
    // 1 - createRoot: criar a aplicação react
    // 2 - Renderizar a aplicação react dentro da div com id root qie está no index.html → Estamos renderizando o <App /> que é um componente, uma função js.
    // O conteúdo que acontece numa SPA ocorre por meio dessas linhas de código.

    // PAREI EM 24MIN1
