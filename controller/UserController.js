const  user_register = require('../model/UserModel')

const Register = async (req,res) => {

    var data = await user_register.find({"email":req.body.email})

    if(data.length == 0)
    {
        var data = await user_register.create(req.body);
  
        res.status(200).json({
            status:"Success",
            data
        })
    }   
    else{
        res.status(200).json({  
            status:"Your email address is already register"
        })
        console.log(data);
    }    
    
}

const Log_in = async (req,res) =>{

    var data = await user_register.find({"email":req.body.email});

    console.log(data);
    if (data.length == 1) 
    {
        if (data[0].password == req.body.password) 
        {
            res.status(200).json({
                status:"sucess"
            })    
        }
        else
        {
            res.status(200).json({
                status:"Check your password"
            }) 
        }
    }
    else if(data.length == 0)
    {
        res.status(200).json({
            status:"Registed your id"
        })
    }
    else
    {
        res.status(200).json({
            status:"You have multiple account"
        })
        
    }
}

const delete_user = async (req,res) =>{
    var id = req.params.id;

    var data = await user_register.findByIdAndDelete(id);

    res.status(200).json({
        status:"sucess",
        id
    })
}

const Update =  async (req,res) =>{
    var id = req.params.id;

    var data = await user_register.findById(id);
    
    await user_register.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"sucess",
        id
    })
}               

/* Pagination*/

const page_no = async (req,res) =>{

    var page = req.params.page;

    var limit = 3;

    var start = (page-1)*limit;

    var data = await user_register.find().skip(start).limit(limit);

    res.status(200).json({
        status: "Sucess",
        data,
        start,
        page
    })
}

module.exports = {
    Register,
    Log_in,
    Update,
    delete_user,
    page_no
}