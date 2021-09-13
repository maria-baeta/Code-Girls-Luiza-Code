# Code-Girls-Luiza-Code
 Projeto criado para o desenvolvimento do Desafio Final da 3ª Edição do Luiza Code - Node.js

### Desenvolvido por: 
- [janainaestevao](https://github.com/janainaestevao)
- [kassoliver](https://github.com/kassoliver)
- [maria-baeta](https://github.com/maria-baeta)

### Proposta: 
Desenvolvimento de um Omni Channel utilizando Node.js.


### O que deve ser feito:

O objetivo é desenvolver um serviço HTTP resolvendo a funcionalidade de Omni Channel do cliente. 
Esse serviço deve atender os seguintes requisitos:

### Requisitos Obrigatórios: 

- Listar produtos;
- Listar lojas físicas;
- Cadastrar cliente;
- Adicionar um produto na lista de compra da cliente;
- Remover um produto da lista de compra da cliente;
- Finalizar compra
- Consultar todas as compras realizadas da cliente;

## Instruções para configurar o ambiente e rodar o projeto:

### Antes de começar: 

1. Crie um fork do projeto:
     - Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://docs.github.com/pt/github/getting-started-with-github/quickstart/fork-a-repo);
     - Após feito o fork, clone o repositório criado para o seu computador.
  
2. Instale as dependências:
     - No terminal execute o seguinte comando: 
      
              npm install ou npm i
    
3. Crie um arquivo .env:
    - Crie um arquivo .env na raiz do projeto com as seguintes configurações: 
  
          #INFORMAÇÕES BANCO DE DADOS
          MYSQL_HOST=localhost
          MYSQL_DB_NAME=code_girls

          #INFORMAÇÕES USUARIO --- Altere aqui para suas informações 
          MYSQL_USER=NOMEDOSEUUSUARIODOBANCO
          MYSQL_PASSWORD=SENHADOSEUBANCO

4. Criando o banco de dados: 
     - Verifique se sua instância do MySql está ativa;
     - No terminal execute o seguinte comando para criar o banco de dados:
    
           npx sequelize db:create

     - No terminal execute o seguinte comando para criar as tabelas no banco de dados:
  
           npx sequelize db:migrate 

     - No terminal execute o seguinte comando para popular as tabelas com as informações necessárias:
 
           npx sequelize db:seed:all

5. Swagger:
 
      - Utilize o Swagger para poder testar os serviços Web API. 
      - No terminal execute o seguinte comando:
       
            npm run swagger-autogen

      - No navegador acesse: 
       
            http://localhost:3001/doc

Algumas definições utilizadas para o desenvolvimento podem ser consultadas no arquivo  [Script.md](https://github.com/maria-baeta/Code-Girls-Luiza-Code/blob/main/script.md)


