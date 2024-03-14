import { Typography, Box, styled, TableBody, Table, TableRow, TableCell } from "@mui/material";

const SmallText=styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
    return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 ratings & 1 review
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>
        Available Offers
      </Typography>
      <SmallText>
        <Typography>Get Extra 10% off upto ₹50 on item(s) </Typography>
        <Typography>Get extra 10% off (price inclusive of discount) T&C apply</Typography>
        <Typography>Sign up for Flipkart Pay and get Flipkart Gift Card worth ₹100* and more (T&C apply)</Typography>
        <Typography>But 2 items and save upto ₹100 on first cashback offer</Typography>
        <Typography>5% cashback on Flipkart Axix Bank</Typography>
        <Typography>No cost EMI on Bajaj finserv on EMI card value above ₹2999 T&C </Typography>
      </SmallText>
      <Table>
        <TableBody>
            <TableRow>
                <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                <TableCell style={{fontWeight: 600}}>Deliverd By {date.toDateString()} | ₹40</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                <TableCell >No warranty</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{color: '#878787'}}>Seller</TableCell>
                <TableCell >
                    <Box component="span" style={{color: '#2478f0'}} >Super Coin</Box>
                    <Typography>GST invoice Available</Typography>
                    <Typography>!4 days money back guarantee</Typography>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell >{product.description}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
