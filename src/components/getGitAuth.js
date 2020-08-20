const { Octokit } = require("@octokit/rest")
const { createTokenAuth } = require("@octokit/auth-token")

 async function getGITRepos (username, token) {
    
    let octokit = new Octokit()
    if (token !== null) {        
        octokit = new Octokit({
          auth: token 
        });
    } 
    
    let response = await octokit.repos.listForUser({ username, type: 'public' })
    let {data} = response
    return data
 }


async function getAuth() {
    // usando o método de criação de Token Pessoal
    //const TOKEN = "<your-personal-token>"          
    const TOKEN = null
    let token = null
    if (TOKEN !== null) {
      const auth = createTokenAuth(TOKEN)      
      token = (await auth()).token
    } 
    return token
}

module.exports = { getGITRepos, getAuth }
