import React from 'react'
import { Container, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items;
    const classes = useStyles();
    console.log(cart);

    const EmptyCart = () => (
        <Typography variant="subtitle1"> You have no items in your shopping cart, start adding Somg </Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
                    <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );
    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title}>You Shooping Cart</Typography>
                {isEmpty ? <EmptyCart /> : <FilledCart />}
            </div>
        </Container>
    )
}

export default Cart;
