import React, { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Movies } from './components/Movies';
import { fetchMoviesList } from './utils/data';
import { Root } from './components/Root';

// const RoutesJSX = (
//   <Route path="/" element={<Root />}>
//     <Route index element={<Movies />} loader={() => fetchMoviesList()} />
//     <Route
//       path="/movies/:id"
//       lazy={() => import('./components/LazyMovieDetails')}
//     />
//   </Route>
// );

// const routes = createRoutesFromElements(RoutesJSX);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Movies />,
        loader: () => fetchMoviesList(),
      },
      {
        path: '/movies/:id',
        lazy: () => import('./components/LazyMovieDetails'),
      },
    ],
  },
]);
// Render the app
const rootElement = document.getElementById('root');
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
