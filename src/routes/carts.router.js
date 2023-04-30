import { Router } from "express";

const router = Router();


router.post('/',(req,res)=>{
    const product = req.body;
    if(products.length==0){
        product.id = 1;
    }else{
        product.id = products[products.length-1].id+1;
    }
    products.push(product)
    res.send({status:success,menssage:"Product added to carts"})
})


router.get('/:cid', (req, res) => {
    const cid = req.params.cid;
    const cart = carts.find(c => c.id === cid);
    if (!cart) {
        return res.status(404).send({ error: 'Cart not found' });
        }
    const productsInCart = products.filter(p => cart.products.includes(p.id));
    res.send({ products: productsInCart });
});



router.post('/:cid/product/:pid', (req, res) => {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const product = products.find(p => p.id === pid);
    if (!product) {
        return res.status(404).send({ status: 'error', message: 'Product not found' });
    }
    const cart = carts.find(c => c.id === cid);
    if (!cart) {
        return res.status(404).send({ status: 'error', message: 'Cart not found' });
        }
    const existingProduct = cart.products.find(p => p.product === pid);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.products.push({ product: pid, quantity: 1 });
    }
    return res.send({ status: 'success', message: 'Product added to cart' });
});




export default router;