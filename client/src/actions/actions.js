export const GET_DOGS  = 'GET_DOGS';
export const CHANGE_PAGE  = 'CHANGE_PAGE';
export const GET_ID = 'GET_ID'
export const BACK_PAGE  = 'BACK_PAGE';


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
        .then(response  => dispatch({type: GET_ID, payload: response}))
    }
}
