export const GET_DOGS  = 'GET_DOGS';
export const CHANGE_PAGE  = 'CHANGE_PAGE';
export const GET_ID = 'GET_ID'
export const BACK_PAGE  = 'BACK_PAGE';
export const ORDER_A = 'ORDER_A';
export const ORDER_Z = 'ORDER_Z';
export const ORDER_WEIGHT = 'ORDER_WEIGHT';
export const SEARCH_DOGS = 'SEARCH_DOGS';
export const FIND_TEMP = 'FIND_TEMP';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';



export const fetchDogs = () => {
    return function(dispatch){
        // console.log('perritos')
        fetch('/dogs')
        .then(response => response.json())
        .then(response => {
            response.map( dog => {
                if(!dog.temperament) {
                    return dog.temperament = "Affectoinate, Playful, Companionable, Alert"
                }
                if(dog.id === 232) {
                    return dog.weight.imperial = '18 - 25'
                }
                return dog.weight.imperial= dog.weight.imperial.split(' ')[0];
            })
            dispatch({type: GET_DOGS, payload: response})
        })
        
    }
}


export const changePage = (page) => {
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}

export const backPage = (page) => {
    return {
        type: BACK_PAGE,
        payload: page
    }
}



export const fetchDetail = (id) => {
    return function(dispatch){
        // console.log('perritos')
        fetch(`/dogs/${id}`)
        .then(response => response.json())
        .then(response  =>  { 
            response.map( dog => {
                if(!dog.temperament) {
                return dog.temperament = "Affectoinate, Playful, Companionable, Alert"
                }
                if(dog.id === 232) {
                return dog.weight.imperial = '18 - 25'
                }
                if(dog.id === 179) {
                    return dog.weight.imperial = '65 - 85'
                }
            })
            dispatch({type: GET_ID, payload: response})
        })
    }
}


export const orderA = (page) => {
    return {
        type: ORDER_A,
        payload: page
        
    }
}

export const orderZ = (page) => {
    return {
        type: ORDER_Z,
        payload: page

    }
}



export const orderWeight = (page, weight) => {
    return {
        type: ORDER_WEIGHT,
        payload: page,
        weight: weight
        
    }
}

export const searchDogs = (input) => {
    return function(dispatch){
        // console.log('perritos')
        fetch(`/dogs?name=${input}`)
        .then(response => response.json())
        .then(response => {
            response.map( dog => {
                if(!dog.temperament) {
                    return dog.temperament = "Affectoinate, Playful, Companionable, Alert"
                }
                if(dog.id === 232) {
                    return dog.weight.imperial = '18 - 25'
                }
                return dog.weight.imperial= dog.weight.imperial.split(' ')[0];
            })
            dispatch({type: SEARCH_DOGS, payload: response})
        })
    }   
}


export const findTemperament = (temperament) => {
    return {
        type: FIND_TEMP,
        payload: temperament

    }
}


export const getTemperaments = () => {
    return  function(dispatch) {
        fetch('/temperament')
        .then(response => response.json())
        .then(response => {
            dispatch({type: GET_TEMPERAMENTS, payload: response })
        })
    }
}