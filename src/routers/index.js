/* eslint-disable import/no-mutable-exports */
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import defenition from './route';

let router;
if (process.env.ROUTER === 'browser') {
  // browser || hash
  router = createBrowserRouter(defenition);
} else {
  router = createHashRouter(defenition);
}

export default router;
