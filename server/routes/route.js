import express from 'express'
const router=express.Router()
import { userSignup,userLogin } from '../controller/user-controller.js';

// product fetching from backend
import { getProducts, getProductById } from '../controller/product-controller.js';

// agar post api signup ke equal he then we route it with frontend and backend
router.post("/signup", userSignup)

// login route:-
router.post("/login", userLogin)


router.get('/products', getProducts)


router.get('/products/:id', getProductById)



export default router;