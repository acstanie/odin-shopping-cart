import { useState } from "react";
import "./card.css"

export default function Card(props) {
    
    function handleIncreaseClick(e) {
        let quantityInput = e.target.previousElementSibling;
        quantityInput.value++;
    }

     function handleDecreaseClick(e) {
        let quantityInput = e.target.nextElementSibling;
        if (quantityInput.value > 0) {
            quantityInput.value--;
        }
    }

    return(
        <>
            {props.productDetails.map((productDetail) => (
                <div id={`card-${productDetail.id}`} className="item-card" key={productDetail.id}>
                    <div className="item-card-img">
                        <img src={productDetail.image} alt=""/>
                    </div>
                    <div className="item-card-details">
                        <div className="item-card-details-top">
                            <h4 className="item-card-details-name">{productDetail.name}</h4>
                            <h4 className="item-card-details-price">${productDetail.price}</h4>
                        </div>
                        <div className="item-card-details-bottom">
                            <div>
                                <button className="decrease-quantity" onClick={(e) => handleDecreaseClick(e)}>-</button>
                                <input id={`quantity-${productDetail.id}`} className="quantity" type="number" min={0} defaultValue={1}/>
                                <button className="increase-quantity" onClick={(e) => handleIncreaseClick(e)}>+</button>
                            </div>
                            <div>
                                <button className="add-to-cart-btn" onClick={props.handleAddToCartClick}><i className="fa-solid fa-cart-arrow-down"></i></button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            ))}
        </>
        
    )
}