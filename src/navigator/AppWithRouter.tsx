import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Database from '../Database';

interface IRouter {
  path: string;
  element: JSX.Element;
}

const routerConfig: IRouter[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add",
    element: <Database />,
  }
];

export const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
