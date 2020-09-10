import React, { useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState';

import styles from './CartBadge.module.css';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


export default function CartBadge() {

    const { cart, getTotal } = useContext(GlobalContext);

  return (
      <Link to="cart" className={styles.link} onClick={() => getTotal()}>
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon style={{color: '#fff'}} />
        </StyledBadge>
        </IconButton>
    </Link>
  );
}
