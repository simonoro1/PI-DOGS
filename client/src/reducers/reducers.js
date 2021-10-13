import { GET_DOGS, CHANGE_PAGE, GET_ID, BACK_PAGE, ORDER_A, ORDER_Z, ORDER_WEIGHT, SEARCH_DOGS, FIND_TEMP, GET_TEMPERAMENTS, GET_CREATED, DELETE_FILTER } from "../actions/actions"

const initialState = {
    dogs: [],
    dogsCopy: [],
    page: 1,
    dogsLoaded: [],
    detailDog: [],
    favoritesDogs: [],
    createdDogs: [],
    loaded: false,
    temperaments: [],
    tempFilter: [],
    cache: []
    
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
                dogsCopy: action.payload,
                dogsLoaded: action.payload.slice(0,8),
                page:1,
                tempFilter:[],
                loaded: true
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload + 1, 
                dogsLoaded: state.dogsCopy.slice((action.payload)*8, (action.payload + 1) *8)
            }
        case BACK_PAGE: 
            return {
                ...state,
                page: action.payload - 1,
                dogsLoaded:  state.dogsCopy.slice((action.payload - 2 )*8, (action.payload - 1) *8)
            }     
        case GET_ID:
            return {
                ...state,
                detailDog: action.payload
            }
        case ORDER_A:
            let orderedDogsA = state.dogsCopy.sort((a,b) => compareDogsA(a,b))
            return {
                ...state,
                dogsCopy: orderedDogsA,
                dogsLoaded:  orderedDogsA.slice(0,8),
                page:1

            }                
        case ORDER_Z:
            let orderedDogsZ = state.dogsCopy.sort((a,b) => compareDogsZ(a,b))
            return {
                ...state,
                dogsCopy: orderedDogsZ,
                dogsLoaded: orderedDogsZ.slice(0,8),
                page:1,
            }
        case ORDER_WEIGHT:
            let weight = action.weight
            let orderedWeights = state.dogsCopy.sort((a,b) => compareWeights(a,b,weight))
            return {
                ...state,
                dogs: orderedWeights,
                dogsLoaded: orderedWeights.slice(0,8),
                page: 1
            }
        case SEARCH_DOGS:
            
            return {
                ...state,
                dogsCopy: action.payload,
                dogsLoaded: action.payload.slice(0,8),
                page: 1
            }
        case FIND_TEMP:
            let findTemp = state.dogsCopy.filter((dog) => {
                return dog.temperament.includes(action.payload)
            })
            return {
                ...state,
                dogsCopy: findTemp,
                cache: state.dogsCopy,
                dogsLoaded: findTemp.slice(0,8),
                tempFilter: state.tempFilter.concat(action.payload),
                page: 1

            }
        case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperaments: action.payload,
            }
        case GET_CREATED:
            let value = action.payload.target.id
            console.log(value)
            if(value === 'existing') {
                let filtered1 = state.dogs.filter( dog => dog.id <= 1000)
                console.log(filtered1)

                return {
                    ...state,
                    dogsCopy: filtered1,
                    dogsLoaded: filtered1.slice(0,8),
                    page: 1                    
                }
            }
            else {
                let filtered2 = state.dogs.filter(dog => dog.id > 1000)
                return {
                    ...state,
                    dogsCopy: filtered2,
                    dogsLoaded: filtered2.slice(0,8),
                    page: 1
                }
            }
        case DELETE_FILTER:
            let deleted = state.tempFilter
            deleted.splice(action.payload.target.id,1)

            return {
                ...state,
                tempFilter: deleted,
                dogsCopy: state.cache,
                dogsLoaded: state.cache.slice(0,8),
                page: 1,

            }


        default: 
        
            return state;
    }


  }
  
  export default rootReducer;