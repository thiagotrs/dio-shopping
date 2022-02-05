import productsList from './product';

export type ProductState = {
  id_product: number,
  category: string,
  fk_idcategorys: number,
  name_product: string,
  price: number,
  image: string,
  id_categorys: number,
  name_categorys: string,
  selected: boolean
}

const PRODUCT: ProductState[] = productsList;

export default function products(state = PRODUCT) {
  return state;
}