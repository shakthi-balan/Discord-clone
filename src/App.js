import React, {useEffect} from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser)=> {
      console.log("user is ", authUser);
      if (authUser){
        //the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        ); 
      }
      else {
        //user is logged it
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    // BEM naming convention
    <div className="App">
     {user ? (
        <>
          <Sidebar/>
          <Chat/>
        </>
     ): (
       <>
        <Login/>
       </>
     )}
     
    </div>
  );
}

export default App;
