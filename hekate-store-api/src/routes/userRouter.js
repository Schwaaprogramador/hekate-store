const { Router } = require('express');

const userRouter = Router();


userRouter.get('/', async (request, response)=>{

    try {
        
        response.status(200).send('Hola userRouter');

    } catch (error) {

        console.log(error)
    }
    
    
})

module.exports = userRouter;

