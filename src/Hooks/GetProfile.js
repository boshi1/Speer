import * as React from 'react';
const useProfleData = ({route, GetProfile, Profiles}) => {
  const [User, SetUser] = React.useState({});
  const [Loading, SetLoading] = React.useState(true);
  const [ErrorMessage, SetErrorMessage] = React.useState('');

  React.useEffect(() => {
    LoadProfile();
  }, []);
  async function LoadProfile() {
    try {
      let Result = await GetProfile(route.params.ID, Profiles);
      SetUser({...{}, ...Result});
      SetLoading(false);
    } catch (err) {
      if (err === '321') {
        SetErrorMessage("User doesn't exist");
      } else {
        SetErrorMessage('An error occured');
      }
      SetLoading(false);
    }
  }
  return [User, Loading, ErrorMessage];
};
export {useProfleData};
