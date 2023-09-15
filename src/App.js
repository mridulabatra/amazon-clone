// import React, { useEffect } from "react";
// import "./App.css";
// import Header from "./Header";
// import Home from "./Home";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Payment from "./Payment";
// import Orders from "./Orders";
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";


// const promise = loadStripe(
//   "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
// );

// function App() {
//   const [{}, dispatch] = useStateValue();

//   useEffect(() => {
//     // will only run once when the app component loads...

//     auth.onAuthStateChanged((authUser) => {
//       console.log("THE USER IS >>> ", authUser);

//       if (authUser) {
//         // the user just logged in / the user was logged in

//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="app">
//           <Route path="/orders">
//             <Header />
//             <Orders />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/checkout">
//             <Header />
//             <Checkout />
//           </Route>
//           <Route path="/payment">
//             <Header />
//             <Elements stripe={promise}>
//               <Payment />
//             </Elements>
//           </Route>
//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Header from "./Header";
import { auth } from "./firebase";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe();
function App() {
  const [{basket}, dispatch] = useStateValue();
  console.log(basket);
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);
return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>} >
          </Route>
        </Routes>
        <Header/>
        <Routes>
          
          <Route path="/" element={<Home/>} >
          </Route>
          <Route path="/checkout" element={<Checkout/>} >
          </Route>
          <Route path="/payment" element={<Payment/>} >
          </Route>
          <Route path="/orders" element={<Orders/>} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
