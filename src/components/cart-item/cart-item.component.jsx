import React from "react";

import {
    CartItemContainer,
    CartItemDetailsContainer,
    CartItemImage,
    CartItemDetailsName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item" />
        <CartItemDetailsContainer>
            <CartItemDetailsName>{name}</CartItemDetailsName>
            <span className="price">
                {quantity} x ${price}
            </span>
        </CartItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;
