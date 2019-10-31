import PICKUP from './actionTypes';

const initialState = {
  authorizedPerson: null,
  date: null,
  address: null,
  time: null,
  items:[
    {id: 1, type:'Paper', weight:10},
    {id: 1, type:'Glass', weight:3},
    {id: 1, type:'Plastic', weight:2}
  ],
  processing: false,
  refreshing: false,
}

const Pickup = (state = initialState, action) =>{
  switch (action.type){

    case PICKUP.AUTHORIZE: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.authorizedPerson = action.payload.authorizedPerson;
      
      return temp;
    }

    case PICKUP.SELECT_ADDRESS: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.address = action.payload;
      return temp;
    }

    case PICKUP.SELECT_DATE: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.date = action.payload;
      return temp;
    }

    case PICKUP.SELECT_TIME: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.time = action.payload;
      return temp;
    }


    default: return state;
  }
}

export default Pickup;