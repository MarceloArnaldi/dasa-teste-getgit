# GetGit
>Um simples exemplo de consumo da API do GitHub

Documentação oficial da [API Git Hub](https://github.com/octokit/rest.js/)

### Uso da versão de Desenvolvimento
```
git clone https://github.com/MarceloArnaldi/dasa-teste-getgit
cd .../dasa-teste-getgit
sudo npm i
npm run serve
```

### Compilação para Produção

Coloque os arquivos do diretório `/dist` em um WebServer ou na raiz. 

```
cd .../dasa-teste-getgit
sudo npm run build
```

### Imagem no Docker
No dirtório `docker/build-getgit` encontrará os arquivos para gerar a imagem Docker
```
docker pull arnaldi/getgit
docker container run -p 8080:8080 getgit
ou
docker container run -p 8080:8080 arnaldi/getgit:0.0.1
```

## Metodos

### getGitAuth.js

O uso sem informar o Token Pessoal é limitado pela API do GitHub em 60 pesquisas. <br>
Mais detalhes na página do GitHub sobre [Pessoal Token](https://docs.github.com/pt/github/authenticating-to-github/creating-a-personal-access-token)

### getAuth()
Retorna a autorização se informado o token pessoal, se enviar null o acesso será realizado sem a autorização.

### getGITRepos(`<github-user-name>`, `<personal-token>`)
Retorna o objeto com todos os repositórios do usuario pesquido.
No objeto há diversas informações sobre o repositório, no exemplo são mostrados, o nome do repositório `(name)`, o número de estrelas `(stargazers_count)` e a url do repositório `(html_url)`



