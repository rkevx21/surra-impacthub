import PICKUP from './actionTypes';

// Action Creators
 export const authorize = payload =>{
   return {type: PICKUP.AUTHORIZE, payload: payload}
 }

export const load = payload =>{
  return {type: PICKUP.LOAD, payload: payload}
}

export const refresh = payload =>{
  return {type: PICKUP.REFRESH, payload: payload}
}

export const save = payload =>{
  return {type: PICKUP.SAVE, payload: payload}
}

export const schedule = payload =>{
  return {type: PICKUP.SCHEDULE, payload: payload}
}

export const selectAddress = payload =>{
  return {type: PICKUP.SELECT_ADDRESS, payload: payload}
}

export const selectDate = payload =>{
  return {type: PICKUP.SELECT_DATE, payload: payload}
}

export const selectTime = payload =>{
  return {type: PICKUP.SELECT_TIME, payload: payload}
}

// Thunk Actions
export const onSave = payload =>{
  return dispatch => {
    dispatch(save(payload));
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

export const onAuthorize = payload =>{
  return dispatch => {
    dispatch(authorize(payload));
  }
}

export const onSchedule = payload =>{
  return dispatch => {
    dispatch(schedule(payload));
  }
}

export const onSelectAddress = payload =>{
  return dispatch => {
    dispatch(selectAddress(payload));
  }
}

export const onAddAddress = payload =>{
  return dispatch => {
    dispatch(editBirthday(payload));
  }
}

export const onRemoveAddress = payload =>{
  return dispatch => {
    dispatch(removeAddress(payload));
  }
}

