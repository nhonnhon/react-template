import { CALL_API_SUCCESS } from 'constants/temp'

const callApi = () => {
  return dispatch => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(resp => resp.json())
      .then(json => {
        dispatch({
          type: CALL_API_SUCCESS,
          payload: json,
        })
      })
      .catch(error => {
        console.log('error', error)
      })
  }
}

export { callApi }
