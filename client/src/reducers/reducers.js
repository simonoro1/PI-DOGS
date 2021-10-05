import { GET_DOGS } from "../actions/actions"

const initialState = {
    dogsLoaded: [],
    favoritesDogs: [],
    createdDogs: [],
    loaded: false,
}


function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogsLoaded: action.payload
            }
        default: 
        
            return state;
    }
  }
  
  export default rootReducer;