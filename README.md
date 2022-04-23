# front-vinho

Autora: Diovanna Schell

Projeto desenvolvido com VueJs na versão 3. 

## Configuração do projeto

Após clonar o projeto é necessário instalar as suas dependências, para isto você pode usar gerenciadores como o yarn ou npm. Para instalar as dependências com yarn rode o seguinte comando:
```
yarn install
```

Tendo as dependências instaladas, rode a aplicação com o comando:
```
yarn serve
```

Se o seu back-end não está rodando em localhost, será necessário alterar o host que o front-end conecta para fazer as requisições. Esta configuração fica no arquivo ```main.js``` no seguinte trecho de código:

```js
// configurar baseURL para o axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'
```
