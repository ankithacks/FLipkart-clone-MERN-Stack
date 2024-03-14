import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { getProductsDetails } from "../../redux/actions/productActions.js"
import {Box, Typography, styled, Grid} from '@mui/material'
import { Delete, Edit } from '@mui/icons-material';

import ActionItem from "./ActionItem.jsx"
import ProductDetail from "./ProductDetail.jsx"
// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     },
// }));

const Component=styled(Box)`
    background: #F2F2F2;
    margin-top: 55px; 
`

const Container=styled(Grid)`
    background:#FFFFFF;
    display: flex;
`

const RightContainer=styled(Grid)`
    margin-top: 50px;
`

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailView=()=>{
    const dispatch=useDispatch()
    const {id}=useParams()
    // const {loading, product}=useSelector(state=>state.getProductsDetails)
    const { loading, product } = useSelector((state) => state.getProductDetails || {}) || {};
    useEffect(() => {
        if(product && id !== product.id)
            dispatch(getProductsDetails(id))
    }, [dispatch, id, product, loading])
    console.log(product);   
    return(
        <Component>
            {
                 product && Object.keys(product).length && 
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product}/>
                        </Grid>
                        <RightContainer item lg={8} md={8} xs={12}>
                            
                            <ProductDetail product={product}/>
                        </RightContainer>
                    </Container>
            }
        </Component>
    )
}


export default DetailView