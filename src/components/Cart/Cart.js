import { useContext } from 'react';
import CartContex from '../../store/cart-context';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContex);

    const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {

    }

    const cartItemAddHanlder = item => {

    }

    const cartItems =
        <ul className={classes['cart-items']}>{cartCtx.items.map(item =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHanlder.bind(null, item)}
            />)}
        </ul>

    return (<Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['buton--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>)
}

export default Cart;