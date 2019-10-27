import { CALL_API_SUCCESS } from 'constants/temp'

const initialState = {
  data: null,
}

export default function temp(state = initialState, { type, payload, error }) {
  switch (type) {
    case CALL_API_SUCCESS:
      return { ...state, data: payload }
    default:
      return state
  }
}
