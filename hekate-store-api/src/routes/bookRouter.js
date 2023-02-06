const { Router } = require('express');

const bookRouter = Router();


bookRouter.get('/', async (request, response)=>{

        

    try {
        
        response.status(200).send('Hola BOOK');

    } catch (error) {

        console.log(error)
    }
    
    
})

module.exports = bookRouter;

