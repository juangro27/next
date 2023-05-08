import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductItem = () => {
    const [product, setProduct] = useState([]);
    const { query } = useRouter();
    const { productId } = query;

    useEffect(() => {
        getProducts();
    }, [productId]);

    const getProducts = () => {
        if (productId) {
            window
                .fetch(`/api/avo/${productId}`)
                .then((res) => res.json())
                .then(({ data }) => setProduct(data))
                .catch((err) => console.log(err));
        }
    };
    return (
        <>
            <h1>
                ProductItem, id: {product?.id}, name {product?.name}
            </h1>
        </>
    );
};
export default ProductItem;
