let request = require('supertest');
request = require('../src/components/getGitAuth')

test('Deve pegar token com sucesso', () => {    
    return request.getAuth()
        .then(token => {        
            expect(token).toBe(null)
        })
})

test('Deve pegar repositório com sucesso', () => {    
    return request.getGITRepos('marceloarnaldi', null)
        .then(e => {   
            console.log(e[0].owner.login.toLowerCase())
            expect(e[0].owner.login.toLowerCase()).toBe('marceloarnaldi')
        })
})
