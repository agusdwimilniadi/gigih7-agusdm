import './App.css';
import { HomePage } from './Pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SearchPage } from './Pages/Search';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/search',
      element: <SearchPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
