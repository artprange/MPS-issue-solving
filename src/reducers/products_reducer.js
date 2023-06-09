import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    //testadinha básica
    console.log(action)
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    //testadinha básica
    console.log(action)
    return { ...state, isSidebarOpen: false }
  }
  //arrumando o products_context
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (procuct) => products_reducer.featured === true
    )
    // quebrou porque não tem return!
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    }
  }
  // se não carrega, mostra o erro
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      //se nao carregar o sigle, mostra tudo
      ...state,
      single_product_loading: true,
      single_product_error: false,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    }
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
