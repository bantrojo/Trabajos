const express=require('express');
const res = require('express/lib/response');
const productsRouter=require('./routes/products');
const app=express();



app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static(__dirname +'/public'));
app.use('/products',productsRouter);
/*
let storage=multer.diskstorage({
    destination:function(req,file,cb){
        cb(null,'public/img');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})
let uploader=multer({storage:storage})

app.post('/upload',uploader.single('file',(req,res)=>{
    let file=req.file
;    res.send({message:"ok"});
}))


*/

const server=app.listen(8080,(req,res)=>{
    console.log("LISTENING ON 8080");
    
})
