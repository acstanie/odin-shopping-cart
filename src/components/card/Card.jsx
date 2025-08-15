
import "./card.css"

export default function Card(props) {

    return(
        <>
            {props.productDetails.map((productDetail) => (
                <div id={productDetail.id} className="item-card" key={productDetail.id}>
                    <div className="item-card-img">
                        <img src={productDetail.image} alt=""/>
                    </div>
                    <div className="item-card-details">
                        <div className="item-card-details-top">
                            <h4 className="item-card-details-name">{productDetail.name}</h4>
                            <h4 className="item-card-details-price">${productDetail.price}</h4>
                        </div>
                        <div className="item-card-details-bottom">
                            <button className="add-to-cart-btn" onClick={props.handleAddToCartClick}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
        
    )
}