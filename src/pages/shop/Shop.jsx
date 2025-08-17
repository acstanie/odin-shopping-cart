import { useState, useEffect } from "react";

import Card from "../../components/card/Card";

import "./shop.css";

export default function Shop(props) {

    const [ productDetails, setProductDetails ] = useState(null);
    const [ productDetailsError, setProductDetailsError ] = useState(null);
    const [ productDetailsLoading, setProductDetailsLoading ] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', 
            {
                mode: 'cors',
            }
        )   
        .then(response => response.json())
        .then(data => {
            const products = [];

            for (let i = 0; i <= 19; i++) {
                const product = {
                    id: data[i].id,
                    name: data[i].title,
                    desc: data[i].description,
                    price: data[i].price,
                    image: data[i].image,
                    quantity: null,
                };

                products.push(product);
            }

            setProductDetails(products);
        })
        .catch(error => setProductDetailsError(error))
        .finally(() => setProductDetailsLoading(false));
    }, []);

    function handleAddToCartClick(e) {
        console.log('clicked');
        const productId = e.target.parentElement.parentElement.parentElement.id;
        const quantityInput = document.querySelector(`#${productId} > .item-card-details > .item-card-details-mid > input`);

        productDetails.forEach( (product) => {
            if (productId == `card-${product.id}`) {
                for (let i = 0; i < props.cartItems.length; i++) {
                    if(props.cartItems[i].id === product.id) {
                        props.cartItems[i].quantity += Number(quantityInput.value);
                        console.log('match');

                        return;
                    }
                }
                product.quantity += Number(quantityInput.value);
                props.setCartItems([...props.cartItems, product]);
            } 
        });
    }

    if (productDetailsError) {
        return(
            <p> A network error was encountered</p>
        );
    }

    if (productDetailsLoading) {
        return (
            <div className="shop-page">
                <div className="shop-page-heading">
                    <h1>Loading...</h1> 
                </div>
            </div>
        );
    }

    return(
        <div className="shop-page">
            <div className="shop-page-heading">
                <h1>Available Items</h1>
            </div>
            <div className="shop-page-content">
                {productDetails && <Card productDetails={productDetails} handleAddToCartClick={(e) => handleAddToCartClick(e)}/>}
            </div>
        </div>
    );
}