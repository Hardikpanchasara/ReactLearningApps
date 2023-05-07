
import './App.css';
import MainRoutes from './MainRoutes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={MainRoutes} />
  );
}

export default App;
