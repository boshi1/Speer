import {
  Get_Profile,
  Clean,
  ErrorFullfilled,
} from '../action/actionTypes';

const INTIAL_STATE = {
  Profiles:[],

};

function InseartAnswer(NewItem,StateArray){

StateArray.push(NewItem)
return StateArray

}
const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Clean:
      return {...state, [action.state]: []};
    case Get_Profile:
      
     return {...state, [action.state]: [...state.Profiles,...action.payload]};
  
  default:
      return state;
  }
};

export const fetchData = (data, State,AddBoolean) => {

  return {
    type: Get_Profile,
    state: State,
    payload: data,
  };
};
export const SetError = (data, State,) => {

  return {
    type: ErrorFullfilled,
    state: State,
    payload: data,
  };
};
export const CleanChache = (State) => {

  return {
    type: Clean,
    state:State,
  };
};
export default reducer;
