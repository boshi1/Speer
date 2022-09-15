# Speer

=================
### Took around 12 hours to make

```
### Install dependencies
$ npm install
```
# IMPORTANT 


please make sure to have a path for android sdk if not 
then go to
```/android```
create  ```local.properties``` file
and put the path for android sdk  like

```sdk.dir=your android sdk path```
For example 
```sdk.dir=/***/****/Library/Android/sdk```

### running application
```
$ npx react-native run-android
```

####  Features
 * animated skeleton screen loading
 * Pull to refresh
 * Custom fonts
 * infinite scroll
 * Cache profile with redux
 * uses recyclelistview for maximum performance (no glitches and can handle above 1000 row)
 
 



#### Information
 * Entry point is app.js in root directory loads navigation(stack) and redux
 * /src/action for redux(action) and api
 * /component/profile for profile screen components  (Screen name : screens/profile)
 * /component/recent for main page recent (Screen name : screens/home) (shows the last 10 profiles)
 * /component/rowRender for Followers(Screen name : screen/homePage) (shows the last 10 profiles)
 

   

      
   
