import * as React from 'react';
import {GetUsers} from '../action/Actions.js';
const useFetchData = (
  props,
  SetDataProvder,
  SetSubStoryLength,
  SetFetchMore,
) => {
  const [ErrorMessage, SetErrorMessage] = React.useState('');
  const [Users, SetUsers] = React.useState([]);
  const [SubStoriesLoader, SetSubStoriesLoader] = React.useState(false);
  React.useEffect(() => {
    FirstLoad();
  }, []);
  React.useEffect(() => {
    if (Users.length > 0) {
      SetDataProvder(Users);
      SetSubStoryLength(Users.length);
      SetFetchMore(false);
    }
  }, [Users]);
  async function FirstLoad() {
    SetDataProvder(new Array(12).fill({}));
    SetUsers([]);
    await LoadingMore(0);
  }
  async function LoadingMore(Amount) {
    SetSubStoriesLoader(true);
    try {
      let UsersArray = await GetUsers(
        {user: props.route.params.User, Following: props.route.params.Type},
        Amount,
      );

      SetUsers([...Users, ...UsersArray]);
    } catch (err) {
      if (err === '301') {
        SetDataProvder([]);
        SetErrorMessage('The list is empty');
      } else {
        if (Users.length === 0) {
          SetDataProvder([]);
        }
        SetErrorMessage('Unkown Error has occured');
      }
    }
    SetSubStoriesLoader(false);
  }
  return [Users, ErrorMessage, SubStoriesLoader, LoadingMore, FirstLoad];
};
export {useFetchData};
