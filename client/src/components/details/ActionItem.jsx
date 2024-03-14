import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';


const LeftContainer=styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`;

const Image=styled("img")({
    padding: '15px'
})

const StyledButton=styled(Button)`
    width: 46%;
    height: 50px;
    border-radius: 2px;
`   


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    return(
        <LeftContainer>
            <Box style={{    padding: '15px 20px',
    width: '90%',
    border:'1px solid #f0f0f0'}}>
            <Image src={product.detailUrl} alt='Product image'/>
            </Box>
            <StyledButton variant='contained' style={{marginLeft: 10, background: '#ff9f00', marginRight: 15}} onClick={()=>addItemToCart()}>Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb541b'}} variant='contained'>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem