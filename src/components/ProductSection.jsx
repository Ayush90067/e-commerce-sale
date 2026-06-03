import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import "./ProductSection.css";

import { getProducts } from "../services/api";

function ProductSection() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    // FETCH PRODUCTS

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await getProducts();

            setProducts(response.data);

        } catch (err) {

            setError("Failed To Load Products");
        } finally {

            setLoading(false);
        }
    };

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

    // LOADING

    if (loading) {

        return <h1>Loading Products...</h1>;
    }

    // ERROR

    if (error) {

        return <h1>{error}</h1>;
    }

    return (

        <section className="products">

            <h2>Featured Products</h2>

            {/* FILTERS */}

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

                    <option value="All">All</option>
<option value="Cement">Cement</option>
<option value="Brick">Brick</option>
<option value="TMT Bar">TMT Bar</option>
<option value="AAC Block">AAC Block</option>
<option value="Wall Putty">Wall Putty</option>
<option value="POP">POP</option>
<option value="RMC">RMC</option>

                </select>

            </div>

            {/* PRODUCTS */}

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