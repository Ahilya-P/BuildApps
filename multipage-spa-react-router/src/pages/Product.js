import { Link } from "react-router-dom"

const Product = () => {

    return (
        <>
            <h1>The Product page</h1>
            <ul>
                <li>
                    <Link to="/product/p1"> Book</Link>
                </li>
                <li>
                    <Link to="/product/p2"> Pen</Link>
                </li>
                <li>
                    <Link to="/product/p3"> Laptop</Link>
                </li>

            </ul>
        </>
    )

}
export default Product