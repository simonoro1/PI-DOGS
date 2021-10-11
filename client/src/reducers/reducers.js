import { GET_DOGS, CHANGE_PAGE, GET_ID, BACK_PAGE, ORDER_A, ORDER_Z, ORDER_WEIGHT, SEARCH_DOGS, FIND_TEMP, GET_TEMPERAMENTS } from "../actions/actions"

const initialState = {
    dogs: [],
    page: 1,
    dogsLoaded: [],
    detailDog: [],
    favoritesDogs: [],
    createdDogs: [],
    loaded: false,
    temperaments: []
}

const compareDogsA = (a,b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;     
}

const compareDogsZ = (a,b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() === b.name.toLowerCase()) return 0;     
}

const compareWeights = (a,b, weight) => {
    if( weight === 'light') {
        console.log('light')
        if (Number(a.weight.imperial) > Number(b.weight.imperial)) return 1;
        if (Number(a.weight.imperial) < Number(b.weight.imperial)) return -1;
        if (Number(a.weight.imperial) === Number( b.weight.imperial)) return 0;   
    }
    else {
        console.log('heavy')
        if (Number(a.weight.imperial) > Number(b.weight.imperial)) return -1;
        if (Number(a.weight.imperial) < Number(b.weight.imperial)) return 1;
        if (Number(a.weight.imperial) === Number(b.weight.imperial)) return 0;   
    }
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
        case ORDER_A:
            let orderedDogsA = state.dogs.sort((a,b) => compareDogsA(a,b))
            return {
                ...state,
                dogs: orderedDogsA,
                dogsLoaded:  orderedDogsA.slice(0,8),
                page:1

            }                
        case ORDER_Z:
            let orderedDogsZ = state.dogs.sort((a,b) => compareDogsZ(a,b))
            return {
                ...state,
                dogs: orderedDogsZ,
                dogsLoaded: orderedDogsZ.slice(0,8),
                page:1,
            }
        case ORDER_WEIGHT:
            let weight = action.weight
            let orderedWeights = state.dogs.sort((a,b) => compareWeights(a,b,weight))
            return {
                ...state,
                dogs: orderedWeights,
                dogsLoaded: orderedWeights.slice(0,8),
                page: 1
            }
        case SEARCH_DOGS:
            
            return {
                ...state,
                dogs: action.payload,
                dogsLoaded: action.payload.slice(0,8),
                page: 1
            }
        case FIND_TEMP:
            console.log(action.payload)
            let findTemp = state.dogs.filter((dog) => {
                return dog.temperament.includes(action.payload)
            })
            return {
                ...state,
                dogs: findTemp,
                dogsLoaded: findTemp.slice(0,8),
                page: 1

            }
        case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperaments: action.payload,
            }
        default: 
        
            return state;
    }


  }
  
  export default rootReducer;