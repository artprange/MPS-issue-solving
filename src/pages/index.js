// aqui vou setar todos os arquivos que vou exportar e exportar em bloco,
// ao invés de importar no App.js um por um.

import About from './AboutPage'
import Auth from './AuthWrapper'
import Cart from './CartPage'
import Checkout from './CheckoutPage'
import Error from './ErrorPage'
import Home from './HomePage'
import PrivateRoute from './PrivateRoute'
import Products from './ProductsPage'
import SingleProduct from './SingleProductPage'

export {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
}
