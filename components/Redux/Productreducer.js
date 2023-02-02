export const productReducer=(state={cart:[],products:[],selectedProducts:[]},action)=>{
    if(action.type === "Add_Products"){
        return {...state,products:[...action.data,...state.products]}
    }
    if(action.type === "View_Details"){
        return {...state,selectedProducts:[action.data]}
    }
    if(action.type === "Add-To-Cart"){
        return {...state,cart:[{...action.data,key:state.cart.length},...state.cart]}
    }
    if(action.type === "Remove_Products"){
        const filtered=  state.cart.filter((item)=> item !== action.data)
        return {...state,cart:filtered}
    }
    return state;
}