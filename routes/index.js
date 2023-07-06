var express = require('express');
var router = express.Router();
const { Register, Log_in, Update, delete_user, page_no  } = require('../controller/UserController')

// data insert 
router.post('/',Log_in);    
router.post('/register',Register);
router.post('/update/:id',Update);                             
router.get('/delete/:id',delete_user);                             
router.get('/:page',page_no);                             

router.get('/',function(req,res,next){
    res.render('index',{title: 'Express Index'})
})

router.get('/dashboard',function(req,res,next){
    res.render('dashboard',{title: 'Dashboard index'})
})


module.exports = router;
