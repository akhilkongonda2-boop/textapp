
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
    'index.csr.html': {size: 24601, hash: '9dd24fbb32d4e52883c5ebe4ec0dbc800d02e8f95a71c091c4936e4b10614477', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17054, hash: 'a5b87055b80896f66ae6ee70abddd4f53d601268e5ba8cb02ca0d15dd7bcb6bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 93679, hash: '1f1974e137aa266af27ee4e14c4a26cc4f417f151000f30a99518228c4193233', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 93681, hash: 'e6e5f0dc8e729690314e6ba21ac124372d567ba317fd3d4c8546eebe69795045', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 93679, hash: '1f1974e137aa266af27ee4e14c4a26cc4f417f151000f30a99518228c4193233', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 111506, hash: '8987573586906a1a84eecaaa755e1a398e2bc4af40853ffb18b46094ebd51053', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-MC7DNLBQ.css': {size: 8100, hash: '8P5gQXGkqW4', text: () => import('./assets-chunks/styles-MC7DNLBQ_css.mjs').then(m => m.default)}
  },
};
