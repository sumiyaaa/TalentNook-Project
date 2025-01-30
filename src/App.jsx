import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";

import { Button } from './components/ui/button.jsx';
import AppLayout from './layout/app-layout.jsx';
import LandingPage from './pages/landing.jsx';
import Onboarding from './pages/onboarding.jsx';
import JobListing from './job-listing.jsx';
import JobPage from './job.jsx';
import PostJob from './post-job.jsx';
import SavedJobs from './saved-job.jsx';
import Myjobs from './my-jobs.jsx';
import "./App.css";
import Login from './login.jsx';
import Signup from './signup.jsx';
import ProtectedRoute from './components/protected-routes';
import Candidatelogin from './candidate-login';
import RecruiterLogin from './requriter-login';
import CandidateSignup from './candidate-signup';
import ReqcriterSignup from './requriter-signup';



const  router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/onboarding',
        element:(
          <ProtectedRoute>
          <Onboarding/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/candidate-login',
        element: <Candidatelogin/>,
      },
      {
        path: '/candidate-signup',
        element: <CandidateSignup/>,
      },
      {
        path: '/requriter-login',
        element: <RecruiterLogin/>,
      },
      {
        path: '/requriter-signup',
        element: <ReqcriterSignup/>,
      },
      {
        path: '/signup',
        element: <Signup/>,
      },
      {
        path: '/jobs',
        element: <JobListing/>,
      },
      {
        path: '/job/:id',
        element: <JobPage/>,
      },
      {
        path: '/post-job',
        element: <PostJob/>
      },
      {
        path: '/saved-jobs',
        element: <SavedJobs/>
      },
      {
        path: '/my-jobs',
        element: <Myjobs/>,
      },
    ]
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

