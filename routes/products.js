const { response } = require('express');
const express = require('express');

const router = express.Router();

let products = [];

const middleware = (req, res, next) => {
    if (false) {
        next();
    } else {
        res.status(400).send({ message: "invalid" });
    }

}

router.get('/', (req, res) => {
    res.send({ products });

})

router.get('/:num', (req, res) => {
    //res.send(req.params.id);
    let param=req.params.num;
    let id = parseInt(param);
    if (isNaN(id)) return res.status(400).send({ error: "not a number" })
    //if(id<1||id>products.length) return res.status(400).send({error:"out of bund  "})
    const filteredProduct = products.filter((product)=>product.id===id)
    if(filteredProduct.length===0) return res.status(400).send({error:"Not found"});
    res.json({selectedProduct:filteredProduct})
})

router.put('/:id',(req,res)=>{
let param=req.params.id;
let id=parseInt(param);
let newDataProduct=req.body;
let objIndex=products.findIndex(product=>product.id===id)
products[objIndex]={...products[objIndex],...newDataProduct}
if (isNaN(id)) return res.status(400).send({ error: "not a number" })
//products.map(product=>product.id===id?{...product,newDataProduct}:product)
res.json({products})
})

router.delete('/:num', (req, res) => {
let param=req.params.num;
let id=parseInt(param);
products.splice(id-1,1);
//const filteredProducts=products.filter((product)=>product.id!==id);
res.json({products})
})

router.post('/', (req, res) => {
    let product = req.body;
    console.log(product);
    const newProduct = {
        id: products.length + 1,
        name: product.name,
        price: product.price,
        pImg:product.pImg,
    };

    console.log(newProduct);
    products.push(newProduct);
    res.send({ message: "Product created" });
})



module.exports = router;