import React, { useState } from 'react';

export default function Task1() {
    const [products, setProducts] = useState([
        { name: 'Product 1', quantity: 0 },
        { name: 'Product 2', quantity: 0 },
        { name: 'Product 3', quantity: 0 }
    ]);

    const handleQuantityChange = (index, event) => {
        const newProducts = [...products];
        newProducts[index].quantity = parseInt(event.target.value);
        setProducts(newProducts);
    };

    const handleAddToCart = (index) => {
        console.log(`Adding ${products[index].quantity} ${products[index].name} to cart.`);
    };

    // Calculate total quantity of all products
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <div>{product.name}</div>
                    <input
                        type="number"
                        min="0"
                        value={product.quantity}
                        onChange={(event) => handleQuantityChange(index, event)}
                    />
                    <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
                </div>
            ))}
            <div>Total Quantity: {totalQuantity}</div>
        </div>
    );
}
