import { useParams } from "react-router";

const ProductDetail = () => {
    const params = useParams()

    console.log(params.productId)

    return (
        <>
            <h1>This is Product Details</h1>
            <p>{params.productId}</p>
        </>
    )
}
export default ProductDetail;