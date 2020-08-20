const { Octokit } = require("@octokit/rest")
const { createTokenAuth } = require("@octokit/auth-token")

 async function getGITRepos (username, token) {
    const octokit = new Octokit()
    if (token !== null) {      
      octokit.auth = token
    } 
    
    let response = await octokit.repos.listForUser({ username, type: 'public' })
    let {data} = response
    return data
 }


async function getAuth() {
    // usando o método de criação de Token Pessoal
    //const TOKEN = "<your-personal-token>"  
    //69d42c7ff2d4ae9ca184dfb497533c757f6258a8  
    const TOKEN = '69d42c7ff2d4ae9ca184dfb497533c757f6258a8'
    let token = null
    if (TOKEN !== null) {
      const auth = createTokenAuth(TOKEN)
      //const { token } = await auth()
      token = await auth()
    } 
    return token
}

module.exports = { getGITRepos, getAuth }
