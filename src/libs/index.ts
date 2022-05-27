import SvgIcon from './svg-icon/index.vue'
import Popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // app.component('m-svg-icon', SvgIcon)
    // app.component('m-popup', Popup)
    // 自动导入
    const components = import.meta.glob('./*/index.vue')
    console.log(components)
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
}
