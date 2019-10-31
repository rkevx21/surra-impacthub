import RECYCLABLES from './actionTypes';
import RECYCLABLE_TYPES from './recyclableTypes';

const initialState = {
  plasticList: [
  ],
  paperList:[
  ],
  glassList: [
  ],
  plasticCount:0,
  glassCount: 0,
  paperCount:0,
  percentage: 0,
  processing: false,
  refreshing: false,
}

const Recyclables = (state = initialState, action) =>{
  switch (action.type){

    case RECYCLABLES.ADD: {
      let temp = JSON.parse(JSON.stringify(state));
      if(action.payload.type == RECYCLABLE_TYPES.GLASS){
        temp.glassList.push(action.payload.item);
        temp.glassCount = temp.glassCount + parseInt(action.payload.item.measurement); 
      }

      if(action.payload.type == RECYCLABLE_TYPES.PAPER){
        temp.paperList.push(action.payload.item);
        temp.paperCount = temp.paperCount + parseInt(action.payload.item.measurement); 
      }

      if(action.payload.type == RECYCLABLE_TYPES.PLASTIC){
        temp.plasticList.push(action.payload.item);
        temp.plasticCount = temp.plasticCount + parseInt(action.payload.item.measurement); 
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

    case RECYCLABLES.GET_PERCENTAGE :{
      let temp = JSON.parse(JSON.stringify(state));
      temp.percentage = ((temp.plasticCount + temp.glassCount + temp.paperCount) / 50) * 100;
      return temp;
    }

    default: return state;
  }
}

const calculatePercentage = (state) =>{
  let temp = 0;
  let temp_glass = 0;
  let temp_paper = 0;
  let temp_plastic = 0;
  state.glassList.map(item =>{
    return temp += item.measurement
  });

  temp_glass = temp;
  temp=0;

  state.paperList.map(item =>{
    return temp += item.measurement
  });

  temp_paper = temp;
  temp=0;

  state.plasticList.map(item =>{
    return temp += item.measurement
  });

  temp_plastic = temp;
  temp=0;

  return ((temp_plastic + temp_glass + temp_paper) / 50) * 100;

}

export default Recyclables;