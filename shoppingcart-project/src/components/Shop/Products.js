import react from 'react';
import classes from './Products.module.css';
import ProductItem from './ProductItem';


const Products = (props) => {
    const DummyProducts = [
        {
            id: "P1",
            price: 8,
            title: "My First Book",
            description: "The First book I ever wrote",
        },
        {
            id: "P2",
            price: 5,
            title: "My Second Book",
            description: "The second book I ever wrote",
        },
        {
            id: "P3",
            price: 9,
            title: "My Third Book",
            description: "The Third book I ever wrote",
        }
    ]
    return (
        <>
            <section className={classes.products}>
                <h2>Buy Your Favorite Products</h2>
                <ul>
                    {DummyProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    ))}

                </ul>

            </section>
        </>
    )
}
export default Products;