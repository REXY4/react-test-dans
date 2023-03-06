/* eslint-disable import/no-mutable-exports */
import { createBrowserRouter } from 'react-router-dom';
import defenition from './route';

let router;
if (process.env.REACT_APP_ROUTER === 'browser') {
  router = createBrowserRouter(defenition);
} else {
  router = createHashRouter(defenition);
}

export default router;
