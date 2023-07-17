const express = require('express');
const registerUser = require('../controllers/users/registerUser');
const loginUser = require('../controllers/users/loginUser');
const route = express();

route.get('/', (req, res) => {
    return res.json('ok')
})

//Usuários
route.post('/user', registerUser)
route.post('/login', loginUser)
// route.get('/user', );
// route.put('/user',)

//Receitas
route.post('/recipe',)
route.get('/recipe',)
route.put('/recipe/:id',)
route.delete('/recipe/:id',)

//Comentários
route.post('/coments/:id',)
route.delete('/coments/:id',)

//Favoritos
route.post('/likes/:id',)
route.delete('/likes/:id',)

module.exports = route;