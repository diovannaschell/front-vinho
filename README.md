# front-vinho

Autora: Diovanna Schell

Projeto desenvolvido com VueJs na versão 3. 

## Requisitos do projeto
 - Ter o Docker

## Configuração do projeto

Como foi usado docker para o desenvolvimento deste projeto, após clonar ele para rodar basta usar os comandos:
```
docker build -t front-vinho .
docker run front-vinho
```

Após rodar o último comando, a url em que a aplicação está rodando será apresentada no console. Basta acessá-la no seu navegador e ver a aplicação rodando.

Se o seu back-end não está rodando em localhost, será necessário alterar o host que o front-end conecta para fazer as requisições. Esta configuração fica no arquivo ```main.js``` no seguinte trecho de código:

```js
// configurar baseURL para o axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'
```
