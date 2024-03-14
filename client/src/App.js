import Header from "./components/header/Header";
import Home from './components/home/Home'

import { Box } from "@mui/material";
// import ContextProvider from "./context/ContextProvider.jsx";
import DataProvider from "./context/DataProvider.jsx";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailView from "./components/details/DetailView.jsx";
import Cart from "./components/cart/Cart.jsx";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:id" element={<DetailView/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
