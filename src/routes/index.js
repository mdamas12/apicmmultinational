const { Router } = require('express'); 
const email_routes = require('./emailRoutes');


const router = Router(); 
router.get('/',(req,res) => res.send('Api email send'));

//User Routes
router.use('/emails', email_routes);

module.exports = router;
