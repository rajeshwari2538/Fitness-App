import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import About from './components/About';
import Gallery from "./components/Gallery"
import Plans from "./components/Plans"
import Trainers from "./components/Trainers"
import Contact from "./components/Contact"


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/plans",
        element: <Plans />
      },
      {
        path: "/trainers",
        element: <Trainers />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
