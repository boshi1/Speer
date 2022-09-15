import {
  fetchData,
  CleanChache,
  SetError
} from '../reducer/AppReducers';
const fetchApi = 'https://api.github.com/users/'
const Token = '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'
export const GetProfile = (EndPoint,Profile) => {

  return async (dispatch) => {
    try {
      let UserProfile = Profile.find(obj => {
        return obj.login.toUpperCase() === EndPoint.toUpperCase()
      })
    
      if(UserProfile){
return UserProfile
      }
      const response = await  fetch(`${fetchApi}${EndPoint}`, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': Token,
            'Content-Type': 'application/json'
        }
    })
    console.log(response.status)
   
  if(response.status === 404){

    throw ('321')
  }else if(response.status != 200){
    throw ('Error Sending request')
  }
      const ResponseArray = await response.json();
      
 dispatch(fetchData([ResponseArray], 'Profiles',false));
return ResponseArray


    } catch (err) {
      throw (err)

    }
  };
};

export const GetUsers= async ({user,Following},Paging)=> {

    try {
            const response = await  fetch(`${fetchApi}${user}/${Following}?per_page=10&page=${Paging}`, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': Token,
            'Content-Type': 'application/json'
        }
    })

    if(response.status != 200){
      throw ('Error Sending request')
    }
        const ResponseArray = await response.json();
        if(ResponseArray.length == 0 && Paging == 1){
          throw('301')
        }
        return ResponseArray

    } catch (err) {

      dispatch(SetError("An error occurred 300", 'Profile'));
      throw(err)
        

    
  };
};





export const Clean = () => {
  return async (dispatch) => {

    try{
       dispatch(CleanChache('Profiles'))
    }catch (e){
      console.log(e)
    }

       

 
  };
};
