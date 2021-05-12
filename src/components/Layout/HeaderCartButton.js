import {useContext, useEffect, useState} from 'react';

import CartIcon from "../Cart/CartIcon"
import CartContex from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHightlighted, setBtnIsHightlighted] = useState(false);
    const cartCtx = useContext(CartContex);

    const {items} = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    

    const btnClasses = `${classes.button} ${btnIsHightlighted ? classes.bump : ""}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHightlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHightlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items, cartCtx.items.length]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;