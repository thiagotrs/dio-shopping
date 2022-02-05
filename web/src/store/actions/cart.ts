import { CartState, ItemState } from "../reducers/cart"
import { ProductState } from "../reducers/products"

const Add = (cart: number, product: ProductState) => {
  return {
    type: 'ADD_TO_CART',
    cart,
    product
  }
}

const AddItem = (cart: CartState, product: ItemState) => {
  return {
    type: 'ADD_ITEM',
    cart,
    product
  }
}

const RemoveItem = (cart: CartState, product: ItemState) => {
  return {
    type: 'REMOVE_ITEM',
    cart,
    product
  }
}

const DeleteItem = (cart: CartState, product: ItemState) => {
  return {
    type: 'DELETE_ITEM',
    cart,
    product
  }
}

const ChangeCart = (localCart: CartState) => {
  return {
    type: 'CHANGE_CART',
    localCart
  }
}

export default {
  Add,
  AddItem,
  RemoveItem,
  DeleteItem,
  ChangeCart
}