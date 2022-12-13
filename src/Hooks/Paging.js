import * as React from 'react';

export const usePaging = SetLoadMore => {
  const [FetchMore, SetFetchMore] = React.useState(false);

  const [Paging, SetPaging] = React.useState(1);
  const [SubStoryLength, SetSubStoryLength] = React.useState(0);
  const handleListEnd = () => {
    console.log('HandleEnd');

    console.log(SubStoryLength > 0);

    console.log(FetchMore);
    if (SubStoryLength > 0 && !FetchMore) {
      SetFetchMore(true);

      SetPaging(Paging + 1);
    }
  };
  React.useEffect(() => {
    if (Paging > 0) {
      setTimeout(() => {
        SetLoadMore(Paging);
      }, 300);
    }
  }, [Paging]);

  return [Paging, handleListEnd, SetSubStoryLength, SetFetchMore];
};
