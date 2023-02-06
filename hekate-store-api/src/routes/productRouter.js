const { Router } = require('express');

const productRouter = Router();


productRouter.get('/', async (request, response)=>{

        

    try {
        
        response.status(200).send('Hola productRouter');

    } catch (error) {

        console.log(error)
    }
    
    
})

module.exports = productRouter;

