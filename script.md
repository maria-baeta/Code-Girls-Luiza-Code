# Funções provenientes do Sequelize utilizadas: 

## Método de criação:

- Table.create() =>  Gera uma INSERT, ou seja, insere informações na tabela.
  
## Métodos de localização:

- Table.findAll() => Gera uma SELECT, ou seja, uma consulta padrão que recupera todas as entradas da tabela.
- Table.findOne() =>  Obtém a primeira entrada que encontrar que preencha as opções de consulta opcionais se fornecidas. Normalmente utiliza-se em conjunto com WHERE.
- Table.findByPk() => Obtém apenas uma única entrada da tabela, usando a chave primária para realizar a consulta.
  
## Método de atuazalição:

- Table.update() => Atualiza os dados das linhas das tabelas. Normalmente utiliza-se em conjunto o WHERE para especificar o que deve ser alterado
.
## Método de exclusão:

- Table.destroy() => Exclui uma linha da tabela. Normalmente utiliza-se em conjunto o WHERE para especificar o que deve ser excluído .
  
# Status HTTPS:

- 200 (OK) Resposta padrão para solicitações bem-sucedidas.
- 201 (Created) Resposta dada quando a solicitação foi atendida e resultou na criação de um novo recurso.
- 400 (Bad request) A solicitação não pode ser atendida devido a uma sintaxe incorreta.
- 401 (Unauthorized) Semelhante a 403, mas especificamente para uso quando a autenticação é possível, mas falhou ou ainda não foi fornecida.
- 404 (Not found) Recurso solicitado não foi encontrado, mas pode está disponível novamente no futuro.
- 411 (Length required) A solicitação não especificou o comprimento de seu conteúdo, que é exigido pelo recurso solicitado.

# Conceitos essenciais:

#### Migrations

São classes que executam promisses capazes de gerar nossas estruturas no banco de dados, ele irá gerar as tabelas, relacionamentos e campos por etapas, para cada nova tabela teremos uma nova migration.

## Associations

- Para criar um relacionamento Um para Um , as associações hasOne belongsTo são usadas juntas;

  - HasOne: Significa que existe um relacionamento Um para Um entre A e B, e com a chave estrangeira sendo definida no modelo de destino(B).
  - BelongsTo: Siginifica que existe um relacionamento Um pra Um entre A e B, com chave estrangeira sendo definida no modelo de origem (A).
  
- Para criar um relacionamento Um-para-Muitos , as associações hasMany e belongsTo são usadas juntas. Para criar um relacionamento Muitos-para-Muitos , duas belongsToMany chamadas são usadas juntas.

  - HasMany: Significa que existe um relacionamento Um para Muitos entre A e B, com a chave estrangeira sendo definida no modelo de destino (B).
  - BelongsToMany: Significa que existe um relacionamento Muito-para-Muitos entre A e B, usando tabela C como tabela de junção, que terá as chaves estrangeiras aId, bId, por exemplo. 
  
## Seeders

São classes que executam promisses capazes de gerar dados padrões para as tabelas, seja para mockar ou gerar dados padrões para tabelas. 

## Models

Responsável por armazenar todos os models da nossa aplicação.

## Controllers

Responsável por armazenar todos os controllers de nossa aplicação centralizados em um único lugar. Geralmente é onde econtramos algumas regras de negócio.


# Referências:
- [https://sequelize.org/master/](https://sequelize.org/master/)
- [https://ezdevs.com.br/introducao-a-orm-no-node-js-com-sequelize/](https://ezdevs.com.br/introducao-a-orm-no-node-js-com-sequelize/)
- [https://ezdevs.com.br/introducao-a-orm-no-node-js-com-sequelize-parte-2/](https://ezdevs.com.br/introducao-a-orm-no-node-js-com-sequelize-parte-2/)
