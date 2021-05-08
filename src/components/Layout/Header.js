import React, { Fragment } from "react";
import restaurantImg from '../../assets/restaurant.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Xin Chao Restaurant</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={restaurantImg} alt="A nice restaurant" />
        </div>
    </Fragment>
};

export default Header;