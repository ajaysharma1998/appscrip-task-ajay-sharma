import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/ProductPage.css";
import "../css/filter.css";

const ProductPage = ({ addToWishlist, toggleLike, likedProducts }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main_container">
      <aside className="filter-sidebar">
        <p className="items-count">3425 ITEMS</p>
        <a href="#" className="hide-filters">HIDE FILTER</a>
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-option">
          <input type="checkbox" id="customizable" />
          <label htmlFor="customizable">CUSTOMIZABLE</label>
        </div>
        {[
          "idealFor",
          "occasion",
          "work",
          "fabric",
          "segment",
          "suitableFor",
          "rawMaterials",
          "pattern",
        ].map((section) => (
          <div key={section} className="filter-category">
            <h3 onClick={() => toggleSection(section)}>
              {section.toUpperCase().replace(/_/g, " ")}
              <span>{isOpen[section] ? "-" : "+"}</span>
            </h3>
            {isOpen[section] && <p>All</p>}
          </div>
        ))}
        <Link to="/wishlist" className="wishlist-link">Go to Wishlist</Link>
      </aside>
      <main className="product-page">
        {loading && <p className="loading">Loading products...</p>}
        {error && <p className="error">Error fetching products: {error}</p>}
        {filteredProducts.length === 0 && !loading && !error && <p className="no-products">No products found.</p>}
        <section className="product-list">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img className="IMAGE" src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
              <button
                className={`like-button ${likedProducts.some(item => item.id === product.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(product)}
              >
                {likedProducts.some(item => item.id === product.id) ? '❤️' : '🤍'}
              </button>
              <button
                className="wishlist-button"
                onClick={() => addToWishlist(product)}
              >
                Add to Wishlist
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
