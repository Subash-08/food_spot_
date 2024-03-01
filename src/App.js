import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Offer from './components/Offer';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import useNetworkStatus from './utils/useNetworkStatus'
import Cart from './components/Cart';
import OrderSuccess from './components/OrderSuccess';
import AboutUs from './components/AboutUs';
import { Suspense, lazy } from 'react';
import Shimmer from './components/Shimmer';




function App() {

  const onlineStatus = useNetworkStatus();

  const Offer = lazy(() => import("../src/components/Offer"))


if(onlineStatus === false){
     return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 max-w-md w-full bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">You are offline</h2>
        <p className="text-gray-700">Please check your internet connection and try again.</p>
      </div>
    </div>
    )
     }
      
  return (
    <Router>
        <div>
          <Header />
          
          <Routes  >
              <Route path='/' element={<Body />}  />
              
              <Route path='/offer' element={<Suspense fallback={<Shimmer/>}><Offer /> </Suspense>} />
              
             
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/restaurant/:resId' element={<RestaurantMenu />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/orderplaced' element={<OrderSuccess />} />


              <Route path='*' element={<Error />} />
          </Routes>
         
        </div>
    </Router>
  );
}

export default App;
