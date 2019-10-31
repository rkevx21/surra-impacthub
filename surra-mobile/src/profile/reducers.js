import PROFILE from './actionTypes';

const initialState = {
  name: 'Ira Allison Dimco',
  birthday: 'September 8, 1993',
  addresses: [
    {id: 1, address: '123 St. Name City'},
    {id: 2, address: '456 St. Name City'},
    {id: 3, address: '789 St. Name City'}
  ],
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