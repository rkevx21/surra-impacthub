import PICKUP_POINT from './actionTypes';

// Action Creators

export const load = payload =>{
  return {type: PICKUP_POINT.LOAD, payload: payload}
}

export const refresh = payload =>{
  return {type: PICKUP_POINT.REFRESH, payload: payload}
}

export const accept = payload =>{
  return {type: PICKUP_POINT.ACCEPT, payload: payload}
}

export const select = payload =>{
  return {type: PICKUP_POINT.SELECT, payload: payload}
}

export const done = payload =>{
  return {type: PICKUP_POINT.DONE, payload: payload}
}


// Thunk Actions

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

export const onAccept = payload =>{
  return dispatch => {
    dispatch(accept(payload));
  }
}

export const onSelect = payload =>{
  return dispatch => {
    dispatch(select(payload));
  }
}

export const onDone = payload =>{
  return dispatch => {
    dispatch(done(payload));
  }
}

