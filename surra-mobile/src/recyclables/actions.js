import RECYCLABLES from './actionTypes';

// Action Creators
 export const add = payload =>{
   return {type: RECYCLABLES.ADD, payload: payload}
 }

export const load = payload =>{
  return {type: RECYCLABLES.LOAD, payload: payload}
}

export const refresh = payload =>{
  return {type: RECYCLABLES.REFRESH, payload: payload}
}

export const getPercentage = payload =>{
  return {type: RECYCLABLES.GET_PERCENTAGE, payload: payload}
}

// Thunk Actions
export const onAdd = payload =>{
  return dispatch => {
    dispatch(add(payload));
    dispatch(getPercentage(payload));
  }
}

export const onRefresh = payload =>{
  return dispatch => {
    dispatch(refresh(payload));
  }
}

export const onLoad = payload =>{
  return dispatch => {
    dispatch(load(payload));
  }
}

export const onGetPercentage = payload =>{
  return dispatch => {
    dispatch(getPercentage(payload));
  }
}