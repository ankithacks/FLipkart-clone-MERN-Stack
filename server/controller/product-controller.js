import Product from '../models/productSchema.js'


export const getProducts=async(req,res)=>{
    try {
        const Products= await Product.find({})


        return res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export const getProductById=async(req,res)=>{
    try {
        const id=req.params.id
        const product=await Product.findOne({'id': id})
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// export const getProductById = async (request, response) => {
//     try {
//         const products = await Product.findOne({ 'id': request.params.id });
//         response.json(products);
//     }catch (error) {

//     }
// }