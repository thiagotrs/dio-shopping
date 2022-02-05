import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List } from '@mui/material';
import Item from '../components/Item';
import Card from '../components/Card';
import { ProductState } from '../store/reducers/products';

type RootState = {
  products: ProductState[]
}

const HomePage = () => {
  const products = useSelector((state: RootState) => state.products)

  const categorys = products.map(
    category => ({
      id: category.id_categorys,
      name: category.name_categorys
    })
  )

  const category = categorys.filter(function (item, index, arr) {
    return arr.indexOf(item, index + 1) === -1;
  })

  const arrayCategory = categorys.map(category => category.name)
  let count: any = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    {
      let key = arrayCategory[i];
      count[key] = (count[key] ? count[key] + 1 : 1)
    }
  }

  return (
    <Grid container spacing={3} flexGrow={1} marginTop={'5px'}>
      <Grid item xs={3}>
        <Paper sx={{ textAlign: 'center', padding: theme => theme.spacing(2) }}>
          <Typography variant='h5'>
            Categorias
          </Typography>
          <List>
            {category.map(
              category => {
                return (
                  <Item
                    key={category.id}
                    name={category.name}
                    details={count[category.name]}
                  />
                )
              }
            )}
          </List>
        </Paper>
      </Grid>
      <Grid container xs={9} spacing={3} flexGrow={1} marginTop={'5px'}>
        {products.map(item => {
          return (
            <Card
              key={item.id_product}
              product={item}
            >
              {item.name_product}
            </Card>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default HomePage;