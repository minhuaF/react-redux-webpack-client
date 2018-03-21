// constant
const GET_DATA = 'GET_DATA'
const CHANGE_DATA = 'CHANGE_DATA'

// action
export const getData = () => {
  type: GET_DATA
}

export const changeData = (payload) => {
  type: CHANGE_DATA,
  payload
}

// action Creater

/**
 * 修改标题
 * @param {String} param  -需要修改的参数
 */
const changeDataHandler = (param) => (getState, dispatch) => {
  return dispatch(changeData(param))
}

// reducer
export default (state = {
  title: '默认标题'
}, action) => {
  switch (action.type) {
    case GET_DATA: 
      return {
        ...state
      }
    case CHANGE_DATA:
      return {
        ...state,
        title: action.payload
      }
    default:
      return state
  }
}
