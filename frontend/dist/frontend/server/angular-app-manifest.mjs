
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/chat"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24601, hash: '325f76ff0bdb0419caa3fae91daa59ee353b3b2071f0413082af7a6d60fcb6cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17054, hash: '99b8a4ed21fbbf2b2b449bdb336982459be2115707f37c32832cdffc71d5d236', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 93679, hash: '052463074d1af1605e7df5ce7ffa59d5cac51a078f16a25be72755a63bd27e57', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 93679, hash: '052463074d1af1605e7df5ce7ffa59d5cac51a078f16a25be72755a63bd27e57', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 93681, hash: '3914dcd7f1249027db2a3816d17feb299354eb073f909bfadade0022a54d576b', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 113050, hash: '0c604626e03b1c74b64a1498f0996db2836730caafa2068a5acc05d4d029e834', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-MC7DNLBQ.css': {size: 8100, hash: '8P5gQXGkqW4', text: () => import('./assets-chunks/styles-MC7DNLBQ_css.mjs').then(m => m.default)}
  },
};
