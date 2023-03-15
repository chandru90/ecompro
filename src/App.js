import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutus from './components/Aboutus';

import App1 from './App1';
import Home from './Home';


const router = createBrowserRouter([
    {path :'/' , element :<App1/>},
    {path :'/Aboutus' , element :<Aboutus/>},
    {path :'/Home' , element :<Home/>},])
 


function App() {
  return ( 
    <RouterProvider router={router} />
   
    
   
  );
}

export default App;