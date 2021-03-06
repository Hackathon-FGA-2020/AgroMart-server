<h1 align="center">
  <img alt="AgroMart" title="AgroMart" src="https://raw.githubusercontent.com/Hackathon-FGA-2020/Desafio-3-Grupo-6-mobile/master/src/assets/images/logo_0.5.png"/>
<h3 align="center">
  
Tema: Agricultura e Alimentação
</h3>
</h1>

---

Como descrito no [enunciado do desafio](https://github.com/Hackathon-FGA-2020/Sobre-o-Hackathon/blob/master/docs/Desafios/Desafio_3/Hackathon_FGA_2020_Desafio_3.pdf), devido ao isolamento social provocado pelo avanço da COVID-19 no Brasil, pequenos agricultores passam por dificuldades para vender e expor seus produtos que antes eram vendidos em feiras, para hotéis, restaurantes e outros clientes. Assim com as necessidades dos agricultores o projeto AgroMart se iniciou para ajudá-los a se conectar com os consumidores por meio de um aplicativo de celular, facilitando a comunicação e divulgação de seus produtos.

A ideia surgiu a partir de uma [reportagem transmitida no globo rural](https://g1.globo.com/economia/agronegocios/globo-rural/noticia/2020/05/03/produtora-de-goias-cria-barraca-da-honestidade-para-melhorar-as-vendas-de-hortalicas-e-verduras.ghtml), onde Eleuza Fernandes, uma pequena agricultora do Goiás, montou uma barraca em que toda negociação é feita na base da confiança, onde o consumidor ao chegar recolhe o produto desejado e deixa o pagamento no local evitando desperdícios e proporcionando uma experiência compatível ao momento atual devido ao COVID-19, que trás beneficios tanto para o agricultor quanto para o consumidor.

Em um momento tão difícil como esse, confiança e honestidade é essencial para que nós possamos superá-lo, e a história de Eleuza nos motivou a criar o AgroMart, um aplicativo, onde o agricultor possa divulgar sua loja, barraca ou ponto de venda com seus devidos produtos, preços, localização, informação de contato e uma descrição adicional. E com isso  o consumidor poderá visualizar as lojas mais próximas dele através de mapas e filtros, entrar em contato com o vendedor por um link para iniciar uma conversa direta via whatsapp com o principal objetivo de confirmar disponibilidade de produtos e adquirir informações sobre pagamentos, assim como localizar a barraca por um link direto para traçar uma rota a partir de seu destino atual. Além disso, no aplicativo disponibilizamos uma sessão de informações com recomendações quanto ao uso do mesmo durante a pandemia.

O formulário de submissão encontra-se na pasta docs e a apresentação disponível nesse link: https://www.youtube.com/watch?v=z_72NzAJXTM&feature=youtu.be

---

<!-- Adicionar gif do app -->



## Conheça nossa equipe

| --                                                                                                                          | Nome                            | Github                                       | Papel                                  |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------------------------------------------- | -------------------------------------- |
| <img src="https://avatars3.githubusercontent.com/u/19879482?s=460&v=4" width=50>                                            | Lucas Pereira de Andrade Macêdo | [@lukassxp](https://github.com/lukassxp)     | Product Manager & Full Stack Developer |
| <img src="https://avatars0.githubusercontent.com/u/23382026?s=460&v=4" width=50>                                            | Lucas Siqueira Rodrigues        | [@LucasSiqz](https://github.com/LucasSiqz)   | Team Manager & Full Stack Developer        |
| <img src="https://avatars3.githubusercontent.com/u/23109243?s=460&u=1ebd15e65395061ca00cfe224e79325e253d54f3&v=4" width=50> | Caio Oliveira de Moraes         | [@caiooliv](https://github.com/caiooliv)     | UX Designer & Mobile Developer         |
| <img src="https://avatars1.githubusercontent.com/u/31085700?s=460&u=c4dbcc80bed6756d37aa9820b84207e3e8f16d8c&v=4" width=50> | Matheus Rodrigues               | [@matheus-rn](https://github.com/matheus-rn) | Devops & Mobile Developer              |

---

## Principais Tecnologias Utilizadas:

- [Express](https://expressjs.com/pt-br/)
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js) 
- [MongoDB](https://www.mongodb.com/) 
- [Postgres](https://www.postgresql.org/) 
- [Multer](https://github.com/expressjs/multer) 
- [Typeorm](https://typeorm.io/#/) 

---

## Como executar o projeto

Clone o repositorio:

> \$ git clone https://github.com/Hackathon-FGA-2020/Desafio-3-Grupo-6

Acesse a pasta:

> \$ cd Desafio-3-Grupo-6

- É necessário ter node e o yarn instalados.

Instale as dependências:

> \$ yarn

- É necessário possuir os bancos de dados (Postgres e Mongo) instalados e criar as bases de dados manualmente;

- Configurar credenciais do banco dados no arquivo `ormconfig.json`;

Execute:

> \$ yarn dev:server
---

## Aplicativo

Os dados são consumidos pelo aplicativo mobile disponível em https://github.com/Hackathon-FGA-2020/Desafio-3-Grupo-6-mobile

---

## Como Contribuir

- Se você for um colaborador externo, dê um fork no projeto.
- Issues devem ser preferencialmente criadas com o template especificado no repositório.
- Crie sua branch e envie seu código nela.
- Faça um pull request da sua branch para a develop.

---

## Licença:

Esse projeto utiliza a licença GNU GENERAL PUBLIC LICENSE. Para mais informações [clique aqui](https://github.com/Hackathon-FGA-2020/Desafio-3-Grupo-6-mobile/blob/master/LICENSE)

---

## Referências

- [Enunciado do Tema 3](https://github.com/Hackathon-FGA-2020/Sobre-o-Hackathon/blob/master/docs/Desafios/Desafio_3/Hackathon_FGA_2020_Desafio_3.pdf)
- [Anexo do Tema](https://github.com/Hackathon-FGA-2020/Sobre-o-Hackathon/blob/master/docs/Desafios/Desafio_3/Anexo_Agricultura_Familiar.pdf)
- [Reportagem: Barraca da Honestidade](https://g1.globo.com/economia/agronegocios/globo-rural/noticia/2020/05/03/produtora-de-goias-cria-barraca-da-honestidade-para-melhorar-as-vendas-de-hortalicas-e-verduras.ghtml)
