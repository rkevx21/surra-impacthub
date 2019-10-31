import PICKUP_POINTS from './actionTypes';

const initialState = {
  items: [
    {
      id: 1,
      date: 'October 23, 2019',
      transactionNumber: '123456',
      pending: true,
      lat: 0,
      lng: 0,
      authorizedPerson: 'Juan dela Cruz',
      items:[
        {id: 1, name:'Plastics', measurement: 20, unit:'pc'},
        {id: 2, name:'Paper', measurement: 30, unit:'kg'},
        {id: 3, name:'Glass', measurement: 50, unit:'pc'}
      ]
    },
    {
      id: 2,
      date: 'October 24, 2019',
      transactionNumber: '123457',
      pending: true,
      lat: 0,
      lng: 0,
      authorizedPerson: 'Jane Smith',
      items:[
        {id: 1, name:'Plastics', measurement: 20},
        {id: 2, name:'Paper', measurement: 30},
        {id: 3, name:'Glass', measurement: 50}
      ]
    },
    {
      id: 3,
      date: 'October 25, 2019',
      transactionNumber: '123458',
      pending: true,
      lat: 0,
      lng: 0,
      authorizedPerson: 'John Doe',
      items:[
        {id: 1, name:'Plastics', measurement: 20},
        {id: 2, name:'Paper', measurement: 30},
        {id: 3, name:'Glass', measurement: 50}
      ]
    },
  ],
  currentIndex: 0,
  processing: false,
  refreshing: false,
};

const PickupPoint = (state = initialState, action) => {
  switch (action.type) {
    case PICKUP_POINTS.LOAD: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.items = action.payload;

      return temp;
    }

    case PICKUP_POINTS.REFRESH: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.refreshing = action.payload;
      return temp;
    }

    case PICKUP_POINTS.ACCEPT: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.items[action.payload.index].accepted = true;
      return temp;
    }

    case PICKUP_POINTS.SELECT: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.currentIndex = action.payload;
      return temp;
    }

    default:
      return state;
  }
};

export default PickupPoint;
