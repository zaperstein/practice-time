import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login onLogin={setUser} />;
  }



  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Switch>
  //         <Route path="/testing">
  //           <h1>Test Route</h1>
  //         </Route>
  //         <Route path="/">
  //           <h1>Page Count: {count}</h1>
  //         </Route>
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;