import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.actions';

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
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
