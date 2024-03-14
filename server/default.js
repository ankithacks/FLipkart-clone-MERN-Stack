import {products} from './constants/data.js';
import Product from './models/productSchema.js';

const defaultData=async ()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("data imported successfully!!")


    } catch (error) {
        console.log("error while inserting default data", error.message)
    }
}


export default defaultData;