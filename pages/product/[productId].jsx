import { useRouter } from "next/router";

const ProductItem = () => {
    const { query } = useRouter();
    const { productId } = query;
    return <h1>ProductItem, id: {productId}</h1>;
};
export default ProductItem;
