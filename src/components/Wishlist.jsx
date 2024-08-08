import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Wishlist.css';

const Wishlist = ({ wishlist, removeFromWishlist }) => {
    return (
        <div className="wishlist">
            <h1>Wishlist</h1>
            <Link to="/" className="back-to-products">Back to Products</Link>
            <div className="product-list">
                {wishlist.length > 0 ? (
                    wishlist.map(product => (
                        <div className="product-card" key={product.id}>
     <img className="IMAGE" src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
                            <button 
                              onClick={() => removeFromWishlist(product.id)} 
                              className="remove-button">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="empty-message">Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
