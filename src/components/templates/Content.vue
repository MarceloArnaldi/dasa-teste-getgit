<template>
  <div class="content">
      <span class="caption">Usuário GitHub</span><br>
      <input type="text" class="usergit" placeholder="Entre com o usuário GitHub" v-model="user"><br>
      <button class="button" @click="getGit">Pesquisa</button><br><br>
      <table v-if="show">
        <thead>
            <tr>
                <th>Repositório</th>
                <th>Stars</th>
                <th>URL</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(repo, index) in repos">
            <tr v-bind:key=index>                
                <td>{{ repo.name }}</td>
                <td>{{ repo.stargazers_count }}</td>
                <td><a v-bind:href="repo.html_url" target="_blank">{{ repo.html_url }}</a></td>
            </tr>           
            </template>
            </tbody>        
      </table>   
  </div>  
</template>

<script>

import GetGit from '../getGitAuth'

export default {
    name: 'Content',
    data: function() {
        return {
            repos: [],
            token: null,            
            user: '',
            show: false        
        }
    },
    methods: {
        async getGit() {            
            try {                
                let response = await GetGit.getGITRepos(this.user, this.token)                
                this.show = true
                this.repos = response
            } catch(e) {
                console.error(e);
            }
        }
    },
    async mounted() {
        try {
            let response = await GetGit.getAuth()
            this.token = response
        } catch(e) {
            console.error(e)
        }
    }
}

</script>

<style>

.content {
    grid-area: content;
    background-color: azure;
    padding: 20px;
}

.caption {
    font-weight: bold;
}

.usergit {
    margin-top: 5px;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 1.3em;   
    width: 65%;
}

.button {
  background-color: rgb(0,216,216);
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;  
  text-decoration: none;
  display: inline-block;
  font-size: 16px;    
}

table {
  background-color: #fff;
}

th {
  background-color: rgb(65,35,150);
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

</style>
