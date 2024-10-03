import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
  } from 'react-router-dom';
  import { 
	  Dashboard,
  
  } from "./pages/user/index";
import PageLayouts from "./pages/layout/index";
import Login from './pages/login'
import _route from './constants/routes';
import PrivateRoute from './routeguard/privateroute'
import './App.css';

const router = createBrowserRouter(
	createRoutesFromElements(
	<>
	<Route path={_route._login}  element={<Login />} />


	<Route element={<PrivateRoute />} >
		<Route path={_route._landing_page} element={<PageLayouts.RootLayout />}>
		<Route path={_route._dashboard}  element={<Dashboard />} />

		</Route>
	</Route>
	</>
	)
  );

function App() {
  return (
    <div className="App">		
		<ToastContainer />
		<RouterProvider router={router} />
	</div>
  );
}

export default App;
