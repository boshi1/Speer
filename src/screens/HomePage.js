import * as React from 'react';
import {View, RefreshControl, Text} from 'react-native';

import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { RecyclerListView } from "recyclerlistview";
import Header from '../helper/Header.js'
const SubStory = 'item/'
import {useLayoutProvider} from '../Hooks/ListProvider.js'
import {useDataprovider} from  '../Hooks/DataProvider.js'
import {usePaging} from  '../Hooks/Paging.js'
import RowRenderer from '../components/RowRender/RowRender.js'
import {RenderFooter} from '../components/FooterRender.js'
import {Colors} from '../utils/Colors.js';
import {useFetchData} from '../Hooks/FetchData'

function HomeScreen(props) {
  const [layoutProvider] = useLayoutProvider(70)
  const [dataDataProvider,SetDataProvder]=useDataprovider()
  const [Paging,handleListEnd,SetSubStoryLength,SetFetchMore]= usePaging((value)=>{LoadingMore(value)})
  const [Users,ErrorMessage,SubStoriesLoader,LoadingMore,FirstLoad] = useFetchData(props,(value)=>{SetDataProvder(value)},(value)=>{SetSubStoryLength(value)},(value)=>{SetFetchMore(value)})


    return (
        <View style={{flex: 1,backgroundColor:Colors.BackgroundColor}}>
<Header Back={true} navigation={props.navigation} HeaderText={props.route.params.User} />
{ErrorMessage !==  ''? (<Text>{ErrorMessage}</Text>):null}
<RecyclerListView
  rowRenderer={(type, data, index)=> <RowRenderer navigation={props.navigation} type={type} data={data} index={index}/>}
  dataProvider={dataDataProvider}
  layoutProvider={layoutProvider}
  onEndReached={handleListEnd}
  scrollViewProps={{
    refreshControl:  
        <RefreshControl 
            refreshing={false} 
            onRefresh={async () => {
              FirstLoad()
            }}
        />
}}
  renderFooter={()=> <RenderFooter FooterLoading={SubStoriesLoader}/>}
/>

        </View>
    );
}




export default HomeScreen;
