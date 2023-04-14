import { createRouter, cloneRouter } from 'router5';
import browserPlugin from 'router5-plugin-browser';


const
  router = (data => {
    const
      r = createRouter(data, { defaultRoute: '404' });
    r.usePlugin(browserPlugin());
    return r;
  })([
    { name: 'home', path: '/' },
    { name: '404', path: '/404' },
    { name: 'table', path: '/table' },


  ]),
  getClone = () => cloneRouter(router);

export { router, getClone };