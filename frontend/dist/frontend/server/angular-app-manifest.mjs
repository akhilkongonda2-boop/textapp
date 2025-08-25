
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
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
    'index.csr.html': {size: 24601, hash: 'fe4c25e6d2494a98626f0bcbb8dbede0cd896204e9bd83a01e366826fa4de201', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17054, hash: '9cf2c0032d67da03f8c3fd7949221c0a659140100dcb5afc406c786e67e6e1d8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 93681, hash: '1af2611f6d8bc7d527ae6845ebe67f7318959ed60c1e38ec18cc0d9302c72203', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 93679, hash: '89db2017a731a5be8bf89ae5186182d4a883ba93a461a978b659b980cf4a262b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 111506, hash: '7170f891678b2073c0e6b1e16522604cfc25864a3be91871e53630e80a074ffd', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-MC7DNLBQ.css': {size: 8100, hash: '8P5gQXGkqW4', text: () => import('./assets-chunks/styles-MC7DNLBQ_css.mjs').then(m => m.default)}
  },
};
