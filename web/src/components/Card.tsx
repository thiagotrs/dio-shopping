import { Paper, Grid, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import { CartState } from '../store/reducers/cart';
import { ProductState } from '../store/reducers/products';

// type Product = {
//   image: string,
//   name_product: string,
//   price: number
// }

type RootState = {
  cart: CartState
}

const Card: React.FC<{ product: ProductState }> = ({ product, children }) => {
  const cart = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch();

  return (
    <Grid item xs={3}>
      <Paper sx={{ textAlign: 'center', padding: theme => theme.spacing(2) }}>
        <Grid container direction='column'>
          <Grid item>
            <img width="140px" src={product.image} alt={product.name_product} />
            <Typography variant='h6'>
              {children}
            </Typography>
            <Typography variant='subtitle1'>
              R$ {product.price.toFixed(2)}
            </Typography>
          </Grid>

          <Button
            variant="contained"
            onClick={() => dispatch(cartActions.Add(cart, product))}
          >
            Adicionar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Card;