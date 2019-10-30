import TRANSACTION_HISTORY from './actionTypes';

const initialState = {
  authorizedPerson: null,
  date: null,
  address: null,
  time: null,
  items:[
    {id: 1, type:'Paper', weight:10, date:'October 23, 2019', transactionNumber: '1090241', collector: 'Juan dela Cruz'},
    {id: 1, type:'Glass', weight:3, date:'October 24, 2019', transactionNumber: '1090242', collector: 'Juan dela Cruz'},
    {id: 1, type:'Plastic', weight:2 , date:'October 25, 2019', transactionNumber: '1090243', collector: 'Juan dela Cruz'}
  ],
  processing: false,
  refreshing: false,
}

const Pickup = (state = initialState, action) =>{
  switch (action.type){

    case TRANSACTION_HISTORY.AUTHORIZE: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.authorizedPerson = action.payload.authorizedPerson;
      
      return temp;
    }

    case TRANSACTION_HISTORY.SELECT_ADDRESS: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.address = action.payload;
      return temp;
    }

    case TRANSACTION_HISTORY.SELECT_DATE: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.date = action.payload;
      return temp;
    }

    case TRANSACTION_HISTORY.SELECT_TIME: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.time = action.payload;
      return temp;
    }


    default: return state;
  }
}

export default Pickup;