export function install(hook, vm) {
  let userOptions = vm.config.footer;

  let copy = vm.config.footer && vm.config.footer.copy ? vm.config.footer.copy : '<span>&copy; 2019.</span>';
  let auth =
    vm.config.footer && vm.config.footer.auth
      ? vm.config.footer.auth
      : '<span>Published with <a href="https://github.com/docsifyjs/docsify" target="_blank" rel="noreferrer" rel="noopener">docsify</a>.</span>';
  let style = vm.config.footer && vm.config.footer.style ? `style="${vm.config.footer.style}"` : '';
  let clazz = vm.config.footer && vm.config.footer.class ? `class="${vm.config.footer.class}"` : '';
  let pre = vm.config.footer && vm.config.footer.pre ? `${vm.config.footer.pre}` : '';

  var footer = `${pre}<footer ${style} ${clazz}>${copy} ${auth}</footer>`;

  hook.afterEach(function (html) {
    return html + footer;
  });
}
