/* 
*Step to use google firebase
*1.Create a project on console.google.com
*2.Install firebase
*3.Register app on firebase
*4.copy firebase init with config from firebase project setting into a filr firebase.init.js 
*5.Export default app;
*6.Import app firebase init.js into app.js
*7.import getAuth from firebase/auth and create auth=getAuth(app)
*8.turn on authentication
*9.import GoogleAuthProvider (const provider = new GoogleAuthProvider)
*10.use signInWithPopup and pass auth and provider
*11.and use .then(result=>{}) for user information
*12.and use .catch(error =>{}) for error handle 
*/