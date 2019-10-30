import PROFILE from './actionTypes';

const initialState = {
  name: null,
  birthday: null,
  addresses: [],
  processing: false,
  refreshing: false,
}

const Profile = (state = initialState, action) =>{
  switch (action.type){

    case PROFILE.LOAD: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.name = action.payload.name;
      temp.birthday = action.payload.birthday;
      temp.addresses = action.payload.addresses;
      
      return temp;
    }

    case PROFILE.REFRESH: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.refreshing = action.payload;
      return temp;
    }

    default: return state;
  }
}

export default Profile;