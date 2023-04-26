import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
const Home = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        window
            .fetch("/api/avo")
            .then((res) => res.json())
            .then(({ data }) => setProductList(data));
    };

    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
            {productList.map((product) => {
                return (
                    <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                    >
                        {product.name}
                    </Link>
                );
            })}
        </>
    );
};

export default Home;
