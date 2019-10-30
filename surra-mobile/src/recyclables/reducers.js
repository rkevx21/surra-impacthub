import RECYCLABLES from './actionTypes';
import RECYCLABLE_TYPES from './recyclableTypes';

const initialState = {
  plasticList: [
    {id: 1, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price:100},
    {id: 2, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price:200},
    {id: 3, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:300},
    {id: 4, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:400},
    {id: 5, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:500},
  ],
  paperList:[
    {id: 1, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price:100},
    {id: 2, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price:200},
    {id: 3, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:300},
    {id: 4, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:400},
    {id: 5, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:500},
  ],
  glassList: [
    {id: 1, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price:100},
    {id: 2, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr', price:200},
    {id: 3, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:300},
    {id: 4, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:400},
    {id: 5, name:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',price:500},
  ],
  processing: false,
  refreshing: false,
}

const Recyclables = (state = initialState, action) =>{
  switch (action.type){

    case RECYCLABLES.ADD: {
      let temp = JSON.parse(JSON.stringify(state));
      if(action.payload.type == RECYCLABLE_TYPES.GLASS){
        temp.glassList.push(action.payload.item);
      }

      if(action.payload.type == RECYCLABLE_TYPES.PAPER){
        temp.paperList.push(action.payload.item);
      }

      if(action.payload.type == RECYCLABLE_TYPES.PLASTIC){
        temp.plasticList.push(action.payload.item);
      }
      
      return temp;
    }

    case RECYCLABLES.LOAD: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.plasticList = action.payload.plasticList;
      temp.glassList = action.payload.glassList;
      temp.paperList = action.payload.paperList;
      return temp;
    }

    case RECYCLABLES.REFRESH: {
      let temp = JSON.parse(JSON.stringify(state));
      temp.refreshing = action.payload;
      return temp;
    }

    default: return state;
  }
}

export default Recyclables;