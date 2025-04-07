# 🎬 PrimeFlix

Aplicação web feita com **ReactJS** que permite listar filmes populares, visualizar detalhes e salvar seus filmes favoritos usando o **localStorage**.

Este projeto consome a API pública do [The Movie Database (TMDb)](https://www.themoviedb.org/) para exibir os filmes.

---

## 📸 Demonstração

 ![PrimeFlix Preview](https://github.com/user-attachments/assets/12ea8196-1668-4f61-8cdc-26e036e00c9e)
 

---

## 🚀 Funcionalidades

- Listagem de filmes populares
- Visualização de detalhes dos filmes (sinopse, nota, data de lançamento etc)
- Marcar/desmarcar filmes como favoritos
- Salvar favoritos no navegador com `localStorage` (mesmo após atualizar a página)

---

## 🧰 Tecnologias usadas

- [ReactJS](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [TMDb API](https://developers.themoviedb.org/3)
- `localStorage` para persistência dos favoritos

---

## 🛠️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/luanraffaell/primeFlix.git
cd primeflix
```
2. Instale as dependências:
```
npm install
```
3. Crie um arquivo `.env` com sua chave da API do TMDb:
```
REACT_APP_TMDB_API_KEY='SUA CHAVE API'
```
4. Inicie o projeto:
```
npm start
```

💡 Observações
Este projeto utiliza a API TMDb. É necessário se cadastrar no site e gerar uma chave para usar a aplicação.
Os filmes favoritos são armazenados no navegador (via localStorage), ou seja, não há necessidade de login ou backend.
