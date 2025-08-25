
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
    'index.csr.html': {size: 24601, hash: '8258b49c68b2d5cc028ad82286c4bcc64d33f37541c6d1d487b8c0383180b4f8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17054, hash: '570b53a88f087816745772e5d7a612cefb6b99895423ab845ab00be17d78d88f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 93681, hash: '5d7c2d9e65069cdf43b681ff6a8a09a407a60da6b7684da4e31a23c6fcb92517', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 93679, hash: 'd32ca80ec64ee0ce5979f289bc15af48aabdd42d26cce588149aa28084f93d5c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93679, hash: 'd32ca80ec64ee0ce5979f289bc15af48aabdd42d26cce588149aa28084f93d5c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'chat/index.html': {size: 111625, hash: 'f9c0383a902e12b378878e4e2ad2ce84554c099311c65acfcdc7e0f8eec8af5b', text: () => import('./assets-chunks/chat_index_html.mjs').then(m => m.default)},
    'styles-MC7DNLBQ.css': {size: 8100, hash: '8P5gQXGkqW4', text: () => import('./assets-chunks/styles-MC7DNLBQ_css.mjs').then(m => m.default)}
  },
};
