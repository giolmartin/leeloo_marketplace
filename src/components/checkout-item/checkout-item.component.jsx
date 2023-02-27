import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NamePriceStyle,
  QuantityStyle,
  ArrowStyle,
  ValueStyle,
  RemoveButtonStyle,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const addItemHandler = () => addItemToCart(cartItem);

  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePriceStyle>{name}</NamePriceStyle>
      <QuantityStyle>
        <ArrowStyle onClick={removeItemHandler}>&#10094;</ArrowStyle>
        <ValueStyle>{quantity}</ValueStyle>
        <ArrowStyle onClick={addItemHandler}>&#10095;</ArrowStyle>
      </QuantityStyle>
      <NamePriceStyle>{price}</NamePriceStyle>
      <RemoveButtonStyle onClick={clearItemHandler}>&#10005;</RemoveButtonStyle>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
