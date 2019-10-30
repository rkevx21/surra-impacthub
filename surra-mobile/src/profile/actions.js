import PROFILE from './actionTypes';

// Action Creators
 export const save = payload =>{
   return {type: PROFILE.SAVE, payload: payload}
 }

export const load = payload =>{
  return {type: PROFILE.LOAD, payload: payload}
}

export const refresh = payload =>{
  return {type: PROFILE.REFRESH, payload: payload}
}

export const editName = payload =>{
  return {type: PROFILE.EDIT_NAME, payload: payload}
}

export const editAddress = payload =>{
  return {type: PROFILE.EDIT_ADDRESS, payload: payload}
}

export const editBirthday = payload =>{
  return {type: PROFILE.EDIT_BIRTHDAY, payload: payload}
}

export const addAddress = payload =>{
  return {type: PROFILE.ADD_ADDRESS, payload: payload}
}

export const removeAddress = payload =>{
  return {type: PROFILE.REMOVE_ADDRESS, payload: payload}
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

export const onEditName = payload =>{
  return dispatch => {
    dispatch(editName(payload));
  }
}

export const onEditAddress = payload =>{
  return dispatch => {
    dispatch(editAddress(payload));
  }
}

export const onEditBirthday = payload =>{
  return dispatch => {
    dispatch(editBirthday(payload));
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

