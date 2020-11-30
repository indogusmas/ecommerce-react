import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core';
import useStyles  from './styles';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
              <Toolbar>
                  <Typography variant="h6" className={classes.title} color="inherit">
                      <img src="https://image.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg" alt="Commerce.js" height="40px" className={classes.image}/>
                      Indo Store
                  </Typography>
                  <div className={classes.grow}></div>
                  <div className={classes.button}>
                      <IconButton aria-label="Show cart Items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart/>
                          </Badge>
                      </IconButton>
                  </div>
              </Toolbar>
            </AppBar>  
        </>
    )
}

export default Navbar
