const { Router } = require('express');
const bookRouter = require('./bookRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/book', bookRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);

module.exports = router;
