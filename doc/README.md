# Teste BACK-END para Integrado

<h3> Teste proposto para consumir uma API externa e salvar os dados em um banco, e também criar uma API própria com funções básicas de um CRUD para interagir com os dados 
ja salvos pela API externa e também criar novos dados.</h3> 

<h2>Técnologias Usadas</h2>
<li> NODEJS
<li> EXPRESS
<li> AXIOS
<li> MONGODB
<li> MONGOOSE
<li> CORS
<li> DOTENV
  
# Pré-requisitos 

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/pt-br), [Postman](https://www.postman.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
  
# Rodando o Back End (servidor)
  
### Clone este repositório
$ git clone <https://github.com/GustavoCremonez/teste-integrado.git>
  
#### Vá para a pasta do projeto
$ cd teste-integrado
### Instale as dependências
$ npm install
  
### Execute a aplicação em modo de desenvolvimento
$ npm run dev
  
#### Para ter acesso as informações das universidades vai em http://localhost:8080/api/universities
  
  
# Como usar o projeto
### O projeto possui os seguintes endpoints e suas caracteristicas (Que podemos testar pelo postman): <p>
<h3> Método GET: </h3>
  
  <li> http://localhost:8080/api/universities/ -> Que resultara na busca de mais de uma universidade, você tem a opção de passar as páginas, 
    o limite de dados que será trazido por pagina (que por padrão é 20), e o país que deseja filtrar.
    <p> <strong> EX: http://localhost:8080/api/universities/?page=1&country=Brazil&limit=10 </strong> <p>
  <li> http://localhost:8080/api/university/[ID] -> Que resultara na busca de apenas uma universidade, onde você obrigatoriamente tem que passar o id 
    da universade que deseja ver <p> <strong> EX: http://localhost:8080/api/university/62740c1189d1a027260e2d29 </strong> <p><p>

  <img src:"GetMethodForUniversities.png" alt='Como executar o método GET'><p>
  <img src:"GetMethodForUniversities.png" alt='Como executar o método GET'><p>
  
<h3> Método POST: </h3> 
   <li> http://localhost:8080/api/universities -> Neste método você ira passar um json para o corpo da requisição com os seguintes campos: <p>
        "alpha_two_code": " ", Representa a sigla do nome do país de origem da faculdade EX: BR (Não pode ser nulo).<p>
        "domains": [" "], Representa os domínios que a faculdade possuí (é um array então pode ter mais de um e não pode ser nulo).<p>
        "country": "", Representa o país ao qual a faculdade pertence (Não pode ser nulo).<p>
        "state-province": "", Representa o estado ao qual a faculdade pertence.<p>
        "web_pages": [" "], Representa as páginas pertence (é um array então pode ter mais de um e não pode ser nulo).<p>
        "name": "" Representa o nome da faculdade (é unico então so pode ter uma faculdade com aquele nome e não pode ser nulo).<p>
   <h4> caso tenha passado todos os dados da maneira correta ele ira criar no banco uma nova faculdade com os dados passados. </h4> <p>
<h3> Método PUT: </h3> 
     <li> http://localhost:8080/api/universities/[ID] ->  Neste método você ira atualizar alguma das universidades que esteja no banco, então e necessário que passe um
       id juntamente ao fim do endpoint, e também e necessário passar no corpo da requisição um json igual ao do método anterior porém apenas com o web_pages, name e domains, 
       que apenas eles serão alterados (requisito passado no documento do teste).
<h3> Método DELETE: </h3> 
      <li> http://localhost:8080/api/universities/[ID] -> Neste método você irar deletar uma universidade, por isso e necessário que você passe o id da faculdade que deseja deletar.
<h3> Endpoint para usar a API externa: </h3>
    <li> http://localhost:8080/api/universities/filldatabase/[country] ->  neste método você irá passar um país no qual você deseja que seja feito a varredura na API externa então 
      será feito uma request para lá e retorna uma mensagem de sucesso então armazenando todas as faculdades dos país que foi passado.
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/argentina </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/brasil </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/chile </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/colombia </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/paraguai </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/peru </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/suriname </strong> <p>
      <p> <strong> EX: http://localhost:8080/api/universities/filldatabase/uruguay </strong> <p>
