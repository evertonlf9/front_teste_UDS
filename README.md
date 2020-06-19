# Projeto - Front-end teste UDS

Vue version 4.4.4

Author:
Everton Ferreira

## Conteúdo
- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Tecnologias](#tecnologias)
- [Demonstração](#demonstracao)
- [Informações Iniciais](#informações-iniciais)
  - [Clonando o Repositório](#clonando-o-repositório)
  - [Instalando as Dependências](#instalando-as-dependências)
- [Servidor de Desenvolvimento](#servidor-de-desenvolvimento)
- [Servidor de Produção](#servidor-de-Produção)

## Visão Geral do Projeto
Teste de front-end

### Tecnologias
- HTML5

- CSS
  - [SCSS](https://sass-lang.com/)
  
- JavaScript
  - Typescript
  - VUE 
  - [Ant Design](https://ant.design/) 

### Demonstração
 - [Demo]()

## Informações Iniciais
Para realizar as passos a seguir, será necessário que tenha instalado em seu computador o **git** e o **node.js**. Abaixo seguem os sites para realizar o download e efetuar a instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js - Windows/Mac](https://nodejs.org/en/download/)
- [Node.js - Linux](https://nodejs.org/en/download/package-manager/)

### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código.
**clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:
git clone <url-do-repositorio>

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
yarn install

## Servidor de Desenvolvimento

Execute no **Prompt de Comando** (caso você esteja no linux, basta utilizar o terminal) `yarn serve` para rodar o projeto em um servidor dev. Navegue para `http://localhost:8080/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Servidor de Produção

Execute no **Prompt de Comando** (caso você esteja no linux, basta utilizar o terminal) `yarn build` para criar o projeto. Os arquivos de construção serão armazenados no diretório `build`

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```
