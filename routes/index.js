var express = require('express');
var router = express.Router();
const { Register, Log_in, Update, delete_user, page_no  } = require('../controller/UserController')

// data insert 

router.get('/',function(req,res,next){
    res.render('index')
})

router.get('/dashboard',function(req,res,next){
    res.render('dashboard',{title: 'Express dashboard'})
})

router.post('/',Log_in);    
router.post('/register',Register);
router.post('/update/:id',Update);                             
router.get('/delete/:id',delete_user);                             
router.get('/:page',page_no);                             


module.exports = router;
