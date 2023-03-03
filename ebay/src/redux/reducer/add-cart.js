const initialState = {
    cartProducts : []
}
const cartReducer = (state = initialState , action) =>{
    console.log(action);

    switch(action.type){
        case "CART_PRODUCT":
            return {
                cartProducts: [...state.cartProducts, action.data]
            }
        case "REMOVE_FROM_CART_PRODUCT":
            let removedProductIndex = state.cartProducts.findIndex(p => p?.id === action?.id)
            state.cartProducts.splice(removedProductIndex, 1)
            return {
                cartProducts: [...state.cartProducts]
            }
            default :
                return state
    }
}

export default cartReducer;