import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import ContactNavigation from './ContactNavigation';

import App1 from './App1';
import Home from './Home';
import Contactus from './Contactus';

const router = createBrowserRouter([
    {path :'/' , element :<App1/>},
    {path :'/Aboutus' , element :<Aboutus/>},
    {path :'/Home' , element :<Home/>},
    {path :'/ContactNavigation' , element :<ContactNavigation/>}])
 


function App() {
  return ( 
    <RouterProvider router={router} />
   
    
   
  );
}

export default App;