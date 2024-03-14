import { useEffect } from "react";
import NavBar from "./NavBar";
import Banners from "./Banners";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { styled, Box } from "@mui/material";

import {getProducts} from "../../redux/actions/productActions"
import { useSelector, useDispatch } from 'react-redux'; 
const Component=styled(Box)`
    padding: 10px 20px;
    background: #f2f2f2f2;
`;

const Home = () => {
    const { products } = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <Component>
                <Banners />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
        </>
    )
}
export default Home;


