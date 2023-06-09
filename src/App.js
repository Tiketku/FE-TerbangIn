import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css'
import Beranda from './pages/Beranda/Beranda';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />,
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
   
  );
}

export default App;
