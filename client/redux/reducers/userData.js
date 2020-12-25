import axios from 'axios'

const initialState = {
  users: [],
  selected: []
}
const GET_USERS = 'GET_USERS'
const SET_SELECTED = 'SET_SELECTED'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.users }
    case SET_SELECTED:
      if (action.selected.status && state.selected.length < state.users.length) {
        return { ...state, selected: [...state.selected, action.selected] }
      }
      return { ...state, selected: state.selected.filter((el) => el.id !== action.selected.id) }
    default:
      return state
  }
}

export const getUsers = () => {
  return (dispatch) => {
    axios('https://jsonplaceholder.typicode.com/users').then(({ data }) =>
      dispatch({ type: GET_USERS, users: data })
    )
  }
}
