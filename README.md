# Instadev React SPA

## Objetivo:
Desenvolver um *SPA (Single Page Application)* mobile-first do **Instagram** em React.

### Referência em Produção:
[https://viniciusvinna.netlify.app/react-instagram](https://viniciusvinna.netlify.app/react-instagram)

## Tópicos:
Praticar os seus conhecimentos em:
* **Fetch API**
* **JS Funcional:**
* **Modularização**
* **Presentational e Container Components**
* **Rails-Style Structure + Module Index**
* **React Hooks** *useState*, *useEffect*
* **React Testing Library**
* **React**

## Requisitos:
Componetizar o projeto seguindo os padrões:
* [*presentational components* e *container components*](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [*Rails-Style Structure + Module Index*](https://webcache.googleusercontent.com/search?q=cache:DZ0HZwEl7AUJ:https://www.learnhowtoprogram.com/fidgetech-4-react/4-4-advanced-topics/4-4-3-3-react-and-redux-design-patterns+&cd=1&hl=en&ct=clnk&gl=br)

Cuidar dos estados dos componentes, das requsições HTTP de cada Rota da aplicação e dos ciclos de vida dos componentes utilizando React Hooks e abordagem funcional.

Os seguintes requisitos também devem ser cumpridos:
> * Ser desenvolvido utilizando abordagem funcional e React Hooks para gerenciamento de ciclo de vida e estados.
> * Consumir os dados da Rest API, usando o [Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) do Javascript.
> * Exibir os **posts** de todos os usuários na rota inicial */*. 
> * Exibir todos os **usuários** cadastrados na rota */users*
> * Exibir o perfil do **usuário** e seus respectivos **posts** na rota */users/{username}*
> * Exibir os **stories** dos **usuários** na rota inicial */*. 
> * Ao clicar no ícone de **story** do **usuário** deverá abrir seu story com o respectivo vídeo e barra de progresso com a opção de fechar e voltar para o feed (rota inicial).
> * Deve permitir cadastrar um usuário na rota */newuser* e exibir uma mensagem de alerta ao enviar.

### Iniciar o projeto:
* **[Node v13.8.0](https://nodejs.org/en/)**
* **[Create React App](https://github.com/facebook/create-react-app)**
* Instalar as dependências: *yarn install* ou *npm install*.
* Iniciar o projeto: *yarn start* ou *npm start* / *npm run start*.

## REST API
### Usuários
| Resource | Method    | Endpoint                                                     | Status Code |    Response     |
|:--------:|:---------:|--------------------------------------------------------------|:-----------:|:---------------:|
| Users    |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users      |     200     | Array of Object |
| User     |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id  |     200     | Object          |
| User     |  POST     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     201     | Created object  |
| User     |  PUT      | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Updated object  |
| User     |  DELETE   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Deleted object  |

> Body (POST / PUT):

    {
        "name": "string",
        "avatar": "string",
        "username": "string",
        "email": "string"
    }


### Stories
| Resource | Method    | Endpoint                                                        | Status Code |    Response     |
|:--------:|:---------:|-----------------------------------------------------------------|:-----------:|:---------------:|
| stories   |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories      |     200     | Array of Object |
| story     |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories/:id  |     200     | Object          |

### Posts
| Resource | Method  | Endpoint                                                               | Status Code | Response        |
|:--------:|:-------:|------------------------------------------------------------------------|-------------|-----------------|
| Posts    |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     200     | Array of Object |
| Post     |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Object          |
| Post     |  POST   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     201     | Created object  |
| Post     |  PUT    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Updated object  |
| Post     |  DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Deleted object  |

> Body (POST / PUT):

    {
        "userId": "string",
        "imageUrl": "string"
    }


### Comentários
| Resource | Method  | Endpoint                                                                               | Status Code | Response        |
|:--------:|:-------:|----------------------------------------------------------------------------------------|-------------|-----------------|
| Comments    |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments     |     200     | Array of Object |
| Comment     |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id |     200     | Object          |
| Comment     |  POST   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments     |     201     | Created object  |
| Comment     |  PUT    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id |     200     | Updated object  |
| Comment     |  DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id |     200     | Deleted object  |

> Body (POST / PUT):

    {
        "postId": "string",
        "comment": "string",
        "avatar": "string",
        "name": "string"
    }

### Query Params
> Adicione os seguintes **queries** às requisições *GET*:
> #### Paginação
> *?page=1&limit=10* ou *?p=1&l=10*
>
> #### Ordenação
> *?sortBy=createdAt&order=desc*
> também é possível utilizar *sortby*, *orderBy*, ou *orderby*
> OBS: se você omitir o parâmetro *order*, a ordenação padrão será 'asc'
>
> #### Busca
> *?search=blog1* ou *?filter=blog1*

### Códigos de erro e mensagens de retorno
* *200* - OK
* *201* - OK
* *404* - Not found
* *500* - Server error

### IMPORTANTE:
Para que você seja avaliado corretamente ao submeter seu desafio, é necessário que **TODOS** os seus **elementos React**, como *componentes*, *containers* e *rotas* possuam o atributo JSX/HTML (sintético) *data-testid="{nome-do-componente}"*.
