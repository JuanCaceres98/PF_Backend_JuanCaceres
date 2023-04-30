import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send(products)
})

router.get('/:pid',(req,res)=>{
    const id = req.query.pid;
    const idFiltrados = products.filter(product=>product.id===id);
    if(!pid||(pid>10 || pid<=0)) return res.status(404).send({status:"error",error:"Product not found"});
    products[idFiltrados] = product
    res.send({status:success, message:"Product show"})
})

router.post('/',(req,res)=>{
    const product = req.body;
    if(products.length==0){
        product.id = 1;
    }else{
        product.id = products[products.length-1].id+1;
    }
    products.push(product)
    res.send({status:success,menssage:"Product added"})
})

router.put('/:pid',(req,res)=>{
    const id = req.params.pid;
    const product = req.body
    const idIndex = products.findIndex(product=>product.id===id)
    if(idIndex===-1) return res.status(404).send({status:"error",error:"Product not found"})
    products[idIndex] = product;
    res.send ({status:"success",message:"Pet update"});
})

router.delete('/pid',(req,res)=>{
    const id = req.params.pid;
    const idIndex = products.findIndex(product=>product.id===id)
    if(idIndex ===-1) return res.status(404).send({status:"error", error:"Cannot delete an unexistent product"})
    products.splice(idIndex,1);
    res.send({status:"success", menssage:"Product deleted"})
})

export default router;