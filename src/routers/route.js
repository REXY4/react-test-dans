import MainView from '../views/Main.view';
import Home from '../views/Home.view';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Detail from '../views/Detail';

const defenition = [
  {
    path: '/',
    element: <PublicRoute component={<MainView />} />
  },
  {
    path: 'home',
    element: <PrivateRoute component={<Home />} />
  },
  {
    path: 'detail',
    element: <PrivateRoute component={<Detail />} />
  }
];

export default defenition;
