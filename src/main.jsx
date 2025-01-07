import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Root from './components/Root/Root';
import Home from './pages/Home/Home';
import AllVisas from './pages/AllVisas/AllVisas';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import AuthProvider from './providers/AuthProvider';
import AddVisas from './pages/AddVisas/AddVisas';
import PrivateRoutes from './routes/PrivateRoutes';
import MyAllVisa from './pages/MyAllVisa/MyAllVisa';
import MyVisaApplication from './pages/MyVisaApplication/MyVisaApplication';
import VisaDetails from './components/VisaDetails/VisaDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path:'addvisa',
        element: <PrivateRoutes><AddVisas></AddVisas></PrivateRoutes>
      },
      {
        path:'myvisaapp/:email',
        element: <PrivateRoutes><MyVisaApplication></MyVisaApplication></PrivateRoutes>,
        loader: ({params}) => fetch(`https://a10-go-visa-server.vercel.app/myvisaapp/${params.email}`)
      },
      {
        path:'allvisas',
        element: <AllVisas></AllVisas>,
        loader: () => fetch('https://a10-go-visa-server.vercel.app/visas')
      },
      {
        path:'allvisas/:id',
        element: <PrivateRoutes><VisaDetails></VisaDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://a10-go-visa-server.vercel.app/visas/${params.id}`)
      },
      {
        path:'myallvisa/:email',
        element: <PrivateRoutes><MyAllVisa></MyAllVisa></PrivateRoutes>,
        loader: ({params}) => fetch(`https://a10-go-visa-server.vercel.app/emailspacific/${params.email}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
