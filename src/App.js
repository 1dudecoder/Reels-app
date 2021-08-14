import "./App.css";
import { createContext, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//use of this is to optimize our appp

let userContext = createContext();


function App() {
  // usefull code but now using here but this app mai use nhi hai ab
  //------------------------------------------------------//
  // useEffect(()=>{

  //   let f =  async() => {
  //     let querySnapshort = await firestore.collection("posts")  // snapshorting data from the firestore
  //     .limit(3)                        //limiting data how much you wants
  //     .get();                          // getting data

  //     querySnapshort.forEach((doc)=>{         //looping every data in firebase
  //       console.log(doc.id);                    // and then consoleing it
  //     })
  //   }
  //   f();
  // },[]);

  //------------------------------------------------------//

  //for firebase login

  let [user, setUser] = useState(null);

  //using conditional rendering here

  return (
    <div className="App">
      {/* { user ? <Home user={user} /> : <Login handleUser={setUser} /> }  */}

      <Router>
      <userContext.Provider value={user}>

        <Switch>
          <Route path="/login">
            <Login handleUser={setUser} user={user} />
          </Route>

          <Route path="/home">
            <Home user={user} />
          </Route>
        </Switch>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export { userContext };
export default App;
