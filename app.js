const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const app=express()
mongoose.connect("mongodb://localhost:27017/formDB",{useNewUrlParser:true})
app.set('view engine', 'ejs')
const userSchema =new  mongoose.Schema({ 
    id:String, 
    password:String, 
    code:Number
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
const User=mongoose.model("user",userSchema);

app.listen(3000);
app.get('/',(req, res) => {
    res.render('form1.ejs',{p:'',i:''});
})
var data;
app.post('/',(req, res) => {
    //console.log(req.body);
    if(req.body.button==='form1'){
        User.find({id:req.body.id},(err,doc)=>{
            if(err){
                console.log(err);
            }
            else{
                if(doc.length!=0){
                    data=doc[0];
                    //console.log(data);
                    if(doc[0].password==req.body.password){
                        res.render('form2.ejs',{p:''})
                    }
                    else{
                        res.render('form1.ejs',{p:'*password incorrect',i:''});
                    }
                }
                else{
                    res.render('form1.ejs',{p:'',i:'*user id not found'});
                }
            }
        })
    }
    else if(req.body.button==='form2'){
        console.log(data)
        if (data.code==req.body.code){
            res.send('code correct');
        }
        else{
            res.render('form2.ejs',{p:'*code incorrect'});
        }
    }
})