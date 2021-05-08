import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().lenght === 0 || enteredAmountNumber < 1) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label='Amount' 
        input={{
            type: 'number',
            id: 'amount_' + props.id,
            min: '0',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount!</p>}
    </form>
}

export default MealItemForm;