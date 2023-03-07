import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  Header,
  Total,
} from './checkout.styles.jsx';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <Header>
          <span>Product</span>
        </Header>
        <Header>
          <span>Description</span>
        </Header>
        <Header>
          <span>Quantity</span>
        </Header>
        <Header>
          <span>Price</span>
        </Header>
        <Header>
          <span>Remove</span>
        </Header>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total as='span'>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
