import Login from './frontend/page/account/login'
import Home from './../src/frontend/page/home/home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ROUTES from './routers/contantroutes'
import ViewDetail from './frontend/page/viewdetail/Viewdetail.jsx';
import Cart from './frontend/page/cart/cart';
import DashBoard from './frontend/page/dashboard/DashBoard';

function App() {
  return (
    <BrowserRouter classname="my-browserrouter">
      <Routes>
        {/* Home */}
        <Route
          path = {ROUTES.home}
          element={
           <Home> </Home>
          }
         />
         <Route
          path = {ROUTES.product}
         />
         {/* Login */}
         <Route
         path = {ROUTES.login}
         element = {
          <Login></Login>
         }
         />
         <Route
         path = {ROUTES.detailview+"/:productslug"}
         element={
          <ViewDetail/>
         }
         />
         <Route 
        path = {ROUTES.cart}
        element = {
          <Cart/>
        }
      />
        <Route
          path ={ROUTES.dashboard}
          element = {
            <DashBoard/>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
