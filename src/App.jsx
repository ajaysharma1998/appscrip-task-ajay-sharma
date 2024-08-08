import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Disc from './components/Discover';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((product) => product.id !== productId));
  };

  const toggleLike = (product) => {
    if (likedProducts.some((item) => item.id === product.id)) {
      setLikedProducts(likedProducts.filter((item) => item.id !== product.id));
    } else {
      setLikedProducts([...likedProducts, product]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Disc/>
      <Routes>
        <Route 
          path='/' 
          element={
            <ProductPage 
              addToWishlist={addToWishlist} 
              toggleLike={toggleLike}
              likedProducts={likedProducts} 
            />
          } 
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route 
          path='/wishlist' 
          element={
            <Wishlist 
              wishlist={wishlist} 
              removeFromWishlist={removeFromWishlist} 
            />} 
        />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
