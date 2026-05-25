import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

function ProductSection() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    // FILTER PRODUCTS

    const filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (

        <section className="products">

            <h2>Featured Products</h2>

            {/* SEARCH */}

            <div className="filter-section">

                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <select
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                >

                    <option value="All">
                        All
                    </option>

                    <option value="Mobile">
                        Mobile
                    </option>

                    <option value="Accessories">
                        Accessories
                    </option>

                    <option value="Watch">
                        Watch
                    </option>

                    <option value="Laptop">
                        Laptop
                    </option>

                </select>

            </div>

            <div className="product-grid">

                {
                    filteredProducts.map((product) => (

                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />

                    ))
                }

            </div>

        </section>
    )
}

export default ProductSection;