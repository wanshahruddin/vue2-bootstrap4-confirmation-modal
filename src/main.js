import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

Vue.config.productionTip = false

/**
 * Custom directives.
 */

// Bootstrap tooltip custom directive.
const bsTooltip = (el, binding) => {
  const t = [];

  if (binding.modifiers.focus) t.push('focus')
  if (binding.modifiers.hover) t.push('hover')
  if (binding.modifiers.click) t.push('click')
  if (!t.length) t.push('hover')

  $(el).tooltip({
    title: binding.value,
    placement: binding.arg || 'top',
    trigger: t.join(' '),
    html: !!binding.modifiers.html,
  });
}

Vue.directive('tooltip', {
  bind: bsTooltip,
  update: bsTooltip,
  unbind(el) {
    $(el).tooltip('dispose')
  }
});
// - End Bootstrap tooltip custom directive. -

// ---

new Vue({
  render: h => h(App),
}).$mount('#app')
