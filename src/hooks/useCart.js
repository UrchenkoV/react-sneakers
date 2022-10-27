import {useContext} from "react"
import AppContext from "../context";

export const useCart = () => {
  const {cartProducts, setCartProducts} = useContext(AppContext)
  const cartResultPrice = cartProducts.reduce((sum, val) => sum + val.price, 0)

  return {cartResultPrice, cartProducts, setCartProducts}
}