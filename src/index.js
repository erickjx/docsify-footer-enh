import { install } from './plugin-footer';

// if (!window.$docsify) {
//   window.$docsify = {}
// }
window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(install);
