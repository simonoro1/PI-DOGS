export const GET_DOGS  = 'GET_DOGS';


export const fetchDogs = () => {
    return function(dispatch){
        // console.log('perritos')
        fetch('/dogs')
        .then(response => response.json())
        .then(response  => dispatch({type: GET_DOGS, payload: response}))
    }
}