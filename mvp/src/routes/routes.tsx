import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Scenario1 from '../scenarios/Scenario1.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "scenario1",
    element: <Scenario1 />,
  }
]);