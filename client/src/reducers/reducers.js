import { GET_DOGS, CHANGE_PAGE, GET_ID, BACK_PAGE } from "../actions/actions"

const initialState = {
    dogs: [],
    page: 1,
    dogsLoaded: [],
    detailDog: [],
    favoritesDogs: [],
    createdDogs: [],
    loaded: false,
}


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsLoaded: action.payload.slice(0,8),
                loaded: true
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload + 1, 
                dogsLoaded: state.dogs.slice((action.payload)*8, (action.payload + 1) *8)
            }
        case BACK_PAGE: 
            return {
                ...state,
                page: action.payload - 1,
                dogsLoaded:  state.dogs.slice((action.payload - 2 )*8, (action.payload - 1) *8)
            }     
        case GET_ID:
            return {
                ...state,
                detailDog: action.payload
            }            
            
        default: 
        
            return state;
    }


  }
  
  export default rootReducer;